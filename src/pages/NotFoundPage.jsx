import { Link } from 'react-router-dom'
import { ROUTES } from '@/routes/paths'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-indigo-600">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-slate-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        to={ROUTES.HOME}
        className="mt-6 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
      >
        Go back home
      </Link>
    </section>
  )
}
