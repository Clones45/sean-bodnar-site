import { Mail, Phone, MapPin, Star } from 'lucide-react';


// ── FAQ Links Data ────────────────────────────────────────────────────────────

const FAQ_LINKS = [
    { href: '/faq/first-step-home-buying-eldersburg', label: 'First Step in Home Buying' },
    { href: '/faq/how-real-estate-agents-paid-maryland', label: 'How Agents Are Paid in MD' },
    { href: '/faq/questions-ask-realtor-eldersburg', label: 'Questions to Ask a Realtor' },
    { href: '/faq/maryland-agency-disclosure-form', label: 'MD Agency Disclosure Form' },
    { href: '/faq/eldersburg-buyers-or-sellers-market', label: "Buyer's or Seller's Market?" },
    { href: '/faq/days-on-market-21784-zip-code', label: 'Days on Market in 21784' },
    { href: '/faq/factors-impact-home-value-eldersburg', label: 'What Drives Home Values?' },
    { href: '/faq/offer-rejected-eldersburg', label: 'Offer Rejected? Next Steps' },
    { href: '/faq/foreclosures-eldersburg-md', label: 'Foreclosures in Eldersburg' },
    { href: '/faq/low-down-payment-mortgage-maryland', label: 'Low Down Payment Mortgages' },
    { href: '/faq/maryland-mortgage-program-first-time-buyers', label: 'MD Mortgage Program' },
    { href: '/faq/closing-costs-carroll-county-md', label: 'Closing Costs in Carroll Co.' },
    { href: '/faq/earnest-money-eldersburg-real-estate', label: 'What Is Earnest Money?' },
    { href: '/faq/home-inspection-eldersburg', label: 'Home Inspection Importance' },
    { href: '/faq/well-septic-systems-eldersburg', label: 'Well & Septic Systems' },
    { href: '/faq/superfund-disclosure-maryland-real-estate', label: 'Superfund Disclosure MD' },
    { href: '/faq/right-to-farm-carroll-county', label: 'Right to Farm Laws' },
    { href: '/faq/property-taxes-carroll-county-md', label: 'Property Taxes in Carroll Co.' },
    { href: '/faq/schools-eldersburg-md', label: 'Schools in Eldersburg' },
    { href: '/faq/commute-eldersburg-to-baltimore-dc', label: 'Commute to Baltimore / D.C.' },
    { href: '/faq/internet-broadband-eldersburg', label: 'Internet & Broadband Options' },
    { href: '/faq/recreational-amenities-liberty-reservoir-piney-run', label: 'Liberty Reservoir & Piney Run' },
    { href: '/faq/restaurants-eldersburg-md', label: 'Best Restaurants in Eldersburg' },
    { href: '/faq/community-events-eldersburg', label: 'Community Events' },
    { href: '/faq/new-housing-developments-eldersburg-2025-2026', label: 'New Housing Developments' },
    { href: '/faq/commercial-development-eldersburg', label: 'Commercial Development' },
    { href: '/faq/hoa-vs-non-hoa-eldersburg', label: 'HOA vs. Non-HOA Neighborhoods' },
    { href: '/faq/diversity-eldersburg-community', label: 'Diversity in Eldersburg' },
    { href: '/faq/environmental-risks-eldersburg', label: 'Environmental Risks' },
    { href: '/faq/long-term-home-value-outlook-eldersburg', label: 'Long-Term Value Outlook' },
];

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

import { LiveRankBadge } from '@/components/LiveRankBadge';

import { useState, useEffect } from 'react';

// ── Reviews Column ────────────────────────────────────────────────────────────

