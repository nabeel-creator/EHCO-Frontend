import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-forest text-white hover:bg-forest-hover shadow-xs hover:shadow-md transition-all duration-200 min-h-[48px] px-6 py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-2',
  lime:
    'bg-[#C9F15B] text-[#064D3B] hover:bg-[#B7E048] shadow-xs hover:shadow-md transition-all duration-200 min-h-[48px] px-6 py-3 rounded-full font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-2',
  secondary:
    'bg-white text-[#173D2D] border border-[#E5EAE4] hover:border-[#064D3B]/40 hover:bg-[#F5F6F1] shadow-xs transition-all duration-200 min-h-[48px] px-6 py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-2',
  outline:
    'border border-[#064D3B] text-[#064D3B] hover:bg-[#064D3B] hover:text-white transition-all duration-200 min-h-[48px] px-6 py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-2',
  dark:
    'bg-[#17231F] text-white hover:bg-[#21332D] shadow-xs transition-all duration-200 min-h-[48px] px-6 py-3 rounded-full font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9F15B] focus-visible:outline-offset-2',
  quiet:
    'text-[#064D3B] font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-1.5 hover:gap-2.5 transition-all duration-200 py-2 group cursor-pointer underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-forest focus-visible:outline-offset-2',
}

export default function Button({
  variant = 'primary',
  href,
  to,
  children,
  className = '',
  withArrow = false,
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3.333 8h9.334M8.667 4l4 4-4 4" />
        </svg>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
