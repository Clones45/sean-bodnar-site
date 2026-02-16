import { Helmet } from '@dr.pogodin/react-helmet';

export function SEOSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Sean Bodnar - Keller Williams Lucido Agency",
        "image": "https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/401845630_311528424972365_6482679109257298931_.jpg",
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
