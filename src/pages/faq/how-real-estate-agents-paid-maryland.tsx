import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowAgentsPaidMarylandPage() {
    return (
        <>
            <SEO
                title="How Are Real Estate Agents Paid in Maryland?"
                description="Understand how real estate agent compensation works in Maryland, including buyer's agent fees, seller-paid commissions, and the new brokerage agreement rules."
                canonical="https://www.sellingwithsean.com/faq/how-real-estate-agents-paid-maryland"
                keywords="real estate agent commission Maryland, how realtors get paid Maryland, buyer agent fee Eldersburg, real estate compensation Maryland"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <DollarSign className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            How do real estate agents in Maryland receive compensation for their services?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Understanding agent fees and the new transparency rules in the Maryland real estate market.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Traditionally, real estate commissions in Maryland are paid by the <strong>seller as a percentage of the final sale price</strong>, which is then split between the listing brokerage and the buyer's brokerage. However, recent industry changes emphasize that commissions are always negotiable and must be clearly outlined in a written brokerage agreement.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            While the seller often covers these costs to facilitate the transaction, buyers should review their specific agreement to understand if they are responsible for any gaps between the seller's offer and the agent's fee.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Transparency is mandated; agents must disclose if they are authorized to receive cooperative compensation from the listing side, ensuring the buyer understands exactly how their representative is being paid throughout the entire professional relationship.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                            <ul className="space-y-3">
                                {[
                                    'Commissions are typically paid by the seller as a percentage of the sale price',
                                    "The commission is split between the listing and buyer's brokerage",
                                    'All commissions are negotiable and must be in a written brokerage agreement',
                                    'Maryland law requires full disclosure of how your agent is compensated',
                                    'Buyers should always review their brokerage agreement carefully before signing',
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
                        <h2 className="text-3xl font-bold mb-4">Questions About Working With a Realtor?</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar is transparent about fees and committed to your best interests.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
