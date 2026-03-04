import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Search, CheckCircle, ArrowRight } from 'lucide-react';

export default function HomeInspectionEldershurgPage() {
    return (
        <>
            <SEO
                title="Home Inspection in Eldersburg, MD Why It Matters for Buyers"
                description="Understand why a home inspection is critical when buying in Eldersburg MD. Common issues found in Carroll County homes and how inspections protect your investment."
                canonical="https://www.sellingwithsean.com/faq/home-inspection-eldersburg"
                keywords="home inspection Eldersburg MD, home inspector Carroll County, what does a home inspection find, home inspection Maryland, buying a home inspection 21784"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Search className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What is the importance of a home inspection in the Eldersburg area?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A home inspection is your most powerful protection before committing to one of your largest financial decisions.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            A comprehensive home inspection is an essential safeguard, identifying <strong>structural, mechanical, and safety issues</strong> before they become the buyer's financial burden. In the Eldersburg region, inspectors frequently uncover issues such as roofing deficiencies, outdated electrical wiring, and plumbing leaks.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Because many homes in the area were built in the 1970s and 80s, inspectors also look for <strong>aging HVAC systems</strong> and evidence of foundation settlement. These are common in the 21784 market and can represent significant repair costs if not identified before purchase.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The inspection report serves as a <strong>critical negotiation tool</strong>, allowing the buyer to request repairs, credits toward closing, or even terminate the contract if major defects are found. It provides the knowledge necessary to make an informed investment.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Common Issues Found in Eldersburg Homes</h2>
                            <ul className="space-y-3">
                                {[
                                    'Roofing deficiencies worn shingles, flashing issues, or gutter problems',
                                    'Outdated electrical panels (Federal Pacific, Zinsco, or older wiring)',
                                    'Plumbing leaks or aging galvanized pipe systems',
                                    'Aging HVAC systems with limited remaining service life',
                                    'Foundation settlement or water intrusion in basements',
                                    'Radon gas (testing highly recommended in Maryland)',
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
                        <h2 className="text-3xl font-bold mb-4">Trusted Home Inspectors for Eldersburg Buyers</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar has a vetted network of local inspectors who know Carroll County homes inside and out.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
