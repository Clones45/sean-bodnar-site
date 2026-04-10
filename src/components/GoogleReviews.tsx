import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Spinner } from '@/components/Spinner';

interface GoogleReview {
    name: string;
    relativePublishTimeDescription: string;
    rating: number;
    text: {
        text: string;
        languageCode: string;
    };
    authorAttribution: {
        displayName: string;
        photoUri: string;
    };
}

interface ReviewsData {
    rating: number;
    userRatingCount: number;
    reviews: GoogleReview[];
    displayName: { text: string };
}

export function GoogleReviews() {
    const [data, setData] = useState<ReviewsData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch('/api/reviews');
                if (!res.ok) throw new Error('Failed to fetch reviews');
                const json = await res.json();
                // The Places API wraps the response in `{ name: "...", rating: ..., reviews: [] }`
                // Actually the backend returns exactly what the Google API returns
                setData(json);
            } catch (err) {
                console.error(err);
                setError('Failed to load reviews.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchReviews();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Spinner />
            </div>
        );
    }

    if (error || !data || !data.reviews) {
        // Fallback gracefully without breaking the layout
        return null;
    }

    return (
        <section className="py-20 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Clients Say</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Real experiences from home buyers and sellers in Maryland.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-6 md:mt-0 bg-muted p-4 rounded-xl border border-border shadow-sm">
                        <div className="flex flex-col items-end">
                            <span className="text-2xl font-bold text-foreground">{data.rating} Overall Rating</span>
                            <span className="text-sm font-medium text-muted-foreground">{data.userRatingCount} Google Reviews</span>
                        </div>
                        <div className="flex bg-[#Fbbc04] text-white p-3 rounded-lg shadow-sm">
                            <Star className="w-8 h-8 fill-current text-white" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="h-full bg-card hover:bg-muted/50 transition-colors border border-border/50 shadow-md">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star 
                                                key={idx} 
                                                className={`w-5 h-5 ${idx < review.rating ? 'fill-[#Fbbc04] text-[#Fbbc04]' : 'fill-muted text-muted'}`} 
                                            />
                                        ))}
                                    </div>
                                    <p className="text-foreground italic mb-6 flex-grow relative z-10 text-base/relaxed">
                                        "{review.text?.text || "Highly recommended!"}"
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        {review.authorAttribution?.photoUri ? (
                                            <img 
                                                src={review.authorAttribution.photoUri} 
                                                alt={review.authorAttribution.displayName} 
                                                className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                                                referrerPolicy="no-referrer"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                                {review.authorAttribution?.displayName?.charAt(0) || "G"}
                                            </div>
                                        )}
                                        <div>
                                            <p className="font-semibold text-foreground">{review.authorAttribution?.displayName || "Google User"}</p>
                                            <p className="text-xs text-muted-foreground">{review.relativePublishTimeDescription}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <a 
                        href="https://www.google.com/search?q=realtor+in+eldersburg+md&sca_esv=d7358c9ad4b11281&sxsrf=ANbL-n44oMyhs5fCOYHSdIATzGllS0eOdQ:1771077854879&udm=1&lsack=3oCQadKoNefi2roP14O-0Ag&sa=X&ved=2ahUKEwjSj6OTk9mSAxVnsVYBHdeBD4oQjGp6BAgsEAA&biw=1920&bih=953&dpr=1&lqi=ChhyZWFsdG9yIGluIGVsZGVyc2J1cmcgbWRI2MjQi_S6gIAIWiAQABgCGAMiGHJlYWx0b3IgaW4gZWxkZXJzYnVyZyBtZHoKRWxkZXJzYnVyZ5IBEnJlYWxfZXN0YXRlX2FnZW50c5oBI0NoWkRTVWhOTUc5blMwVlBRMGR5ZFdsUE5XOWZWR0ZCRUFF-gEFCLECEEs#lkt=LocalPoiReviews&rlimm=5331825905854139026&lrd="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                        Read all {data.userRatingCount} reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
}
