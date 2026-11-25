import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorFallback from '@/components/common/ErrorFallback'
import MainLayout from '@/layouts/MainLayout'
import { ROUTES } from '@/routes/paths'

// Lazy-load all pages
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const TeamPage = lazy(() => import('@/pages/TeamPage'))
const PartnersPage = lazy(() => import('@/pages/PartnersPage'))
const ExpertisePage = lazy(() => import('@/pages/ExpertisePage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const StrategyPage = lazy(() => import('@/pages/StrategyPage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const StoriesPage = lazy(() => import('@/pages/StoriesPage'))
const ResultsPage = lazy(() => import('@/pages/ResultsPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogDetailPage = lazy(() => import('@/pages/BlogDetailPage'))
const ReportsPage = lazy(() => import('@/pages/ReportsPage'))
const ShopPage = lazy(() => import('@/pages/ShopPage'))
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'))
const GetInvolvedPage = lazy(() => import('@/pages/GetInvolvedPage'))
const MembershipPage = lazy(() => import('@/pages/MembershipPage'))
const CareersPage = lazy(() => import('@/pages/CareersPage'))
const PartnerWithUsPage = lazy(() => import('@/pages/PartnerWithUsPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const DonatePage = lazy(() => import('@/pages/DonatePage'))
const StyleguidePage = lazy(() => import('@/pages/StyleguidePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: <HomePage /> },

      // Who we are
      { path: ROUTES.ABOUT.slice(1), element: <AboutPage /> },
      { path: ROUTES.TEAM.slice(1), element: <TeamPage /> },
      { path: ROUTES.PARTNERS.slice(1), element: <PartnersPage /> },

      // What we do
      { path: ROUTES.EXPERTISE.slice(1), element: <ExpertisePage /> },
      { path: ROUTES.SERVICES.slice(1), element: <ServicesPage /> },
      { path: ROUTES.STRATEGY.slice(1), element: <StrategyPage /> },

      // Our impact
      { path: ROUTES.PROJECTS.slice(1), element: <ProjectsPage /> },
      { path: ROUTES.PROJECT_DETAIL.slice(1), element: <ProjectDetailPage /> },
      { path: ROUTES.STORIES.slice(1), element: <StoriesPage /> },
      { path: ROUTES.RESULTS.slice(1), element: <ResultsPage /> },
      { path: ROUTES.BLOG.slice(1), element: <BlogPage /> },
      { path: ROUTES.BLOG_DETAIL.slice(1), element: <BlogDetailPage /> },
      { path: ROUTES.REPORTS.slice(1), element: <ReportsPage /> },

      // Eco Shop
      { path: ROUTES.SHOP.slice(1), element: <ShopPage /> },
      { path: ROUTES.PRODUCT_DETAIL.slice(1), element: <ProductDetailPage /> },

      // Get involved
      { path: ROUTES.GET_INVOLVED.slice(1), element: <GetInvolvedPage /> },
      { path: ROUTES.MEMBERSHIP.slice(1), element: <MembershipPage /> },
      { path: ROUTES.CAREERS.slice(1), element: <CareersPage /> },
      { path: ROUTES.PARTNER.slice(1), element: <PartnerWithUsPage /> },

      // Contact & Donate
      { path: ROUTES.CONTACT.slice(1), element: <ContactPage /> },
      { path: ROUTES.DONATE.slice(1), element: <DonatePage /> },
      { path: ROUTES.STYLEGUIDE.slice(1), element: <StyleguidePage /> },

      // 404
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
