import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items, className = '' }) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-current opacity-85">
        <li>
          <Link to="/" className="hover:opacity-100 hover:underline transition-opacity">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href || item.label} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="opacity-50">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="font-semibold opacity-100">
                {item.label}
              </span>
            ) : (
              <Link to={item.href} className="hover:opacity-100 hover:underline transition-opacity">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
