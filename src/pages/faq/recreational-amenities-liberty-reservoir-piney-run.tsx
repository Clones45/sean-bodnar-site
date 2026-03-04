import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Tent, CheckCircle, ArrowRight } from 'lucide-react';

export default function RecreationalAmenitiesEldershurgPage() {
    return (
        <>
            <SEO
                title="Recreational Amenities Near Liberty Reservoir & Piney Run Park in Eldersburg"
                description="Explore the outdoor recreation available near Eldersburg, MD including Piney Run Park, Liberty Reservoir, hiking trails, boating, and more in Carroll County."
                canonical="https://www.sellingwithsean.com/faq/recreational-amenities-liberty-reservoir-piney-run"
                keywords="Piney Run Park Eldersburg, Liberty Reservoir hiking, outdoor recreation Carroll County, things to do Eldersburg MD, parks near Eldersburg 21784"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Tent className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What recreational amenities are near the Liberty Reservoir and Piney Run Park?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Recreation is a cornerstone of the Eldersburg lifestyle with world-class outdoor amenities right in your backyard.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            <strong>Piney Run Park</strong> features a 300-acre lake for fishing and boating, over five miles of hiking trails, and a dedicated nature center. The park also offers climbing rocks, tennis courts, and several pavilions available for community and private events.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Adjacent to Eldersburg is the <strong>Liberty Reservoir</strong>, a massive destination for mountain biking, hiking, and various water activities. For more structured recreation, nearby state parks provide multi-use trails and disc golf courses.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            These amenities provide residents with extensive open space while remaining close to suburban conveniences striking a balance that defines the region's high quality of life and appeal to outdoor enthusiasts.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            {[
                                { name: 'Piney Run Park', features: '300-acre lake · 5+ miles of hiking · Nature center · Tennis · Pavilions' },
                                { name: 'Liberty Reservoir', features: 'Mountain biking · Hiking · Water activities · Scenic trails' },
                                { name: 'Patapsco Valley State Park', features: 'Multi-use trails · Disc golf · Camping · River access' },
                                { name: 'Local Ball Fields & Courts', features: 'Community ball fields, playgrounds, and recreational facilities throughout 21784' },
                            ].map((amenity, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5">
                                    <div className="font-bold text-primary mb-1">{amenity.name}</div>
                                    <div className="text-sm text-muted-foreground">{amenity.features}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-4">
                            <h2 className="text-2xl font-bold mb-4">Why Outdoor Lovers Choose Eldersburg</h2>
                            <ul className="space-y-3">
                                {[
                                    'Immediate access to a 300-acre lake for fishing and boating at Piney Run Park',
                                    'Miles of hiking and mountain biking trails at Liberty Reservoir',
                                    'Strong park system with facilities for all ages and activity levels',
                                    'Nature-based programs and camps available for families throughout the seasons',
                                    'Rare blend of outdoor access with suburban convenience and top-rated schools',
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
                        <h2 className="text-3xl font-bold mb-4">Find a Home Near Eldersburg's Best Parks</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar knows every neighborhood in 21784 and can help you find a home close to the outdoor amenities you love.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
