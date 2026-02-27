import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, CheckCircle, Diamond } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function LuxuryPropertiesPage() {
    return (
        <>
            <SEO
                title="Luxury Real Estate Agent | Howard & Carroll County"
                description="Sophisticated marketing strategies to showcase high-end properties and attract qualified buyers in Maryland."
                canonical="https://www.sellingwithsean.com/services/luxury-properties"
                keywords="Luxury real estate agent Howard County, High-end homes Carroll County, Luxury Realtor Eldersburg"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Luxury Property Marketing
                                </h1>
                                <p className="text-xl text-muted-foreground mb-6">
                                    Sophisticated strategies designed to showcase high-end properties to the right audience.
                                </p>
                                <p className="text-lg mb-6">
                                    When you're dealing with high-end real estate, standard marketing isn't enough.
                                    I leverage elite networks, premium media, and bespoke marketing materials to ensure your luxury property stands out in a competitive market.
                                </p>
                                <Button size="lg" asChild>
                                    <a href="/#contact">Discover My Luxury Strategy</a>
                                </Button>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/633631780_871431175648751_4562329653960205190_.jpg"
                                    alt="Luxury Real Estate Maryland"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Premium Representation
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                White-glove service from listing to closing.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Diamond className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Bespoke Marketing Materials</h3>
                                        <p className="text-muted-foreground">
                                            Professional 4K photography, cinematic drone tours, and high-quality printed brochures that capture the unique essence of your estate.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Star className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                                        <p className="text-muted-foreground">
                                            Through the Keller Williams Luxury network, your listing is syndicated internationally, reaching affluent buyers around the world.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <CheckCircle className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Discreet Showings</h3>
                                        <p className="text-muted-foreground">
                                            I ensure all prospective buyers are fully vetted and pre-qualified before any private showings, honoring your privacy and security.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Experience the Luxury Difference
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Book a confidential consultation to explore my luxury property services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="tel:+14109403032">Call Me Directly</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
