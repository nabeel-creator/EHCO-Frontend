import { Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import PageLoader from '@/components/common/PageLoader'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
