import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

export default function QuestionsAskRealtorEldershurgPage() {
    return (
        <>
            <SEO
                title="Questions to Ask When Interviewing a Realtor in Eldersburg, MD"
                description="Find out exactly what to ask a realtor before hiring them in Eldersburg, MD. Learn the key questions about local expertise, negotiation, and availability."
                canonical="https://www.sellingwithsean.com/faq/questions-ask-realtor-eldersburg"
                keywords="questions to ask realtor Eldersburg MD, interviewing a realtor Carroll County, best realtor Eldersburg MD, how to choose a real estate agent Maryland"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <MessageSquare className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What specific questions should I ask when interviewing a potential realtor in Eldersburg?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            The right questions reveal whether an agent truly knows the 21784 market or just pretends to.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Interviewing a realtor requires a focus on <strong>local expertise, transactional history, and communication compatibility</strong>. Buyers should ask: "How many transactions did you close in Eldersburg specifically in the last year?" and "What is your average list-to-sales price ratio?"
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            It is critical to understand their negotiation strategy and how they handle multiple-offer situations, which are common in Carroll County. Furthermore, inquire about their availability. some agents work part-time, which can be a liability in a market where homes move in under 30 days.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Finally, asking for references from the last three clients provides a transparent window into their professional conduct and ability to manage the complexities of the Maryland real estate contract and specific local system inspections.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Top Questions to Ask Any Eldersburg Realtor</h2>
                            <ul className="space-y-3">
                                {[
                                    'How many transactions did you close in Eldersburg in the last 12 months?',
                                    'What is your average list-to-sales price ratio?',
                                    'How do you handle multiple-offer situations in Carroll County?',
                                    'Are you a full-time agent? How quickly can you respond to new listings?',
                                    'Can I speak with three of your most recent buyer clients as references?',
                                    'How experienced are you with well/septic addenda and local inspection contingencies?',
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
                        <h2 className="text-3xl font-bold mb-4">Interview Sean Bodnar Today</h2>
                        <p className="text-xl mb-8 opacity-90">Sean is a full-time Eldersburg realtor with deep local expertise and proven results in Carroll County.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
