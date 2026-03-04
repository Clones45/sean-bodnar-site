import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Home, CheckCircle, ArrowRight } from 'lucide-react';

export default function FirstStepHomeBuyingEldershurgPage() {
    return (
        <>
            <SEO
                title="First Step in the Home Buying Process in Eldersburg, MD"
                description="Learn the very first step every home buyer must take before searching for a home in Eldersburg, MD. Expert guidance from local realtor Sean Bodnar."
                canonical="https://www.sellingwithsean.com/faq/first-step-home-buying-eldersburg"
                keywords="first step home buying Eldersburg, home buying process Eldersburg MD, mortgage pre-approval Eldersburg, buying a home in 21784"
            />

            <div className="min-h-screen">
                {/* Hero */}
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Home className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What is the very first step in the home buying process in Eldersburg?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A local realtor's guide to getting started the right way in the 21784 market.
                        </p>
                    </div>
                </section>

                {/* Answer */}
                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
                        <p className="text-lg leading-relaxed mb-6">
                            The foundational step for any prospective purchaser in the Eldersburg market is securing a <strong>formal mortgage pre-approval</strong>. This process involves a comprehensive review of the buyer's financial profile by a certified lender, including credit history, income, and debt-to-income ratios.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            In a competitive seller's market like 21784, a pre-approval letter serves as a vital signal of credibility to listing agents and sellers. Without this documentation, buyers risk losing properties to prepared competitors. Most Eldersburg realtors will not facilitate showings, particularly for luxury or high-demand listings, without verification of financial capacity.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            This step also allows buyers to calculate their effective purchasing power, accounting for Maryland's specific property taxes and closing costs while narrowing their search to realistic budgets.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                            <ul className="space-y-3">
                                {[
                                    'Get pre-approved by a certified lender before touring any homes in Eldersburg',
                                    'Pre-approval reviews your credit, income, and debt-to-income ratio',
                                    'A pre-approval letter signals credibility to sellers in a competitive market',
                                    'Knowing your budget narrows your search and saves valuable time',
                                    'Carroll County closing costs and taxes should be factored into your budget',
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

                {/* CTA */}
                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Buy a Home in Eldersburg?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Sean Bodnar is a local Eldersburg realtor ready to guide you from pre-approval to closing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                                <a href="/faq/questions-ask-realtor-eldersburg">Next: How to Interview a Realtor</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
