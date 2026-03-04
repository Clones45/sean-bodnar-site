import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { CalendarDays, CheckCircle, ArrowRight } from 'lucide-react';

export default function CommunityEventsEldershurgPage() {
    return (
        <>
            <SEO
                title="Community Events in Eldersburg, MD Throughout the Year"
                description="Learn about the vibrant community events calendar in Eldersburg and Sykesville, MD including seasonal festivals, farmers' markets, library programs, and more."
                canonical="https://www.sellingwithsean.com/faq/community-events-eldersburg"
                keywords="community events Eldersburg MD, things to do Eldersburg Maryland, Sykesville festivals, Carroll County events, farmers market Eldersburg"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <CalendarDays className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Does Eldersburg host regular community events throughout the year?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Eldersburg and neighboring Sykesville are known for their vibrant, year-round community calendar.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Eldersburg and the adjacent town of <strong>Sykesville maintain a vibrant community calendar</strong>. The area is famous for its main street events, including seasonal festivals, farmers' markets, and holiday celebrations.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The local library branch is a hub for <strong>educational events and guest speaker series</strong>. For families and active adults, local parks host summer camps and nature-based programs throughout the warmer months.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            These events foster strong community ties and contribute to Eldersburg's reputation as <strong>one of the best suburbs for families in Maryland</strong>. Residents often volunteer at these events, further strengthening the social fabric of the South Carroll region.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Community Highlights in Eldersburg & Sykesville</h2>
                            <ul className="space-y-3">
                                {[
                                    'Main street seasonal festivals in Sykesville throughout the year',
                                    "Weekly farmers' markets with locally grown produce and artisan goods",
                                    'Holiday celebrations and special community events',
                                    'Carroll County library programs, guest speakers, and educational workshops',
                                    'Summer camps and nature-based programs at local parks',
                                    'High volunteer participation a hallmark of the South Carroll community',
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
                        <h2 className="text-3xl font-bold mb-4">Join the Eldersburg Community</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar is a proud local and can help you find the perfect neighborhood to call home.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
