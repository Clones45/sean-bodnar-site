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
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

// Types for type-safe navigation
export type Path = '/' | '/about' | '/services/residential-sales' | '/services/first-time-buyers' | '/services/luxury-properties' | '/services/market-analysis';

export type Params = Record<string, string | undefined>;
