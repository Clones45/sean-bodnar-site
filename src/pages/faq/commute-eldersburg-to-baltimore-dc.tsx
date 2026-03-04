import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Car, CheckCircle, ArrowRight } from 'lucide-react';

export default function CommuteEldershurgBaltimoreDCPage() {
    return (
        <>
            <SEO
                title="Commute from Eldersburg MD to Baltimore & Washington D.C."
                description="Find out how long it takes to commute from Eldersburg, MD to Baltimore and Washington D.C. Typical drive times, highway routes, and MARC train options."
                canonical="https://www.sellingwithsean.com/faq/commute-eldersburg-to-baltimore-dc"
                keywords="commute Eldersburg to Baltimore, Eldersburg to DC commute time, drive from 21784 to Baltimore, Carroll County commuter, MARC train Carroll County"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Car className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What is the commute like from Eldersburg to Baltimore or Washington D.C.?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Eldersburg offers suburban peace with reasonable access to two major metro areas.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Eldersburg is located just <strong>25 miles northwest of Downtown Baltimore</strong> and about 46 miles north of Washington D.C. The commute to Baltimore typically takes <strong>35 to 45 minutes</strong> via Route 26 or Route 32 to I-70 during normal conditions.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Traveling to the capital can take <strong>60 to 90 minutes</strong> depending on peak traffic conditions. While the area is largely car-dependent, residents can access commuter rail via nearby <strong>MARC stations</strong> for a more relaxed transit option into Baltimore and beyond.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Recent improvements to regional highways have eased some congestion, but traffic remains heavy during rush hours near major local intersections. Many residents discover local back roads through Howard County to bypass major bottlenecks during their daily travel.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            {[
                                { dest: 'Downtown Baltimore', time: '35–45 min', distance: '~25 miles via Route 26/32 to I-70' },
                                { dest: 'Washington D.C.', time: '60–90 min', distance: '~46 miles via I-70 South' },
                            ].map((route, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5">
                                    <div className="text-2xl font-bold text-primary mb-1">{route.time}</div>
                                    <div className="font-semibold mb-1">to {route.dest}</div>
                                    <div className="text-sm text-muted-foreground">{route.distance}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-4">
                            <h2 className="text-2xl font-bold mb-4">Commuter Tips for Eldersburg Residents</h2>
                            <ul className="space-y-3">
                                {[
                                    'Route 26 and Route 32 are primary access roads to I-70 and beyond',
                                    'MARC commuter rail is accessible from nearby stations for Baltimore commuters',
                                    'Local back roads through Howard County can bypass rush-hour bottlenecks',
                                    'Traffic peaks between 7–9 AM and 4–7 PM on weekdays',
                                    "Remote and hybrid workers find Eldersburg's location ideal for occasional commutes",
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
                        <h2 className="text-3xl font-bold mb-4">Live in Eldersburg, Work Anywhere</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar helps buyers find homes with the ideal location for their commute and lifestyle preferences.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
