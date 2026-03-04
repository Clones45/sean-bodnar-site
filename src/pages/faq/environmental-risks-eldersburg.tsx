import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function EnvironmentalRisksEldershurgPage() {
    return (
        <>
            <SEO
                title="Environmental Risks for Home Buyers in Eldersburg, MD"
                description="What environmental risks should home buyers be aware of in Eldersburg, MD? Learn about radon gas, flooding, wildfire risk, and other environmental considerations in Carroll County."
                canonical="https://www.sellingwithsean.com/faq/environmental-risks-eldersburg"
                keywords="environmental risks Eldersburg MD, radon test Maryland, flood risk Carroll County, buying home environmental hazards Eldersburg, Eldersburg MD environmental"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <AlertTriangle className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What environmental risks should home buyers consider when looking in Eldersburg?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Eldersburg is a safe community but informed buyers still do their environmental due diligence.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            While Eldersburg is <strong>not a high-risk zone</strong> for major natural disasters, buyers should be aware of certain localized factors. Some properties near streams or low-lying areas face a moderate risk of flooding over the long term.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The heavily wooded nature of many neighborhoods also introduces a moderate risk for wildfires during drought conditions, though these are historically rare. A significant environmental consideration is the <strong>increasing summer heat</strong>, which may impact cooling costs in the future.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Finally, <strong>radon gas</strong> is a known concern in many parts of Maryland, and professional testing is a standard part of the home inspection process to ensure indoor air quality meets safety standards for residents.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            {[
                                { risk: 'Radon Gas', level: 'Moderate', note: 'Professional testing recommended at every home purchase in Maryland' },
                                { risk: 'Flooding', level: 'Low–Moderate', note: 'Properties near streams or low-lying areas may carry elevated flood risk' },
                                { risk: 'Wildfire', level: 'Low', note: 'Wooded areas present some risk during drought historically rare' },
                                { risk: 'Heat Increase', level: 'Future Consideration', note: 'Summer heat trends may affect long-term cooling costs' },
                            ].map((risk, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5">
                                    <div className="font-bold text-primary mb-1">{risk.risk}</div>
                                    <div className="text-sm font-medium mb-1">Risk Level: {risk.level}</div>
                                    <div className="text-sm text-muted-foreground">{risk.note}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-4">
                            <h2 className="text-2xl font-bold mb-4">Environmental Due Diligence Checklist for Eldersburg Buyers</h2>
                            <ul className="space-y-3">
                                {[
                                    'Include radon testing as part of your standard home inspection package',
                                    'Check FEMA flood maps for any property near streams or low-lying terrain',
                                    'Ask your realtor about wildfire risk for heavily wooded properties',
                                    'Verify Superfund disclosure (within 1 mile of an NPL site)',
                                    'Request water quality testing for private well properties',
                                    'Review the property\'s drainage and grading during wet weather if possible',
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
                        <h2 className="text-3xl font-bold mb-4">Buy With Confidence in Eldersburg</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar ensures every buyer has a complete environmental due diligence plan before making an offer.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
