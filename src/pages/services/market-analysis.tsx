import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, BarChart3, MapPin, Activity } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { useMarketStats } from '@/hooks/useMarketStats';

export default function MarketAnalysisPage() {
    const { data, loading } = useMarketStats();
    return (
        <>
            <SEO
                title="Maryland Real Estate Market Updates & Analysis"
                description="Get live real estate market updates for Maryland, Eldersburg, Carroll County, and Howard County. Free home valuation from Sean Bodnar."
                canonical="https://www.sellingwithsean.com/services/market-analysis"
                keywords="Maryland Real Estate Market Updates, Free Home Valuation Eldersburg, Carroll County Market Stats"
            />

            <div className="min-h-screen">
                <section className="relative py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    Local Market Analysis
                                </h1>
                                <p className="text-xl text-muted-foreground mb-6">
                                    In-depth knowledge of Eldersburg and Carroll County market trends to help you make informed decisions.
                                </p>
                                <p className="text-lg mb-6">
                                    Real estate is hyper-local. I provide you with up-to-date data on recent sales, current inventory, and emerging trends so you can feel confident whether you are buying or selling.
                                </p>
                                <Button size="lg" asChild>
                                    <a href="https://seanbodnar.boblucidoteam.com/valuation" target="_blank" rel="noopener noreferrer">Get a Free Market Analysis</a>
                                </Button>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/496342516_659374226854448_4054464121072237568_.jpg"
                                    alt="Market Analysis Eldersburg MD"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Data Banner */}
                {(!loading && data && data.status !== 'error') && (
                    <section className="bg-primary/5 py-12 border-y border-border">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-primary/10 rounded-full">
                                    <Activity className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold">Live Carroll County Market Snapshot</h2>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                                <div className="bg-background rounded-lg p-6 border shadow-sm">
                                    <p className="text-sm text-muted-foreground font-medium mb-1">Median Sale Price</p>
                                    <p className="text-3xl font-bold text-foreground">{data.median_sale_price || '--'}</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 border shadow-sm">
                                    <p className="text-sm text-muted-foreground font-medium mb-1">Days on Market</p>
                                    <p className="text-3xl font-bold text-foreground">{data.days_on_market || '--'}</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 border shadow-sm">
                                    <p className="text-sm text-muted-foreground font-medium mb-1">Current Inventory</p>
                                    <p className="text-3xl font-bold text-foreground">{data.inventory || '--'}</p>
                                </div>
                                <div className="bg-background rounded-lg p-6 border shadow-sm">
                                    <p className="text-sm text-muted-foreground font-medium mb-1">Market Type</p>
                                    <p className="text-3xl font-bold text-primary">{data.market_type || 'Neutral'}</p>
                                </div>
                            </div>

                            {data.trend_summary && (
                                <p className="text-muted-foreground itaic border-l-4 border-primary pl-4 py-1">
                                    {data.trend_summary}
                                </p>
                            )}
                        </div>
                    </section>
                )}

                <section className="py-20 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Data-Driven Decisions
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Stop guessing. Let the numbers guide your next move.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <TrendingUp className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Trend Tracking</h3>
                                        <p className="text-muted-foreground">
                                            Is it a buyer's or seller's market? I track days on market and list-to-sale price ratios so we can negotiate from a point of strength.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <MapPin className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Hyper-Local Insights</h3>
                                        <p className="text-muted-foreground">
                                            What's happening in Howard County might not be happening in Sykesville. I break down data by zip codes and specific neighborhoods.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 flex gap-4">
                                    <div className="flex-shrink-0">
                                        <BarChart3 className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Accurate Appraisals</h3>
                                        <p className="text-muted-foreground">
                                            By analyzing the latest comparable sales (comps), I help you avoid under-pricing your listing or overpaying for your next home.
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
                            Want a Customized Report?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Provide me with your address, and I'll send you a detailed CMA (Comparative Market Analysis) for free.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                                <a href="/#contact">Contact For Report</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
