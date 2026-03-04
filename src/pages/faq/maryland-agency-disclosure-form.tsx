import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { FileText, CheckCircle, ArrowRight } from 'lucide-react';

export default function MarylandAgencyDisclosureFormPage() {
    return (
        <>
            <SEO
                title="Maryland Agency Disclosure Form What Buyers Need to Know"
                description="Learn about the mandatory 'Understanding Whom Real Estate Agents Represent' disclosure form required by Maryland law before working with any real estate agent."
                canonical="https://www.sellingwithsean.com/faq/maryland-agency-disclosure-form"
                keywords="Maryland agency disclosure form, Understanding Whom Real Estate Agents Represent Maryland, Maryland real estate agent disclosure, buyer agent representation Maryland"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <FileText className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What is the "Understanding Whom Real Estate Agents Represent" form required by Maryland?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Maryland law mandates this disclosure to protect home buyers from the very first meeting.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Maryland law necessitates the disclosure of agency relationships early in the real estate interaction. The <strong>"Understanding Whom Real Estate Agents Represent"</strong> form is a mandatory disclosure provided at the first scheduled face-to-face meeting.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            This document is not a contract; rather, it is an educational tool that explains the roles of the seller's agent, the buyer's agent, and the dual agent. It ensures the consumer knows exactly where the agent's fiduciary duties lie before any confidential information is shared.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            If a buyer refuses to sign the acknowledgement, the licensee is permitted to self-certify that the disclosure was made. However, buyers should understand that formal representation only begins once a brokerage agreement is executed between the buyer and the agent.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                            <ul className="space-y-3">
                                {[
                                    'This form must be given at or before the first face-to-face meeting with an agent',
                                    'It educates buyers it is NOT a contract or binding agreement',
                                    "It explains seller's agent, buyer's agent, and dual agent roles",
                                    "Your agent's fiduciary duties are clarified before any confidential info is shared",
                                    'Actual representation begins only when a formal brokerage agreement is signed',
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
                        <h2 className="text-3xl font-bold mb-4">Work With a Transparent Eldersburg Realtor</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar keeps every buyer fully informed from your very first meeting.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
