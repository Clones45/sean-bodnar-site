import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';

export default function PropertyTaxesCarrollCountyPage() {
    return (
        <>
            <SEO
                title="How Are Property Taxes Calculated in Carroll County, MD?"
                description="Learn how residential property taxes are calculated in Carroll County MD, including the current tax rate, assessed values, and discounts available to homeowners in Eldersburg."
                canonical="https://www.sellingwithsean.com/faq/property-taxes-carroll-county-md"
                keywords="property taxes Carroll County MD, Carroll County tax rate, Eldersburg property tax, Maryland property tax homeowners, real estate taxes 21784"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Calculator className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            How are property taxes calculated in Carroll County for residential homes?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Carroll County's property tax rate is notably lower than many neighboring Maryland counties.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Property taxes in Maryland are calculated by multiplying the home's assessed value by the county's tax rate. In Carroll County, the <strong>effective property tax rate is approximately 0.85%</strong>, which is notably lower than some neighboring counties.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The county's current rate is <strong>$1.018 per $100 of assessed value</strong>. For a median-valued home in Eldersburg, the annual tax bill is predictable and manageable. The county also offers a small discount for full payments made early in the fiscal year.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Buyers should be aware that their monthly mortgage payment typically includes a portion of this annual tax amount held in escrow. The "Constant Yield Tax Rate" is also provided annually to show how the current rate compares to the revenue-neutral rate from the previous cycle.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 my-8">
                            {[
                                { label: 'County Tax Rate', value: '$1.018', note: 'Per $100 of assessed value' },
                                { label: 'Effective Rate', value: '~0.85%', note: 'Lower than Howard & Montgomery County' },
                                { label: 'Payment Discount', value: 'Available', note: 'For early full-year payment' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5 text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="font-semibold mb-1">{stat.label}</div>
                                    <div className="text-sm text-muted-foreground">{stat.note}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-4">
                            <h2 className="text-2xl font-bold mb-4">What Eldersburg Home Buyers Should Know About Property Taxes</h2>
                            <ul className="space-y-3">
                                {[
                                    "Carroll County's rate of $1.018/$100 is competitive among Maryland counties",
                                    'Your mortgage servicer will typically escrow 1/12 of your annual tax bill monthly',
                                    'Maryland assesses properties on a 3-year cycle values may lag market prices',
                                    'New buyers should request a tax estimate from their lender before closing',
                                    'The early-payment discount can save a small amount each year',
                                    'Ask your realtor for a net sheet showing estimated annual property taxes',
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
                        <h2 className="text-3xl font-bold mb-4">Understand Your Full Cost of Ownership in Eldersburg</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar provides detailed cost-of-ownership breakdowns for every property so there are no surprises.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
