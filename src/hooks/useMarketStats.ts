import { useEffect, useState } from 'react';

export interface MarketStats {
    median_sale_price: string | null;
    days_on_market: string | null;
    inventory: string | null;
    market_type: string | null;
    trend_summary: string | null;
    last_updated: string | null;
    status: 'ok' | 'error' | 'pending';
}

interface UseMarketStatsResult {
    data: MarketStats | null;
    loading: boolean;
    error: string | null;
}

const DEFAULT_DATA: MarketStats = {
    median_sale_price: null,
    days_on_market: null,
    inventory: null,
    market_type: null,
    trend_summary: null,
    last_updated: null,
    status: 'pending',
};

export function useMarketStats(): UseMarketStatsResult {
    const [data, setData] = useState<MarketStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetch('/data/md_market_stats.json')
            .then(async (res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json: MarketStats = await res.json();
                if (!cancelled) setData(json);
            })
            .catch((err) => {
                console.warn('[useMarketStats] Failed to load md_market_stats.json:', err);
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