function LatestReviews() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch('/api/reviews');
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

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

    if (!data || !data.reviews || data.reviews.length === 0) return null;

    return (
        <div>
            <h4 className="text-sm font-semibold mb-1">Latest Client Reviews</h4>
            {/* Average rating summary */}
            {data.rating && (
                <div className="flex items-center gap-1.5 mb-4">
                    <StarRating rating={data.rating} />
                    <span className="text-xs text-muted-foreground">
                        {data.rating.toFixed(1)}
                        {data.userRatingCount ? ` (${data.userRatingCount.toLocaleString()} reviews)` : ''}
                    </span>
                </div>
            )}
            <ul className="space-y-4">
                {data.reviews.slice(0, 3).map((review: any, idx: number) => (
                    <li key={idx} className="flex gap-2.5">
                        {review.authorAttribution?.photoUri ? (
                            <img 
                                src={review.authorAttribution.photoUri} 
                                alt={review.authorAttribution.displayName} 
                                className="w-7 h-7 rounded-full"
                                referrerPolicy="no-referrer"
                            />
                        ) : (
                            <AuthorAvatar name={review.authorAttribution?.displayName || "Google User"} />
                        )}
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col mb-1">
                                <span className="text-xs font-medium truncate mb-0.5">{review.authorAttribution?.displayName || "Google User"}</span>
                                <StarRating rating={review.rating} />
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                "{review.text?.text}"
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
        <footer className="bg-white text-slate-600 border-t border-slate-200" itemScope itemType="https://schema.org/WPFooter">
            {/* Top CTA Banner */}
            <div className="bg-primary/5 border-b border-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 font-heading tracking-tight">Ready to start your real estate journey?</h2>
                        <p className="text-slate-600 text-sm md:text-base max-w-xl leading-relaxed">
                            Whether you're buying your first home or selling a luxury property in Carroll or Howard County, I'm here to help you achieve your goals.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group">
                            Contact Sean Today
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Info (takes 4 columns on large screens) */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <div className="mb-6 self-start">
                            <img
                                src="https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/images%20(2).png"
                                alt="Bob Lucido Team of Keller Williams Logo"
                                className="h-16 md:h-20 w-auto object-contain transition-opacity hover:opacity-90"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading tracking-tight">Sean Bodnar <span className="block text-primary text-base font-sans mt-1">Keller Williams Lucido Agency</span></h3>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-sm">
                            Your trusted realtor in Eldersburg, MD. Serving Carroll County, Howard County, and surrounding Maryland communities with unparalleled expertise and dedication.
                        </p>
                        <LiveRankBadge />
                    </div>

                    {/* Navigation Links (3 cols) */}
                    <nav className="lg:col-span-2" aria-label="Quick Links Navigation">
                        <h3 className="text-sm font-semibold text-slate-900 tracking-widest uppercase mb-5">Quick Links</h3>
                        <ul className="space-y-3.5">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About Me' },
                                { href: '/services/residential-sales', label: 'Home Sales' },
                                { href: '/services/first-time-buyers', label: 'First-Time Buyers' },
                                { href: '/services/market-analysis', label: 'Market Analysis' },
                                { href: '/#contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-sm text-slate-500 hover:text-primary transition-colors duration-200">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Featured Guides (3 cols) */}
                    <nav className="lg:col-span-3" aria-label="Featured Buyer Guides Navigation">
                        <h3 className="text-sm font-semibold text-slate-900 tracking-widest uppercase mb-5">Featured Guides</h3>
                        <ul className="space-y-3.5">
                            {FAQ_LINKS.slice(0, 5).map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-sm text-slate-500 hover:text-primary transition-colors duration-200 line-clamp-1" title={link.label}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <a href="/faq" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1.5 group">
                                    Browse all guides
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact Details (3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold text-slate-900 tracking-widest uppercase mb-5">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                                <a href="mailto:seanbodnar@boblucidoteam.com" className="text-sm text-slate-500 hover:text-primary transition-colors duration-200 break-all leading-tight">
                                    seanbodnar@boblucidoteam.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                                <div className="flex flex-col space-y-1">
                                    <a href="tel:+14109403032" className="text-sm text-slate-500 hover:text-primary transition-colors duration-200">
                                        <span className="text-xs uppercase tracking-wider text-slate-400 mr-2 block sm:inline">Direct</span> (410) 940-3032
                                    </a>
                                    <a href="tel:+14104656900" className="text-sm text-slate-500 hover:text-primary transition-colors duration-200">
                                        <span className="text-xs uppercase tracking-wider text-slate-400 mr-2 block sm:inline">Office</span> (410) 465-6900
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                                <span className="text-sm text-slate-500 leading-relaxed">
                                    Serving Eldersburg, Sykesville, Howard County & Surrounding Areas<br />
                                    <span className="text-xs text-slate-400 font-mono mt-1.5 block tracking-widest">21784 • 21048 • 21104 • 21797</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Legal Bar */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex items-center gap-5 opacity-70 hover:opacity-100 transition-opacity grayscale contrast-200">
                                <a href="https://www.nar.realtor/" target="_blank" rel="noopener noreferrer" aria-label="Visit the National Association of Realtors website">
                                    <img
                                        src="/realtor-eho-logos.png"
                                        alt="Equal Housing Opportunity and REALTOR® Logos"
                                        className="h-10 w-auto object-contain transition-transform hover:scale-105"
                                    />
                                </a>
                                <a href="https://kw.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Keller Williams official website">
                                    <div
                                        className="h-12 w-32 bg-slate-900 transition-transform hover:scale-105"
                                        style={{
                                            WebkitMaskImage: 'url(/assets/photos/KwLogo.png)',
                                            WebkitMaskSize: 'contain',
                                            WebkitMaskRepeat: 'no-repeat',
                                            WebkitMaskPosition: 'center',
                                            maskImage: 'url(/assets/photos/KwLogo.png)',
                                            maskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            maskPosition: 'center',
                                        }}
                                        aria-label="Keller Williams Realtor Logo"
                                        role="img"
                                    />
                                </a>
                            </div>
                            <p className="text-sm text-slate-500 text-center md:text-left font-medium">
                                © {currentYear} Sean Bodnar - Keller Williams Lucido Agency. <br className="sm:hidden" />All rights reserved.
                            </p>
                        </div>
                        <nav aria-label="Legal Navigation" className="flex gap-6">
                            <a href="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-sm text-slate-500 hover:text-primary transition-colors">
                                Terms of Service
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
