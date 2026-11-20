import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import { ROUTES } from '@/routes/paths'

export default function ErrorFallback() {
  const error = useRouteError()

  let title = 'Something went wrong'
  let message = 'An unexpected error occurred while rendering this page.'

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`
    message = error.data?.message || 'Unable to load the requested route.'
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
        Application Error
      </span>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 max-w-md text-sm text-slate-600">{message}</p>
      <Link
        to={ROUTES.HOME}
        className="mt-6 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
      >
        Back to Home
      </Link>
    </div>
  )
}
