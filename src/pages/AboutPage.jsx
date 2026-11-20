export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs sm:p-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          About
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Architecture & Standards
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          This application is structured around clear separation of concerns—keeping routing,
          shared layouts, reusable UI components, and route-level pages modular and easy to
          maintain as the codebase grows.
        </p>

        <div className="mt-8 grid gap-6 border-t border-slate-100 pt-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Core Stack</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>React 19 (JavaScript)</li>
              <li>Vite with path aliases (@/)</li>
              <li>Tailwind CSS v4</li>
              <li>React Router (Data Router + Lazy Loading)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Conventions</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Centralized route constants in src/routes/paths.js</li>
              <li>Shared MainLayout with ScrollRestoration</li>
              <li>Route-level ErrorFallback and 404 handling</li>
              <li>Linting enforced via oxlint</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
