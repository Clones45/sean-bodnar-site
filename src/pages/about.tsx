import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, TrendingUp, Home } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            <title>About Sean | Selling with Sean - Eldersburg Realtor</title>
            <meta
                name="description"
                content="Meet Sean, your trusted real estate professional in Eldersburg, MD. Learn about my experience, local expertise, and commitment to helping you find your dream home."
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "RealEstateAgent",
                    "name": "Sean Bodnar - Keller Williams Lucido Agency",
                    "image": "https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/401845630_311528424972365_6482679109257298931_.jpg",
                    "url": "https://sellingwithsean.com/about/",
                    "telephone": "+14109403032",
                    "priceRange": "$$$",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "6229 Sykesville Rd",
                        "addressLocality": "Eldersburg",
                        "addressRegion": "MD",
                        "postalCode": "21784",
                        "addressCountry": "US"
                    },
                    "areaServed": [
                        "Eldersburg",
                        "Sykesville",
                        "Carroll County",
                        "Howard County"
                    ]
                })}
            </script>

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    About Sean Bodnar
                                </h1>
                                <p className="text-xl text-muted-foreground mb-6">
                                    Keller Williams Lucido Agency - Your Trusted Real Estate Partner in Eldersburg, MD
                                </p>
                                <p className="text-lg mb-4">
                                    With deep roots in Carroll County and a passion for helping families find their perfect home,
                                    I bring local expertise and personalized service to every real estate transaction.
                                </p>
                                <p className="text-lg mb-6">
                                    Whether you're a first-time buyer, looking to upgrade, or ready to sell, I'm here to guide
                                    you through every step of the process with integrity, knowledge, and dedication.
                                </p>
                                <Button size="lg" asChild>
                                    <a href="/#contact">Let's Work Together</a>
                                </Button>
                            </div>
                            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/401845630_311528424972365_6482679109257298931_.jpg"
                                    alt="Sean - Professional Realtor"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience & Expertise */}
                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Experience & Expertise
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Years of experience helping families in Carroll County achieve their real estate goals
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <Home className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">Local Expert</h3>
                                        <p className="text-muted-foreground">
                                            Deep knowledge of Eldersburg, Carroll County, and surrounding communities
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <Users className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                                        <p className="text-muted-foreground">
                                            Your goals are my priority. Personalized service tailored to your unique needs
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <TrendingUp className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">Market Insight</h3>
                                        <p className="text-muted-foreground">
                                            Up-to-date market analysis and pricing strategies for optimal results
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <Award className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                                        <p className="text-muted-foreground">
                                            Track record of successful transactions and satisfied clients
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* My Approach */}
                <section className="py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                My Approach
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                How I help you achieve your real estate goals
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Listen First</h3>
                                    <p className="text-muted-foreground">
                                        I take the time to understand your needs, preferences, and goals before making any recommendations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Educate & Guide</h3>
                                    <p className="text-muted-foreground">
                                        I provide clear information about the market, process, and options so you can make informed decisions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Negotiate Skillfully</h3>
                                    <p className="text-muted-foreground">
                                        I advocate for your best interests and work to get you the best possible terms in every transaction.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
                                    <p className="text-muted-foreground">
                                        I maintain open communication throughout the process and remain available even after closing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Eldersburg */}
                <section className="py-20 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Why I Love Eldersburg and Carroll County
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                More than just a place to work it's home
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-muted-foreground mb-4">
                                Eldersburg and Carroll County offer the perfect blend of small-town charm and modern convenience.
                                From excellent schools to beautiful parks, thriving local businesses to easy access to Baltimore and
                                Washington D.C., this area has everything families need to thrive.
                            </p>
                            <p className="text-lg text-muted-foreground mb-4">
                                As a local resident and real estate professional, I have intimate knowledge of the neighborhoods,
                                schools, amenities, and market trends that make this area special. I'm passionate about helping
                                others discover what makes Carroll County such a wonderful place to call home.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's discuss your real estate goals and how I can help you achieve them.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="/#contact">Contact Me</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-foreground" asChild>
                                <a href="tel:+14109403032">(410) 940-3032</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
