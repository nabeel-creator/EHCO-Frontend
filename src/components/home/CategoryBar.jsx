import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Climate Education',
    desc: 'School workshops & DIY monitors',
    href: '/what-we-do/services',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: 'Plastic & Waste',
    desc: 'Household & campus audit logs',
    href: '/impact/projects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
  },
  {
    label: 'Flood Preparedness',
    desc: 'Emergency kits & family plans',
    href: '/what-we-do/expertise',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    label: 'Youth Fellowships',
    desc: 'Ehsas-e-Zameen student cohorts',
    href: '/get-involved/membership',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Eco Shop',
    desc: 'Sustainable student goods',
    href: '/shop',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    label: 'Research & Reports',
    desc: 'Lahore smog & air findings',
    href: '/impact/reports',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

export default function CategoryBar() {
  return (
    <section className="py-6 border-y border-[#E5EAE4] bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="group shrink-0 flex items-center gap-3.5 p-2.5 pr-4 rounded-full bg-[#F5F6F1] hover:bg-[#E7EDE5] border border-[#E5EAE4] hover:border-[#064D3B]/20 transition-all duration-200 card-shadow hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#064D3B] group-hover:bg-[#064D3B] group-hover:text-[#C9F15B] flex items-center justify-center transition-colors shadow-xs">
                {cat.icon}
              </div>
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold text-[#064D3B] group-hover:text-[#064D3B]">
                  {cat.label}
                </span>
                <span className="block text-[11px] text-[#738078] line-clamp-1">
                  {cat.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
