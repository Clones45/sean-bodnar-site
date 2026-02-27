import { Helmet } from '@dr.pogodin/react-helmet';

export function SEOSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "RealEstateAgent",
                "@id": "https://www.sellingwithsean.com/#agent",
                "name": "Sean Bodnar - Keller Williams Lucido Agency",
                "image": "https://img1.wsimg.com/isteam/ip/daf89318-8ad7-4a11-8f4a-b5842fa45c45/401845630_311528424972365_6482679109257298931_.jpg",
                "logo": "https://www.sellingwithsean.com/Favicon/android-chrome-512x512.png",
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
                    { "@type": "City", "name": "Eldersburg", "containedInPlace": { "@type": "State", "name": "Maryland" } },
                    { "@type": "City", "name": "Sykesville", "containedInPlace": { "@type": "State", "name": "Maryland" } },
                    { "@type": "City", "name": "Ellicott City", "containedInPlace": { "@type": "State", "name": "Maryland" } },
                    { "@type": "State", "name": "Maryland" },
                    { "@type": "State", "name": "Carroll County", "containedInPlace": { "@type": "State", "name": "Maryland" } },
                    { "@type": "State", "name": "Howard County", "containedInPlace": { "@type": "State", "name": "Maryland" } }
                ],
                "priceRange": "$$$",
                "openingHours": "Mo-Su 08:00-20:00"
            },
            {
                "@type": "WebSite",
                "@id": "https://www.sellingwithsean.com/#website",
                "url": "https://www.sellingwithsean.com",
                "name": "Selling with Sean - Real Estate",
                "publisher": {
                    "@id": "https://www.sellingwithsean.com/#agent"
                }
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
