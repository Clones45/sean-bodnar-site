import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import AboutPage from './pages/about';

// Lazy load components for code splitting (except HomePage for instant loading)
const NotFoundPage = lazy(() => import('./pages/_404'));
const ResidentialSalesPage = lazy(() => import('./pages/services/residential-sales'));
const FirstTimeBuyersPage = lazy(() => import('./pages/services/first-time-buyers'));
const LuxuryPropertiesPage = lazy(() => import('./pages/services/luxury-properties'));
const MarketAnalysisPage = lazy(() => import('./pages/services/market-analysis'));

// FAQ Index Page
const FaqIndex = lazy(() => import('./pages/faq/index'));

// FAQ Pages — Eldersburg Home Buyer Questions (SEO)
const FaqFirstStep = lazy(() => import('./pages/faq/first-step-home-buying-eldersburg'));
const FaqAgentsPaid = lazy(() => import('./pages/faq/how-real-estate-agents-paid-maryland'));
const FaqQuestionsAsk = lazy(() => import('./pages/faq/questions-ask-realtor-eldersburg'));
const FaqAgencyDisclosure = lazy(() => import('./pages/faq/maryland-agency-disclosure-form'));
const FaqBuyerOrSeller = lazy(() => import('./pages/faq/eldersburg-buyers-or-sellers-market'));
const FaqDaysOnMarket = lazy(() => import('./pages/faq/days-on-market-21784-zip-code'));
const FaqHomeValue = lazy(() => import('./pages/faq/factors-impact-home-value-eldersburg'));
const FaqOfferRejected = lazy(() => import('./pages/faq/offer-rejected-eldersburg'));
const FaqForeclosures = lazy(() => import('./pages/faq/foreclosures-eldersburg-md'));
const FaqLowDownPayment = lazy(() => import('./pages/faq/low-down-payment-mortgage-maryland'));
const FaqMMP = lazy(() => import('./pages/faq/maryland-mortgage-program-first-time-buyers'));
const FaqClosingCosts = lazy(() => import('./pages/faq/closing-costs-carroll-county-md'));
const FaqEarnestMoney = lazy(() => import('./pages/faq/earnest-money-eldersburg-real-estate'));
const FaqHomeInspection = lazy(() => import('./pages/faq/home-inspection-eldersburg'));
const FaqWellSeptic = lazy(() => import('./pages/faq/well-septic-systems-eldersburg'));
const FaqSuperfund = lazy(() => import('./pages/faq/superfund-disclosure-maryland-real-estate'));
const FaqRightToFarm = lazy(() => import('./pages/faq/right-to-farm-carroll-county'));
const FaqPropertyTaxes = lazy(() => import('./pages/faq/property-taxes-carroll-county-md'));
const FaqSchools = lazy(() => import('./pages/faq/schools-eldersburg-md'));
const FaqCommute = lazy(() => import('./pages/faq/commute-eldersburg-to-baltimore-dc'));
const FaqInternet = lazy(() => import('./pages/faq/internet-broadband-eldersburg'));
const FaqRecreation = lazy(() => import('./pages/faq/recreational-amenities-liberty-reservoir-piney-run'));
const FaqRestaurants = lazy(() => import('./pages/faq/restaurants-eldersburg-md'));
const FaqCommunityEvents = lazy(() => import('./pages/faq/community-events-eldersburg'));
const FaqNewHousing = lazy(() => import('./pages/faq/new-housing-developments-eldersburg-2025-2026'));
const FaqCommercial = lazy(() => import('./pages/faq/commercial-development-eldersburg'));
const FaqHoa = lazy(() => import('./pages/faq/hoa-vs-non-hoa-eldersburg'));
const FaqDiversity = lazy(() => import('./pages/faq/diversity-eldersburg-community'));
const FaqEnvironmental = lazy(() => import('./pages/faq/environmental-risks-eldersburg'));
const FaqLongTermOutlook = lazy(() => import('./pages/faq/long-term-home-value-outlook-eldersburg'));

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/services/residential-sales',
        element: <ResidentialSalesPage />,
    },
    {
        path: '/services/first-time-buyers',
        element: <FirstTimeBuyersPage />,
    },
    {
        path: '/services/luxury-properties',
        element: <LuxuryPropertiesPage />,
    },
    {
        path: '/services/market-analysis',
        element: <MarketAnalysisPage />,
    },
    // ── FAQ Routes ──────────────────────────────────────────────────────────────
    { path: '/faq', element: <FaqIndex /> },
    { path: '/faq/first-step-home-buying-eldersburg', element: <FaqFirstStep /> },
    { path: '/faq/how-real-estate-agents-paid-maryland', element: <FaqAgentsPaid /> },
    { path: '/faq/questions-ask-realtor-eldersburg', element: <FaqQuestionsAsk /> },
    { path: '/faq/maryland-agency-disclosure-form', element: <FaqAgencyDisclosure /> },
    { path: '/faq/eldersburg-buyers-or-sellers-market', element: <FaqBuyerOrSeller /> },
    { path: '/faq/days-on-market-21784-zip-code', element: <FaqDaysOnMarket /> },
    { path: '/faq/factors-impact-home-value-eldersburg', element: <FaqHomeValue /> },
    { path: '/faq/offer-rejected-eldersburg', element: <FaqOfferRejected /> },
    { path: '/faq/foreclosures-eldersburg-md', element: <FaqForeclosures /> },
    { path: '/faq/low-down-payment-mortgage-maryland', element: <FaqLowDownPayment /> },
    { path: '/faq/maryland-mortgage-program-first-time-buyers', element: <FaqMMP /> },
    { path: '/faq/closing-costs-carroll-county-md', element: <FaqClosingCosts /> },
    { path: '/faq/earnest-money-eldersburg-real-estate', element: <FaqEarnestMoney /> },
    { path: '/faq/home-inspection-eldersburg', element: <FaqHomeInspection /> },
    { path: '/faq/well-septic-systems-eldersburg', element: <FaqWellSeptic /> },
    { path: '/faq/superfund-disclosure-maryland-real-estate', element: <FaqSuperfund /> },
    { path: '/faq/right-to-farm-carroll-county', element: <FaqRightToFarm /> },
    { path: '/faq/property-taxes-carroll-county-md', element: <FaqPropertyTaxes /> },
    { path: '/faq/schools-eldersburg-md', element: <FaqSchools /> },
    { path: '/faq/commute-eldersburg-to-baltimore-dc', element: <FaqCommute /> },
    { path: '/faq/internet-broadband-eldersburg', element: <FaqInternet /> },
    { path: '/faq/recreational-amenities-liberty-reservoir-piney-run', element: <FaqRecreation /> },
    { path: '/faq/restaurants-eldersburg-md', element: <FaqRestaurants /> },
    { path: '/faq/community-events-eldersburg', element: <FaqCommunityEvents /> },
    { path: '/faq/new-housing-developments-eldersburg-2025-2026', element: <FaqNewHousing /> },
    { path: '/faq/commercial-development-eldersburg', element: <FaqCommercial /> },
    { path: '/faq/hoa-vs-non-hoa-eldersburg', element: <FaqHoa /> },
    { path: '/faq/diversity-eldersburg-community', element: <FaqDiversity /> },
    { path: '/faq/environmental-risks-eldersburg', element: <FaqEnvironmental /> },
    { path: '/faq/long-term-home-value-outlook-eldersburg', element: <FaqLongTermOutlook /> },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

