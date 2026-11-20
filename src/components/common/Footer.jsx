import { Link } from 'react-router-dom'
import { ROUTES } from '@/routes/paths'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>&copy; {CURRENT_YEAR} EHCO. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to={ROUTES.HOME} className="transition-colors hover:text-slate-900">
            Home
          </Link>
          <Link to={ROUTES.ABOUT} className="transition-colors hover:text-slate-900">
            About
          </Link>
          <Link to={ROUTES.CONTACT} className="transition-colors hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
