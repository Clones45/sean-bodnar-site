import { SEO } from '@/components/SEO';
import { BookOpen, ArrowRight } from 'lucide-react';

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

export default function FaqIndexPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <SEO 
                title="Real Estate Guides & FAQs | Sean Bodnar"
                description="Browse our complete library of real estate guides and FAQs for buying or selling a home in Eldersburg, Carroll County, and Howard County."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                        Real Estate Guides & Resources
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know about buying, selling, and owning a home in Eldersburg and the surrounding Maryland communities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FAQ_LINKS.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href}
                            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/30 transition-all duration-200 group flex flex-col justify-between"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary flex-shrink-0">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                                        {link.label}
                                    </h3>
                                </div>
                            </div>
                            <div className="text-sm font-medium text-primary flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                Read Guide <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
