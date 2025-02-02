import { lazy } from 'react';

// Lazy load components
const MapPage = lazy(() => import('../pages/MapPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const DocsLayout = lazy(() => import('../components/layouts/DocsLayout'));
const IntroductionPage = lazy(() => import('../pages/docs/introduction'));
const QuickStartPage = lazy(() => import('../pages/docs/quickstart'));
const CreateProgramPage = lazy(() => import('../pages/docs/CreateProgramPage'));
const ProgramDetailsPage = lazy(() => import('../pages/docs/ProgramDetailsPage'));

export const routes = [
  {
    path: '/',
    element: MapPage,
    exact: true,
  },
  {
    path: '/about',
    element: AboutPage,
  },
  {
    path: '/docs/*',
    element: DocsLayout,
    children: [
      {
        path: '',
        element: IntroductionPage,
      },
      {
        path: 'quickstart',
        element: QuickStartPage,
      },
      {
        path: 'programs/create',
        element: CreateProgramPage,
      },
      {
        path: 'programs/:id',
        element: ProgramDetailsPage,
      },
    ],
  },
  {
    path: '*',
    element: NotFoundPage,
  }
];

// Nested doc routes
export const docRoutes = [
  {
    path: 'programs',
    children: [
      {
        path: 'create',
        element: lazy(() => import('../pages/docs/CreateProgramPage')),
      },
      {
        path: ':id',
        element: lazy(() => import('../pages/docs/ProgramDetailsPage')),
      }
    ]
  }
]; 