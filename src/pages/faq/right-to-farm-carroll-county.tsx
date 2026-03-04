import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Trees, CheckCircle, ArrowRight } from 'lucide-react';

export default function RightToFarmCarrollCountyPage() {
    return (
        <>
            <SEO
                title="Right to Farm Laws in Carroll County, MD What Home Buyers Must Know"
                description="Learn about Carroll County's Right to Farm laws and how they affect home buyers near agricultural land in Eldersburg, MD. Farm odors, noise, and buyer disclosure requirements."
                canonical="https://www.sellingwithsean.com/faq/right-to-farm-carroll-county"
                keywords="right to farm Carroll County MD, agricultural disclosure Maryland, farm near home Eldersburg, living near farm Carroll County, Maryland farm disclosure real estate"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Trees className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What are the "Right to Farm" laws in Carroll County, and how do they impact residents?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Carroll County actively protects its agricultural heritage and buyers near farm land need to know what that means.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Carroll County is a <strong>"Right to Farm" jurisdiction</strong>, which means the county actively protects agricultural operations from nuisance lawsuits. Homebuyers near agricultural land must sign a disclosure acknowledging that they may experience odors, noise, dust, flies, and the operation of machinery at any hour.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            These inconveniences are <strong>not considered legal interferences</strong> with the reasonable use and enjoyment of the land if the farm follows generally accepted agricultural practices. This law is intended to reduce conflict between traditional agricultural uses and new residential developments.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Buyers should embrace the <strong>rural character of Eldersburg</strong> while understanding that agricultural sounds and smells are protected parts of the local culture and will persist regardless of neighborhood growth.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">What Buyers Near Agricultural Land Must Understand</h2>
                            <ul className="space-y-3">
                                {[
                                    'Carroll County actively protects farms from nuisance lawsuits',
                                    'Buyers near agricultural land must sign an agricultural proximity disclosure',
                                    'Farm odors, noise, dust, and machinery are legally protected activities',
                                    'These cannot be contested as nuisances if the farm follows accepted practices',
                                    "This law reflects Carroll County's deep agricultural heritage",
                                    "Farm activity near your home is a protected part of the community's character",
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
                        <h2 className="text-3xl font-bold mb-4">Find the Right Neighborhood in Eldersburg</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar helps buyers understand every disclosure and find homes that perfectly match their lifestyle preferences.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
