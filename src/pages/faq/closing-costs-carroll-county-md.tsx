import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Receipt, CheckCircle, ArrowRight } from 'lucide-react';

export default function ClosingCostsCarrollCountyPage() {
    return (
        <>
            <SEO
                title="Closing Costs for Home Buyers in Carroll County, MD"
                description="Find out what closing costs home buyers should expect to pay in Carroll County, Maryland including state transfer taxes, title fees, and lender charges in Eldersburg."
                canonical="https://www.sellingwithsean.com/faq/closing-costs-carroll-county-md"
                keywords="closing costs Carroll County MD, home buyer closing costs Maryland, title insurance Carroll County, transfer tax Maryland, Eldersburg closing costs"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Receipt className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What closing costs should a buyer expect to pay in Carroll County?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A breakdown of every fee a buyer pays at the settlement table in Eldersburg, MD.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Closing costs in Maryland generally range from <strong>2% to 5% of the home's purchase price</strong>. In Carroll County, these costs include state transfer taxes, recordation fees, title insurance, and lender fees such as appraisals and originations.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Importantly, <strong>Carroll County does not impose a separate local transfer tax</strong>, which saves buyers money compared to neighboring counties like Howard or Montgomery County.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Buyers should also factor in "pre-paids," which include initial escrow deposits for property taxes and homeowner's insurance. First-time buyers may be eligible for a 0.25% reduction in the state transfer tax, further reducing their out-of-pocket costs at settlement.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            {[
                                { label: 'Typical Range', value: '2%–5%', note: 'Of the purchase price' },
                                { label: 'Local Transfer Tax', value: '$0', note: 'Carroll County has no local transfer tax' },
                                { label: 'First-Time Buyer Discount', value: '−0.25%', note: 'On Maryland state transfer tax' },
                                { label: 'Pre-Paids', value: 'Included', note: 'Tax/insurance escrow deposits' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5 text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="font-semibold mb-1">{stat.label}</div>
                                    <div className="text-sm text-muted-foreground">{stat.note}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-4">
                            <h2 className="text-2xl font-bold mb-4">Common Closing Costs in Carroll County</h2>
                            <ul className="space-y-3">
                                {[
                                    "State transfer tax (buyer's share)",
                                    'Recordation fees (county deed recording)',
                                    'Lender origination fees and appraisal costs',
                                    "Title insurance (lender's policy + optional owner's policy)",
                                    'Pre-paids: home insurance, property tax escrow, prepaid interest',
                                    'Home inspection and well/septic testing (paid before closing)',
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
                        <h2 className="text-3xl font-bold mb-4">Get a Closing Cost Estimate for Your Eldersburg Home</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar will provide a detailed net sheet so you know every dollar before settlement day.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
