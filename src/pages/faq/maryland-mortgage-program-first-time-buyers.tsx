import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Home, CheckCircle, ArrowRight } from 'lucide-react';

export default function MarylandMortgageProgramPage() {
    return (
        <>
            <SEO
                title="Maryland Mortgage Program for First-Time Home Buyers | Eldersburg MD"
                description="Learn how the Maryland Mortgage Program helps first-time buyers in Eldersburg with competitive interest rates and down payment assistance up to $8,500 or more."
                canonical="https://www.sellingwithsean.com/faq/maryland-mortgage-program-first-time-buyers"
                keywords="Maryland Mortgage Program, first time home buyer Maryland, down payment assistance Maryland, MMP Eldersburg, DHCD Maryland home buyer"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Home className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            How does the Maryland Mortgage Program assist first-time home buyers?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Maryland's own mortgage program offers rates AND grants to lower the barrier to homeownership in Eldersburg.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            The <strong>Maryland Mortgage Program</strong>, managed by the Department of Housing and Community Development (DHCD), is designed to encourage responsible homeownership among Maryland's working families.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            A "first-time homebuyer" is defined as someone who has not owned a principal residence in the last three years, though exceptions exist for veterans and those buying in "targeted areas." The program provides <strong>competitive interest rate loans</strong> and significant down payment assistance often in the form of deferred, 0% interest loans of up to $8,500 or more through partner matches.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            These funds are typically repaid only when the home is sold, refinanced, or the primary mortgage is satisfied making it a powerful tool for overcoming the initial cash hurdle required to enter the housing market.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Key Benefits of the Maryland Mortgage Program</h2>
                            <ul className="space-y-3">
                                {[
                                    'Competitive interest rates below market average',
                                    'Down payment assistance up to $8,500+ (0% interest deferred loan)',
                                    'No repayment until you sell, refinance, or pay off the primary mortgage',
                                    "Available to buyers who haven't owned a home in the last 3 years",
                                    'Veterans and targeted area buyers may qualify regardless of prior ownership',
                                    'Can be combined with local partner grants for even more assistance',
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
                        <h2 className="text-3xl font-bold mb-4">Find Out If You Qualify for MMP</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar works with MMP-approved lenders and can connect you with the right resources.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
