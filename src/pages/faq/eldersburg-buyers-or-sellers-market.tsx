import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function EldeshurgBuyersOrSellersMarketPage() {
    return (
        <>
            <SEO
                title="Is Eldersburg MD a Buyer's or Seller's Market in 2025?"
                description="Find out if the Eldersburg, MD real estate market is a buyer's or seller's market in 2025. Current data on inventory, days on market, and sale-to-list ratios."
                canonical="https://www.sellingwithsean.com/faq/eldersburg-buyers-or-sellers-market"
                keywords="buyer seller market Eldersburg MD, Eldersburg real estate market 2025, Carroll County housing market, is it a good time to buy in Eldersburg"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <TrendingUp className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Is the current Eldersburg real estate market considered a buyer's or a seller's market?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Current market data for the 21784 zip code and what it means for home buyers.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            As of late 2025, Eldersburg is firmly classified as a <strong>seller's market</strong>. This designation is supported by a sale-to-list price ratio of 100%, indicating that homes generally sell for their full asking price.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The demand remains high due to Eldersburg's reputation for excellent schools and its strategic location between major cities, while inventory remains lean at approximately 96 active listings. In a seller's market, buyers must be prepared for limited negotiation leverage on price and may encounter multiple-offer scenarios.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            However, broader Maryland trends suggest a slow shift toward a more balanced environment, as "Months of Inventory" and "Days on Market" have begun a gradual increase statewide, providing some relief from the hyper-competitive conditions of previous years.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 my-8">
                            {[
                                { label: 'Sale-to-List Ratio', value: '100%', note: 'Homes sell at full asking price' },
                                { label: 'Active Listings', value: '~96', note: 'Lean inventory drives competition' },
                                { label: 'Median Days on Market', value: '29', note: 'Fast-moving market in 21784' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5 text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="font-semibold mb-1">{stat.label}</div>
                                    <div className="text-sm text-muted-foreground">{stat.note}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">What This Means for Buyers</h2>
                            <ul className="space-y-3">
                                {[
                                    'Get pre-approved and be ready to act quickly when the right home appears',
                                    'Expect limited price negotiation most homes sell at or above asking price',
                                    'Be prepared for multiple-offer situations on desirable properties',
                                    'Work with a full-time local agent who can alert you to new listings immediately',
                                    'A gradual shift toward balance may provide more options for 2026 buyers',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Win in Eldersburg's Competitive Market?</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar knows how to help buyers succeed even in a strong seller's market.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
