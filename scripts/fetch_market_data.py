"""
fetch_market_data.py
-----------------
Fetches broad Maryland / Carroll County real estate market summaries 
using public sources. Outputs to public/data/md_market_stats.json.

Usage:
    pip install scrapling playwright
    playwright install chromium --with-deps
    python scripts/fetch_market_data.py
"""

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict

OUTPUT_PATH = Path(os.getenv("OUTPUT_PATH", str(Path(__file__).parent.parent / "public" / "data" / "md_market_stats.json")))

def load_existing() -> Dict[str, Any]:
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
    print(f"[fetch_market_data] Written → {OUTPUT_PATH}")

def scrape() -> Dict[str, Any]:
    try:
        from scrapling.fetchers import PlayWrightFetcher
    except ImportError:
        print("[fetch_market_data] ERROR: scrapling is not installed.", file=sys.stderr)
        raise

    fetcher = PlayWrightFetcher(
        auto_match=False,
        headless=True,
        stealth=True,
        network_idle=True,
    )

    result = {
        "median_sale_price": None,
        "days_on_market": None,
        "inventory": None,
        "market_type": "Neutral",
        "last_updated": datetime.now(timezone.utc).isoformat(),
        "status": "ok",
        "trend_summary": ""
    }

    url = "https://www.redfin.com/county/1339/MD/Carroll-County/housing-market"
    print(f"[fetch_market_data] Fetching market data: {url}")

    try:
        page = fetcher.fetch(url)

        # Scrape general stats
        stats_containers = page.css('.key-stats .stat-block, .stat-block')
        
        for stat in stats_containers:
            label_node = stat.css('.label, .stat-label')
            value_node = stat.css('.value, .stat-value')
            
            if not label_node or not value_node:
                continue
                
            label = label_node[0].text.lower()
            val_text = value_node[0].text.strip()
            
            if 'median sale' in label:
                result["median_sale_price"] = val_text
            elif 'days on market' in label:
                result["days_on_market"] = val_text
            elif 'homes sold' in label or 'inventory' in label:
                result["inventory"] = val_text
                
        # Competing market type
        compete_score_node = page.css('.compete-score .score, .compete-text')
        if compete_score_node:
            text = compete_score_node[0].text.lower()
            if 'very competitive' in text:
                result["market_type"] = 'Very Competitive'
            elif 'somewhat competitive' in text:
                result["market_type"] = 'Somewhat Competitive'
            elif 'buyer' in text:
                result["market_type"] = "Buyer's Market"
            elif 'seller' in text:
                result["market_type"] = "Seller's Market"
                
        # Trend summary
        trend_node = page.css('.market-summary-text, .market-trend-paragraph')
        if trend_node:
            result["trend_summary"] = trend_node[0].text.strip()

        print(f"[fetch_market_data] Done. Price: {result['median_sale_price']}, DOM: {result['days_on_market']}")

    except Exception as exc:
        print(f"[fetch_market_data] WARN: scrape failed — {exc}", file=sys.stderr)
        result["status"] = "error"

    return result

def main():
    existing = load_existing()
    try:
        data = scrape()
        
        # If scrape essentially failed, fallback
        if not data.get("median_sale_price") and existing.get("median_sale_price"):
            data["median_sale_price"] = existing["median_sale_price"]
        if not data.get("days_on_market") and existing.get("days_on_market"):
            data["days_on_market"] = existing["days_on_market"]
        if not data.get("inventory") and existing.get("inventory"):
            data["inventory"] = existing["inventory"]
        if not data.get("market_type") and existing.get("market_type"):
            data["market_type"] = existing["market_type"]
        if not data.get("trend_summary") and existing.get("trend_summary"):
            data["trend_summary"] = existing["trend_summary"]
            
    except Exception as exc:
        print(f"[fetch_market_data] FATAL: {exc}", file=sys.stderr)
        data = existing or {}
        data["status"] = "error"
        data["last_updated"] = datetime.now(timezone.utc).isoformat()

    save(data)

if __name__ == "__main__":
    main()
