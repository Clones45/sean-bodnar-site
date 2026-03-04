import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Utensils, CheckCircle, ArrowRight } from 'lucide-react';

export default function RestaurantsEldershurgPage() {
    return (
        <>
            <SEO
                title="Top-Rated Restaurants in Eldersburg, MD | Local Dining Guide"
                description="Discover the best restaurants in Eldersburg and nearby Sykesville, MD from casual burger spots and craft beer pubs to upscale Italian dining and authentic international cuisine."
                canonical="https://www.sellingwithsean.com/faq/restaurants-eldersburg-md"
                keywords="restaurants Eldersburg MD, best restaurants Sykesville, dining Eldersburg Maryland, local eats Carroll County, food near Eldersburg 21784"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Utensils className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What are the top-rated local restaurants in the Eldersburg area?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            The Eldersburg dining scene is thriving with something for every taste, from craft burgers to authentic international cuisine.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            The local culinary scene in Eldersburg is anchored by several long-standing favorites and modern pubs. Local establishments are renowned for <strong>wood-grilled burgers, craft beer selections</strong>, and refined American fare like duck confit.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            For those seeking international options, the area features <strong>highly-rated Italian ristorantes</strong> and authentic Greek cafes. Many restaurants in nearby Sykesville are also popular for their neighborhood atmosphere and locally sourced ingredients.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            These establishments provide a diverse mix of casual and sophisticated dining options, reducing the need for residents to travel to larger cities for a high-quality meal. Many local spots also host <strong>regular events like trivia nights and live music</strong> to engage the community.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">What the Eldersburg Dining Scene Has to Offer</h2>
                            <ul className="space-y-3">
                                {[
                                    'American pubs and gastropubs with wood-grilled burgers and craft beers on tap',
                                    'Refined American fare including duck confit and seasonal menus',
                                    'Highly-rated Italian ristorantes with traditional and modern dishes',
                                    'Authentic Greek cafes and international cuisine options',
                                    "Sykesville's vibrant restaurant row with locally sourced ingredients",
                                    'Regular community events: trivia nights, live music, and seasonal specials',
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
                        <h2 className="text-3xl font-bold mb-4">Discover the Eldersburg Lifestyle</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar can tell you everything about what makes living in Eldersburg feel like home including the best spots to eat.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
