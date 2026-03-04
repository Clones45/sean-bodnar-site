import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';

export default function OfferRejectedEldershurgPage() {
    return (
        <>
            <SEO
                title="What to Do If Your Offer on an Eldersburg Home Is Rejected"
                description="Learn your options when an offer on an Eldersburg MD home is rejected. Strategies for escalation clauses, counteroffers, and continuing your home search."
                canonical="https://www.sellingwithsean.com/faq/offer-rejected-eldersburg"
                keywords="offer rejected Eldersburg MD, home offer rejected Carroll County, escalation clause Maryland, how to win a bidding war Eldersburg"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <RefreshCw className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What should a buyer do if their offer on an Eldersburg home is rejected?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A rejected offer isn't the end here's how to recover and come back stronger.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            In the competitive Carroll County market, offer rejection is a common occurrence. Buyers have three primary strategic paths: <strong>boosting the offer price, requesting a counteroffer, or continuing the search</strong>.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            If the rejection was based on price and the buyer has the financial ceiling, increasing the offer or including an escalation clause can be effective. If the seller is open to negotiation, the buyer's agent can inquire about other terms such as a flexible closing date or waiving certain non-structural contingencies.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            If the gap is too large or the seller has accepted a superior cash offer, the buyer must remain resilient and move on to new listings. A knowledgeable agent will analyze the rejection to refine the buyer's strategy for subsequent opportunities.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Your 3 Options After a Rejected Offer</h2>
                            <ul className="space-y-3">
                                {[
                                    'Increase your offer price if you have financial room to do so',
                                    'Add an escalation clause to automatically beat competing offers up to a cap',
                                    'Adjust terms flexible closing date, fewer contingencies to appeal to sellers',
                                    'Request a counteroffer through your agent to negotiate common ground',
                                    'Move on to new listings and apply lessons learned to the next offer',
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
                        <h2 className="text-3xl font-bold mb-4">Make a Winning Offer in Eldersburg</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar crafts strategic offers designed to win even in competitive Carroll County situations.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
