import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function SuperfundDisclosureMarylandPage() {
    return (
        <>
            <SEO
                title="Superfund Disclosure Requirements in Maryland Real Estate"
                description="Learn about Maryland's Superfund disclosure law requiring sellers to notify buyers if a property is within one mile of a National Priorities List site in Eldersburg, MD."
                canonical="https://www.sellingwithsean.com/faq/superfund-disclosure-maryland-real-estate"
                keywords="Superfund disclosure Maryland, NPL site Maryland real estate, environmental disclosure Maryland, Eldersburg environmental hazards, Maryland real estate disclosure law"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <MapPin className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What is the "Superfund" disclosure requirement in Maryland real estate?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Maryland law protects buyers from unknowingly purchasing near hazardous waste sites.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Maryland law requires sellers to disclose if a property is located <strong>within one mile of a National Priorities List (NPL) Superfund site</strong>. If a property falls within this radius, the seller must provide a specific addendum to the contract of sale.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            This addendum notifies the buyer of their right to <strong>terminate the contract within five days</strong> of execution if they are dissatisfied with the proximity to the site. While Eldersburg is primarily residential, buyers should verify this during their due diligence to ensure environmental safety.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The <strong>Maryland Department of the Environment</strong> provides resources and maps to check specific addresses for Superfund disclosure requirements as part of the standard buyer research process.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Key Facts About Maryland Superfund Disclosure</h2>
                            <ul className="space-y-3">
                                {[
                                    'Applies if the property is within 1 mile of an EPA Superfund/NPL site',
                                    'Seller must provide a specific disclosure addendum in the contract',
                                    'Buyers have 5 days after execution to terminate the contract if dissatisfied',
                                    'Use the Maryland Department of the Environment maps to verify any property',
                                    'Eldersburg is primarily residential with low environmental hazard risk',
                                    "This check should be part of every buyer's due diligence routine",
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
                        <h2 className="text-3xl font-bold mb-4">Get Complete Due Diligence Support</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar guides buyers through every required disclosure and environmental check in Maryland.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
