import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Users, CheckCircle, ArrowRight } from 'lucide-react'; // eslint-disable-line @typescript-eslint/no-unused-vars

export default function DiversityEldershurgCommunityPage() {
    return (
        <>
            <SEO
                title="How Diverse Is the Eldersburg, MD Community?"
                description="Learn about the demographics and community culture of Eldersburg, MD including diversity trends, median income, and what makes Carroll County a welcoming place to live."
                canonical="https://www.sellingwithsean.com/faq/diversity-eldersburg-community"
                keywords="Eldersburg MD demographics, diversity Carroll County, Eldersburg community culture, moving to Eldersburg Maryland, Eldersburg suburban community"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <Users className="w-6 h-6" />
                            <span className="text-sm font-medium uppercase tracking-wide">Eldersburg Home Buyer FAQ</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            How diverse is the community of Eldersburg compared to other suburbs?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Understanding the community culture and demographics of Eldersburg, MD.
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Eldersburg is described by residents as having a <strong>quiet, suburban feel with a population characterized by a high median income</strong>. While it may not have the same level of ethnic or cultural density as larger cities like Columbia, the community is gradually evolving as more professionals move to the area.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            The local culture is often described as moderate, <strong>balancing the rural heritage of the county</strong> with the suburban needs of the workforce. The community's thriving economy and highly-rated schools continue to attract a wide range of residents who value safety and stability.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Diversity is increasing through community events and the influx of new businesses catering to a broader range of tastes and interests, making Eldersburg a <strong>welcoming and evolving community</strong> for all types of families.
                        </p>

                        <div className="bg-muted rounded-xl p-6 mt-8">
                            <h2 className="text-2xl font-bold mb-4">Community Characteristics of Eldersburg</h2>
                            <ul className="space-y-3">
                                {[
                                    'Quiet suburban atmosphere with high median household income',
                                    'Strong sense of community residents are engaged and involved',
                                    'Gradual demographic evolution as professionals and families relocate to the area',
                                    'Cultural diversity growing through new businesses and community events',
                                    "Balanced culture between Carroll County's rural agricultural roots and modern suburban living",
                                    'Consistently ranked among the best Maryland suburbs for families and safety',
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
                        <h2 className="text-3xl font-bold mb-4">Find Your Place in Eldersburg</h2>
                        <p className="text-xl mb-8 opacity-90">Sean Bodnar knows the Eldersburg community inside and out and can help you find the neighborhood that's right for your family.</p>
                        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                            <a href="/#contact">Contact Sean <ArrowRight className="ml-2 w-5 h-5" /></a>
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
