import { Helmet } from '@dr.pogodin/react-helmet';

export function SEOSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Sean Bodnar - Keller Williams Lucido Agency",
        "image": "https://www.sellingwithsean.com/Favicon/android-chrome-512x512.png",
        "telephone": "+14109403032",
        "url": "https://www.sellingwithsean.com",
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
            "Gamber",
            "Henryton",
            "Woodbine",
            "New Market",
            "Clarksville",
            "Ellicott City",
            "Carrolltowne",
            "Marriottsville"
        ],
        "priceRange": "$$$"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
