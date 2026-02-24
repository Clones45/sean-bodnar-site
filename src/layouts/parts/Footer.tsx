import { Mail, Phone, MapPin, Star, TrendingUp } from 'lucide-react';
import { useSeoStats } from '@/hooks/useSeoStats';

// ── Helpers ──────────────────────────────────────────────────────────────────

function StarRating({ rating, max = 5 }: { rating: number | null; max?: number }) {
    if (!rating) return null;
    return (
        <span className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
            {Array.from({ length: max }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/40'}`}
                />
            ))}
        </span>
    );
}

function AuthorAvatar({ name }: { name: string }) {
    const initials = name
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase() ?? '')
        .join('');
    return (
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
            {initials || '?'}
        </span>
    );
}

// ── Live Rank Badge ───────────────────────────────────────────────────────────

function LiveRankBadge() {
    const { data, loading } = useSeoStats();

    if (loading || !data || data.status === 'pending') return null;
    // Fail-safe: hide badge if we have no actual rank number
    if (!data.rank) return null;

    const rankLabel =
        data.rank === 1
            ? '#1 on Google Maps'
            : `Ranked #${data.rank} on Google Maps`;

    return (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
            {/* Pulsing live dot */}
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <TrendingUp className="w-3 h-3" />
            {rankLabel}
        </div>
    );
}

// ── Reviews Column ────────────────────────────────────────────────────────────

function LatestReviews() {
    const { data, loading } = useSeoStats();

    if (loading) {
        return (
            <div>
                <h4 className="text-sm font-semibold mb-4">Latest Client Reviews</h4>
                <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse flex gap-2">
                            <div className="w-7 h-7 rounded-full bg-muted-foreground/20 flex-shrink-0" />
                            <div className="flex-1 space-y-1.5">
                                <div className="h-2 bg-muted-foreground/20 rounded w-3/4" />
                                <div className="h-2 bg-muted-foreground/20 rounded w-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!data || data.status === 'pending' || data.reviews.length === 0) return null;

    return (
        <div>
            <h4 className="text-sm font-semibold mb-1">Latest Client Reviews</h4>
            {/* Average rating summary */}
            {data.average_rating !== null && (
                <div className="flex items-center gap-1.5 mb-4">
                    <StarRating rating={data.average_rating} />
                    <span className="text-xs text-muted-foreground">
                        {data.average_rating.toFixed(1)}
                        {data.review_count ? ` (${data.review_count.toLocaleString()} reviews)` : ''}
                    </span>
                </div>
            )}
            <ul className="space-y-4">
                {data.reviews.slice(0, 3).map((review, idx) => (
                    <li key={idx} className="flex gap-2.5">
                        <AuthorAvatar name={review.author} />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                                <span className="text-xs font-medium truncate">{review.author}</span>
                                <StarRating rating={review.rating} />
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                "{review.text}"
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ── Footer ────────────────────────────────────────────────────────────────────

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <img
                                src="https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/images%20(2).png"
                                alt="Bob Lucido Team Logo"
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-4">Sean Bodnar - Keller Williams Lucido Agency</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                            Your trusted realtor in Eldersburg, MD. Serving Carroll County, Howard County, and surrounding Maryland communities.
                        </p>
                        {/* Live Google Rank Badge */}
                        <LiveRankBadge />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-muted-foreground">Residential Home Sales</li>
                            <li className="text-sm text-muted-foreground">First-Time Buyers</li>
                            <li className="text-sm text-muted-foreground">Luxury Properties</li>
                            <li className="text-sm text-muted-foreground">Market Analysis</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <a href="mailto:seanbodnar@boblucidoteam.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">seanbodnar@boblucidoteam.com</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+14109403032" className="text-sm text-muted-foreground hover:text-primary transition-colors">Direct: (410) 940-3032</a>
                                    <a href="tel:+14104656900" className="text-sm text-muted-foreground hover:text-primary transition-colors">Office: (410) 465-6900</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                    Serving Eldersburg, Sykesville, Howard County & Surrounding Areas<br />
                                    <span className="text-xs opacity-75">21784, 21048, 21104, 21797, 21774, 21029, 21042</span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Latest Client Reviews */}
                    <div>
                        <LatestReviews />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            <img
                                src="/realtor-eho-logos.png"
                                alt="Equal Housing Opportunity and REALTOR® Logos"
                                className="h-10 w-auto object-contain dark:invert opacity-75 hover:opacity-100 transition-opacity"
                            />
                            <p className="text-sm text-muted-foreground text-center md:text-left">
                                © {currentYear} Sean Bodnar - Keller Williams Lucido Agency. All rights reserved.
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
