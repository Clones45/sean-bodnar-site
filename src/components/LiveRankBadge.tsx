import { TrendingUp } from 'lucide-react';
import { useSeoStats } from '@/hooks/useSeoStats';
import { cn } from '@/lib/utils';

interface LiveRankBadgeProps {
    className?: string;
    variant?: 'default' | 'solid' | 'light';
}

export function LiveRankBadge({ className, variant = 'default' }: LiveRankBadgeProps) {
    const { data, loading } = useSeoStats();

    if (loading || !data || data.status === 'pending') return null;
    // Fail-safe: hide badge if we have no actual rank number
    if (!data.rank) return null;

    const rankLabel =
        data.rank === 1
            ? '#1 on Google Maps'
            : `Ranked #${data.rank} on Google Maps`;

    const getVariantClasses = () => {
        switch (variant) {
            case 'solid':
                return 'bg-primary text-primary-foreground border-transparent shadow-sm';
            case 'light':
                return 'bg-white/90 backdrop-blur-sm text-black border-white/20 shadow-lg hover:bg-white transition-colors';
            default:
                return 'bg-primary/10 border-primary/20 text-primary';
        }
    };

    return (
        <div className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300",
            getVariantClasses(),
            className
        )}>
            {/* Pulsing live dot */}
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <TrendingUp className="w-3.5 h-3.5" />
            {rankLabel}
        </div>
    );
}
