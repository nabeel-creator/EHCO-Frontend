import { Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import SkipLink from '@/components/common/SkipLink'
import SiteHeader from '@/components/common/SiteHeader'
import TaglineBand from '@/components/common/TaglineBand'
import Footer from '@/components/common/Footer'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Suspense
          fallback={
            <div role="status" aria-live="polite" className="flex min-h-[50vh] items-center justify-center">
              <span className="text-navy/60 text-base font-medium">Loading…</span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <TaglineBand />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
