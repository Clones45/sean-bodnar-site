import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

export default function SchoolsEldershurgPage() {
    return (
        <>
            <SEO
                title="Schools in Eldersburg, MD Ratings & What Buyers Need to Know"
                description="Discover which schools serve the Eldersburg, MD area and how they are rated. Carroll County public schools including Century High School, Liberty High School, and local elementary schools."
                canonical="https://www.sellingwithsean.com/faq/schools-eldersburg-md"
                keywords="schools Eldersburg MD, Century High School Carroll County, Liberty High School Eldersburg, Carroll County Public Schools rating, best schools Eldersburg MD"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <GraduationCap className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Which schools serve the Eldersburg area, and how are they currently rated?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Eldersburg's highly-rated Carroll County schools are one of the biggest draws for families moving to the area.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Eldersburg is served by the <strong>Carroll County Public School system</strong>, which is highly regarded for its academic performance. Key institutions include <strong>Century High School</strong> and <strong>Liberty High School</strong>, both of which consistently earn high ratings from GreatSchools for college readiness and test scores.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Primary education is provided by several elementary schools recognized for <strong>low student-teacher ratios</strong> and strong community involvement. Schools are a primary reason why families choose Eldersburg over other Maryland suburbs.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            While schools are a major draw for families, the state's education reform blueprint is currently causing some fiscal restructuring. Prospective buyers should verify specific school boundaries, as redistricting discussions periodically occur to balance enrollment across the southern part of the county.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            {[
                                { school: 'Century High School', details: 'High GreatSchools rating for college readiness and test scores' },
                                { school: 'Liberty High School', details: 'Highly regarded in Carroll County for academic achievement' },
                                { school: 'Linton Springs Elementary', details: 'Known for low student-teacher ratios and community involvement' },
                                { school: 'Other CCPS Elementary Schools', details: 'Multiple highly-rated elementary schools serve the 21784 area' },
                            ].map((school, i) => (
                                <div key={i} className="bg-muted rounded-xl p-5">
                                    <div className="font-bold text-primary mb-1">{school.school}</div>
                                    <div className="text-sm text-muted-foreground">{school.details}</div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted rounded-xl p-6 mt-4">
                            <h2 className="text-2xl font-bold mb-4">School Boundary Tips for Eldersburg Buyers</h2>
                            <ul className="space-y-3">
                                {[
                                    "Always verify your specific address's school zone before making an offer",
                                    'Redistricting discussions may shift boundaries check with Carroll County Public Schools',
                                    'School ratings significantly impact home values in the 21784 area',
                                    'Strong schools are the #1 reason families choose Eldersburg',
                                    'Check GreatSchools.org for up-to-date ratings and parent reviews',
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
                        <h2 className="text-3xl font-bold mb-4">Find a Home in the Right School District</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar knows every school boundary in Carroll County and can help you find a home in your preferred district.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
