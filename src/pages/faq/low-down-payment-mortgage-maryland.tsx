import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Banknote, CheckCircle, ArrowRight } from 'lucide-react';

export default function LowDownPaymentMortgageMarylandPage() {
    return (
        <>
            <SEO
                title="Low Down Payment Mortgage Options in Maryland | FHA, VA, USDA Loans"
                description="Explore low and no down payment mortgage options available to Maryland home buyers including FHA, VA, USDA, and the Maryland Mortgage Program."
                canonical="https://www.sellingwithsean.com/faq/low-down-payment-mortgage-maryland"
                keywords="low down payment mortgage Maryland, FHA loan Eldersburg, VA loan Carroll County, USDA loan Maryland, no down payment home Maryland"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Banknote className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What are the options for a low-down-payment or no-down-payment mortgage in Maryland?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            You don't need 20% down to buy a home in Eldersburg here are your financing options.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Several programs exist to assist Maryland buyers who lack a 20% down payment. <strong>FHA loans</strong> are a popular choice, requiring as little as 3.5% down and catering to those with less-than-perfect credit.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            For eligible veterans and active-duty military, <strong>VA loans</strong> offer 100% financing with zero down payment and competitive rates. Additionally, <strong>USDA loans</strong> provide zero-down-payment options for properties located in designated rural areas of Carroll County.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The <strong>Maryland Mortgage Program</strong> also offers various advantage loans that can be paired with down payment assistance. While these options increase accessibility, buyers should be aware that lower down payments often trigger Private Mortgage Insurance (PMI), which increases the monthly mortgage obligation.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            {[
                                { program: 'FHA Loan', detail: 'As low as 3.5% down. Available to most buyers with credit scores 580+.' },
                                { program: 'VA Loan', detail: '0% down for eligible veterans and active military. No PMI required.' },
                                { program: 'USDA Loan', detail: '0% down for rural Carroll County areas. Income limits apply.' },
                                { program: 'MD Mortgage Program', detail: 'Competitive rates + down payment assistance grants for qualifying buyers.' },
                            ].map((prog, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5">
                                    <div className="font-bold text-primary mb-1">{prog.program}</div>
                                    <div className="text-sm text-muted-foreground">{prog.detail}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-4">
                            <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                            <ul className="space-y-3">
                                {[
                                    'FHA loans require just 3.5% down and accept credit scores as low as 580',
                                    'VA loans allow eligible veterans to buy with zero down payment',
                                    'USDA loans offer no-down-payment options in parts of Carroll County',
                                    'The Maryland Mortgage Program pairs low rates with down payment grants',
                                    'Low down payments typically require PMI factor this into your monthly budget',
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
                        <h2 className="text-3xl font-bold mb-4">Find the Right Financing for Your Eldersburg Home</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar connects buyers with trusted lenders who know every Maryland mortgage program inside and out.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
