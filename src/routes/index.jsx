import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorFallback from '@/components/common/ErrorFallback'
import MainLayout from '@/layouts/MainLayout'
import { ROUTES } from '@/routes/paths'

const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT.slice(1),
        element: <AboutPage />,
      },
      {
        path: ROUTES.CONTACT.slice(1),
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
