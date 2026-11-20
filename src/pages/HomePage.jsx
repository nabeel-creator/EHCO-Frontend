import { ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/routes/paths'

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: 'Fast & Modern',
    description: 'Powered by Vite and React 19 with code-split lazy routes for fast initial loads.',
  },
  {
    icon: Layers,
    title: 'Clean Architecture',
    description: 'Organized into layouts, pages, components, and centralized route definitions.',
  },
  {
    icon: ShieldCheck,
    title: 'Production Ready',
    description: 'Includes route error boundaries, 404 fallback, and Tailwind CSS v4 design tokens.',
  },
]

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
          EHCO Frontend
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Build modern web experiences with confidence.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
          A clean, scalable React + JavaScript starter configured with Tailwind CSS and React
          Router, ready for feature development.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={ROUTES.ABOUT}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