// Types for type-safe navigation
export type Path =
    | '/'
    | '/about'
    | '/services/residential-sales'
    | '/services/first-time-buyers'
    | '/services/luxury-properties'
    | '/services/market-analysis'
    | '/faq'
    | '/faq/first-step-home-buying-eldersburg'
    | '/faq/how-real-estate-agents-paid-maryland'
    | '/faq/questions-ask-realtor-eldersburg'
    | '/faq/maryland-agency-disclosure-form'
    | '/faq/eldersburg-buyers-or-sellers-market'
    | '/faq/days-on-market-21784-zip-code'
    | '/faq/factors-impact-home-value-eldersburg'
    | '/faq/offer-rejected-eldersburg'
    | '/faq/foreclosures-eldersburg-md'
    | '/faq/low-down-payment-mortgage-maryland'
    | '/faq/maryland-mortgage-program-first-time-buyers'
    | '/faq/closing-costs-carroll-county-md'
    | '/faq/earnest-money-eldersburg-real-estate'
    | '/faq/home-inspection-eldersburg'
    | '/faq/well-septic-systems-eldersburg'
    | '/faq/superfund-disclosure-maryland-real-estate'
    | '/faq/right-to-farm-carroll-county'
    | '/faq/property-taxes-carroll-county-md'
    | '/faq/schools-eldersburg-md'
    | '/faq/commute-eldersburg-to-baltimore-dc'
    | '/faq/internet-broadband-eldersburg'
    | '/faq/recreational-amenities-liberty-reservoir-piney-run'
    | '/faq/restaurants-eldersburg-md'
    | '/faq/community-events-eldersburg'
    | '/faq/new-housing-developments-eldersburg-2025-2026'
    | '/faq/commercial-development-eldersburg'
    | '/faq/hoa-vs-non-hoa-eldersburg'
    | '/faq/diversity-eldersburg-community'
    | '/faq/environmental-risks-eldersburg'
    | '/faq/long-term-home-value-outlook-eldersburg';

export type Params = Record<string, string | undefined>;
