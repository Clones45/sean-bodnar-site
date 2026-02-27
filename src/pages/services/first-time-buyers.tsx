import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function FirstTimeBuyersPage() {
    return (
        <>
            <SEO
                title="First-Time Home Buyers | Realtor in Eldersburg, MD"
                description="Patient, personalized support for first-time home buyers in Carroll County and Howard County. Let Sean Bodnar guide you through the process."
                canonical="https://www.sellingwithsean.com/services/first-time-buyers"
                keywords="First-time home buyer Realtor Eldersburg, Buy a home in Howard County, First time home buyer Carroll County"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    First-Time Home Buyers
                                </h1>
                                <p className="text-xl text-muted-foreground mb-6">
                                    Patient, personalized support to help first-time buyers navigate the home buying process with confidence.
                                </p>
                                <p className="text-lg mb-6">
                                    Buying your first home should be exciting, not overwhelming.
                                    I am dedicated to educating you on every step of the journey, ensuring you make informed, confident decisions.
                                </p>
                                <Button size="lg" asChild>
                                    <a href="https://seanbodnar.boblucidoteam.com/buy" target="_blank" rel="noopener noreferrer">Start Your Search</a>
                                </Button>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/493247062_645399111585293_7961865133255689266_.jpg"
                                    alt="First Time Home Buyers in Eldersburg MD"
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
                                Navigating the Process Together
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                From pre-approval to handing you the keys.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Users className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Detailed Consultations</h3>
                                        <p className="text-muted-foreground">
                                            We'll sit down to outline your budget, must-haves, and deal-breakers so we only look at homes that fit your lifestyle.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <ShieldCheck className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Connecting You With Experts</h3>
                                        <p className="text-muted-foreground">
                                            I have a trusted network of lenders, inspectors, and title companies to help you secure financing and ensure the home is safe.
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
                                        <h3 className="text-xl font-semibold mb-2">Fierce Negotiation</h3>
                                        <p className="text-muted-foreground">
                                            I'll help you craft a winning offer and negotiate on your behalf to protect your financial interests.
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
                            Let's Get Started
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Have questions about buying your first home? I'm just a call or a text away.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="/#contact">Message Sean</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
