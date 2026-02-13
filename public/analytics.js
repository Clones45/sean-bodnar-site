// Analytics initialization
// C2 analytics loading is now managed by CookieBanner component
// to ensure GDPR/CCPA compliance with user consent.
// The script will only load after user accepts analytics cookies.
(window._signalsDataLayer = window._signalsDataLayer || []);


/* Inject Favicon */
(function () {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = '/favicon.ico';
})();
