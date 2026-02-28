"""
fetch_gbp_data.py
-----------------
Scrapes Google Search local pack ranking for Sean Bodnar and extracts
the latest 3 reviews + average rating from his Google Business Profile.

Output: public/data/seo_stats.json

Usage:
    pip install scrapling playwright
    playwright install chromium --with-deps
    python scripts/fetch_gbp_data.py

Environment Variables (optional):
    SEARCH_KEYWORD   — keyword to check local pack rank (default: "Realtor in Eldersburg")
    TARGET_NAME      — business name to match in results (default: "Sean Bodnar")
    OUTPUT_PATH      — path to write JSON (default: public/data/seo_stats.json)
"""

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

# ── Config ──────────────────────────────────────────────────────────────────
SEARCH_KEYWORD = os.getenv("SEARCH_KEYWORD", "Realtor in Eldersburg")
TARGET_NAME    = os.getenv("TARGET_NAME", "Sean Bodnar")
SCRIPT_DIR     = Path(__file__).parent
REPO_ROOT      = SCRIPT_DIR.parent
OUTPUT_PATH    = Path(os.getenv("OUTPUT_PATH", str(REPO_ROOT / "public" / "data" / "seo_stats.json")))

# ── Helpers ──────────────────────────────────────────────────────────────────

def load_existing() -> Dict[str, Any]:
    """Return the previously saved JSON (to preserve data on partial failure)."""
    if OUTPUT_PATH.exists():
        try:
            with open(OUTPUT_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}


def save(data: Dict[str, Any]) -> None:
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"[fetch_gbp_data] Written → {OUTPUT_PATH}")


def star_text_to_float(text: str) -> float | None:
    """Convert '4.9 stars' or '4,9' style strings to float."""
    match = re.search(r"[\d]+[.,][\d]+|[\d]+", text.replace(",", "."))
    return float(match.group()) if match else None


# ── Main scrape ───────────────────────────────────────────────────────────────

def scrape() -> Dict[str, Any]:
    try:
        from scrapling.fetchers import DynamicFetcher
    except ImportError:
        print("[fetch_gbp_data] ERROR: scrapling is not installed. Run: pip install scrapling", file=sys.stderr)
        raise

    fetcher = DynamicFetcher(
        auto_match=False,
        headless=True,
        stealth=True,
        network_idle=True,
    )

    result: Dict[str, Any] = {
        "rank": None,
        "average_rating": None,
        "review_count": None,
        "reviews": [],
        "last_updated": datetime.now(timezone.utc).isoformat(),
        "status": "ok",
    }

    # ── 1. Local pack rank ───────────────────────────────────────────────────
    # UULE encodes the canonical location for geo-accurate results:
    # "Eldersburg,Maryland,United States" — verified from a local perspective.
    UULE = "w+CAIQICInRWxkZXJzYnVyZyxNYXJ5bGFuZCxVbml0ZWQgU3RhdGVz"
    search_url = (
        f"https://www.google.com/search"
        f"?q={SEARCH_KEYWORD.replace(' ', '+')}"
        f"&gl=us&hl=en&uule={UULE}"
    )
    print(f"[fetch_gbp_data] Fetching local pack (geo: Eldersburg MD): {search_url}")

    try:
        page = fetcher.fetch(search_url)

        # Google local pack items typically appear in a div.VkpGBb or g-card list
        # We look for any local result that contains our target name.
        local_results = page.css("div.VkpGBb, div[jsdata] .dbg0pd, .cXedhc")

        found_rank = None
        for i, item in enumerate(local_results[:3], start=1):
            text = item.text.lower()
            if TARGET_NAME.lower() in text:
                found_rank = i
                break

        # Broader fallback: search all visible text chunks for our name
        if found_rank is None:
            all_chunks = page.css(".rllt__details, .section-result-title, [data-local-attribute='d1']")
            for i, chunk in enumerate(all_chunks[:3], start=1):
                if TARGET_NAME.lower() in chunk.text.lower():
                    found_rank = i
                    break

        result["rank"] = found_rank
        print(f"[fetch_gbp_data] Local pack rank: {found_rank}")

    except Exception as exc:
        print(f"[fetch_gbp_data] WARN: local pack scrape failed — {exc}", file=sys.stderr)
        result["status"] = "partial"

    # ── 2. GBP reviews + rating ──────────────────────────────────────────────
    # Apply the same UULE geo parameter for consistent local perspective
    reviews_url = (
        f"https://www.google.com/search"
        f"?q={TARGET_NAME.replace(' ', '+')}+realtor+Eldersburg+reviews"
        f"&gl=us&hl=en&uule={UULE}"
    )
    print(f"[fetch_gbp_data] Fetching reviews (geo: Eldersburg MD): {reviews_url}")

    try:
        rpage = fetcher.fetch(reviews_url)

        # Average rating from Knowledge Panel
        rating_selectors = [
            "span.Aq14fc",           # KP star rating value
            "[data-attrid='kc:/local:star_score'] span",
            "div.Z0LcW",
        ]
        for sel in rating_selectors:
            nodes = rpage.css(sel)
            if nodes:
                rating_val = star_text_to_float(nodes[0].text)
                if rating_val:
                    result["average_rating"] = rating_val
                    break

        # Review count
        count_nodes = rpage.css("span.hqzQac, [data-attrid='kc:/local:all_reviews'] span")
        if count_nodes:
            nums = re.findall(r"\d+", count_nodes[0].text.replace(",", ""))
            if nums:
                result["review_count"] = int(nums[0])

        # Individual review snippets
        review_nodes = rpage.css("div.Jtu6fd, div.gws-localreviews__google-review, div[data-reviewid]")

        reviews = []
        for node in review_nodes[:3]:
            text_node = node.css("span.review-full-text, div.Jtu6fd span, .wiI7pd")
            author_node = node.css("div.TSUbDb a, span.X43Kjb, .d4r55")
            rating_node = node.css("span.ODSEW-ShSNwe-star-container, span[aria-label*='star']")

            text   = text_node[0].text.strip()  if text_node   else ""
            author = author_node[0].text.strip() if author_node else "Google Reviewer"
            stars  = None

            if rating_node:
                aria = rating_node[0].attrib.get("aria-label", "")
                stars = star_text_to_float(aria) if aria else None

            if text:
                reviews.append({"author": author, "text": text, "rating": stars})

        result["reviews"] = reviews
        print(f"[fetch_gbp_data] Reviews found: {len(reviews)}, avg rating: {result['average_rating']}")

    except Exception as exc:
        print(f"[fetch_gbp_data] WARN: reviews scrape failed — {exc}", file=sys.stderr)
        result["status"] = "partial"

    return result


# ── Entry point ───────────────────────────────────────────────────────────────

def main():
    existing = load_existing()
    try:
        data = scrape()
        # Merge: keep old reviews/rating if new scrape got nothing
        if not data.get("reviews") and existing.get("reviews"):
            data["reviews"] = existing["reviews"]
        if data.get("average_rating") is None and existing.get("average_rating"):
            data["average_rating"] = existing["average_rating"]
        if data.get("review_count") is None and existing.get("review_count"):
            data["review_count"] = existing["review_count"]
    except Exception as exc:
        print(f"[fetch_gbp_data] FATAL: {exc}", file=sys.stderr)
        # Preserve existing data, just flag the error
        data = existing or {}
        data["status"] = "error"
        data["last_updated"] = datetime.now(timezone.utc).isoformat()

    save(data)


if __name__ == "__main__":
    main()
