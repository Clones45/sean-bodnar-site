import { Helmet } from '@dr.pogodin/react-helmet';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article';
    keywords?: string;
}

export function SEO({
    title,
    description,
    canonical = 'https://www.sellingwithsean.com',
    image = 'https://www.sellingwithsean.com/assets/photos/Eldersburg.jpg',
    type = 'website',
    keywords = 'Real Estate, Realtor, Eldersburg, Sykesville, Carroll County, Howard County, Sean Bodnar, Buy Home, Sell Home'
}: SEOProps) {
    const siteTitle = 'Sean Bodnar - Keller Williams Lucido Agency';
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
