import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, CheckCircle, TrendingUp } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ResidentialSalesPage() {
    return (
        <>
            <SEO
                title="Residential Home Sales in Maryland"
                description="Expert residential home sales in Eldersburg, Sykesville, Carroll County, and Howard County, MD. Get the best price for your home with Sean Bodnar."
                canonical="https://www.sellingwithsean.com/services/residential-sales"
                keywords="Sell Home in Carroll County, List my house in Eldersburg, Residential Real Estate Agent, Sell Home Howard County"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Residential Home Sales
                                </h1>
                                <p className="text-xl text-muted-foreground mb-6">
                                    Expert guidance through every step of selling your home, from pricing strategy to closing day.
                                </p>
                                <p className="text-lg mb-6">
                                    Selling your home is a major decision. My goal is to make the process as seamless and profitable as possible for you.
                                    I utilize comprehensive market analysis, targeted marketing, and strong negotiation skills to get your home sold fast and for top dollar.
                                </p>
                                <Button size="lg" asChild>
                                    <a href="/#contact">List Your Home with Me</a>
                                </Button>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/496773708_659385303520007_5983690197855846040_.jpg"
                                    alt="Residential Home Sales in Maryland"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                My Proven Selling Process
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                A strategic approach tailored to your property.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <TrendingUp className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">1. Strategic Pricing</h3>
                                        <p className="text-muted-foreground">
                                            I conduct a thorough comparative market analysis (CMA) to price your home competitively, maximizing its appeal while ensuring you get the best return.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Home className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">2. Home Preparation & Staging</h3>
                                        <p className="text-muted-foreground">
                                            First impressions matter. I advise on staging, decluttering, and minor repairs that have the highest return on investment.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <CheckCircle className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">3. Aggressive Marketing</h3>
                                        <p className="text-muted-foreground">
                                            Your home gets maximum exposure across the MLS, social media, and the Keller Williams network, targeting the right buyers.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Sell?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's discuss how much your home is worth in today's market.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="https://seanbodnar.boblucidoteam.com/valuation" target="_blank" rel="noopener noreferrer">Free Home Valuation</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
