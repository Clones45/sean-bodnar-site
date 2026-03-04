import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Droplets, CheckCircle, ArrowRight } from 'lucide-react';

export default function WellSepticSystemsEldershurgPage() {
    return (
        <>
            <SEO
                title="Well and Septic Systems in Eldersburg, MD Real Estate Transactions"
                description="Learn how private well and septic systems affect home purchases in Eldersburg MD. What tests are required, what to look for, and how to protect yourself as a buyer."
                canonical="https://www.sellingwithsean.com/faq/well-septic-systems-eldersburg"
                keywords="well septic Eldersburg MD, private well home buying Maryland, septic inspection Carroll County, well water test Maryland, septic transfer inspection"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Droplets className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            How do well and septic systems affect a real estate transaction in Eldersburg?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Many Eldersburg homes use private systems here's what every buyer needs to know before closing.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Properties in Eldersburg often utilize <strong>private well and septic systems</strong> rather than public utilities. This requires the inclusion of a specialized addendum in the contract, allowing for technical testing during the contingency period.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Buyers should conduct a <strong>flow test</strong> to measure well yield and a water quality test for bacteria, nitrates, and lead. For septic systems, a Maryland-certified professional must perform a transfer inspection, often including a hydraulic load test and tank pumping.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The state requires a <strong>100-foot separation</strong> between the well head and the septic drain field to prevent contamination. Buyers should also verify that the property has an approved "reserve area" for future septic replacement a failing system can cost many thousands of dollars to replace.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Required Tests for Well & Septic in Carroll County</h2>
                            <ul className="space-y-3">
                                {[
                                    'Well flow test verifies adequate water yield for the home',
                                    'Water quality test screens for bacteria, nitrates, lead, and other contaminants',
                                    'Septic transfer inspection by a Maryland-certified professional',
                                    'Hydraulic load test verifies the drain field is functioning correctly',
                                    'Septic tank pumping required as part of the transfer inspection',
                                    'Verify 100-ft separation between well and septic drain field',
                                    'Confirm approved "reserve area" for future septic replacement',
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
                        <h2 className="text-3xl font-bold mb-4">Navigate Well & Septic With Confidence</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar has managed hundreds of well/septic transactions in Carroll County and knows exactly what to look for.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
