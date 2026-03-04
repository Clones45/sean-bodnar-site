import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function EarnestMoneyEldershurgPage() {
    return (
        <>
            <SEO
                title="What Is Earnest Money When Buying a Home in Eldersburg, MD?"
                description="Learn what earnest money is, how much is typical in Eldersburg MD, when it's required, and what happens to it if a deal falls through in Carroll County."
                canonical="https://www.sellingwithsean.com/faq/earnest-money-eldersburg-real-estate"
                keywords="earnest money Eldersburg MD, good faith deposit Carroll County, earnest money Maryland, how much earnest money Maryland, escrow deposit real estate"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Shield className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What is earnest money, and when is it required during the transaction?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Everything Eldersburg home buyers need to know about the good-faith deposit.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Earnest money is a <strong>good-faith deposit</strong> submitted by the buyer after an offer is accepted and a contract is executed. It demonstrates to the seller that the buyer is serious about the purchase and is willing to put capital at risk.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            In Eldersburg, the amount is negotiable but typically ranges from <strong>1% to 3% of the purchase price</strong>. This money is held in an escrow account by the brokerage or a title company and is eventually applied toward the buyer's down payment or closing costs at settlement.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            If the buyer breaches the contract without a legal contingency such as a failed inspection the earnest money may be <strong>forfeited to the seller as liquidated damages</strong> according to the contract terms.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Key Earnest Money Facts for Eldersburg Buyers</h2>
                            <ul className="space-y-3">
                                {[
                                    'Typical range: 1%–3% of the purchase price in Eldersburg/Carroll County',
                                    'Submitted after your offer is accepted and the contract is executed',
                                    'Held in escrow by the brokerage or title company not given to the seller',
                                    'Applied to your down payment or closing costs at settlement',
                                    'Protected if you exit via a valid contingency (inspection, financing, appraisal)',
                                    'May be forfeited if you breach the contract without a contingency',
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
                        <h2 className="text-3xl font-bold mb-4">Protect Your Deposit With the Right Contingencies</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar ensures every offer is structured to protect your earnest money while remaining competitive.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
