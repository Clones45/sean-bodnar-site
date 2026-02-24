import { useEffect, useState } from 'react';

export interface SeoReview {
    author: string;
    text: string;
    rating: number | null;
}

export interface SeoStats {
    rank: number | null;
    average_rating: number | null;
    review_count: number | null;
    reviews: SeoReview[];
    last_updated: string | null;
    status: 'ok' | 'partial' | 'error' | 'pending';
}

interface UseSeoStatsResult {
    data: SeoStats | null;
    loading: boolean;
    error: string | null;
}

const DEFAULT_DATA: SeoStats = {
    rank: null,
    average_rating: null,
    review_count: null,
    reviews: [],
    last_updated: null,
    status: 'pending',
};

export function useSeoStats(): UseSeoStatsResult {
    const [data, setData] = useState<SeoStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetch('/data/seo_stats.json')
            .then(async (res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json: SeoStats = await res.json();
                if (!cancelled) setData(json);
            })
            .catch((err) => {
                console.warn('[useSeoStats] Failed to load seo_stats.json:', err);
                if (!cancelled) {
                    setData(DEFAULT_DATA);
                    setError(err.message);
                }
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return { data, loading, error };
}
