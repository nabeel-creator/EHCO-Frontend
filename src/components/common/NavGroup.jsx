import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavGroup({ label, items, href }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)
  const ref = useRef(null)
  const buttonRef = useRef(null)
  const location = useLocation()
  const id = `nav-${label.toLowerCase().replace(/\s+/g, '-')}`

  // Check if current route is within this group
  const isActive = items?.some((item) => location.pathname === item.href) || location.pathname === href

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Close on Escape or click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])


  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 180)
  }

  // Single link without dropdown items
  if (!items || items.length === 0) {
    const targetHref = href || `/${label.toLowerCase().replace(/\s+/g, '-')}`
    return (
      <Link
        to={targetHref}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-150 inline-flex items-center ${
          isActive
            ? 'text-[#064D3B] font-bold'
            : 'text-[#173D2D] hover:text-[#064D3B]'
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <div
      ref={ref}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={id}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-150 inline-flex items-center gap-1 cursor-pointer select-none ${
          isActive || open
            ? 'text-[#064D3B] font-bold'
            : 'text-[#173D2D] hover:text-[#064D3B]'
        }`}
      >
        <span>{label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ease-out ${
            open ? 'rotate-180 text-[#064D3B]' : 'text-[#738078] opacity-70'
          }`}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown Container with Smooth Animation & Invisible Hover Bridge */}
      <div
        id={id}
        role="menu"
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ease-out origin-top ${
          open
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-1.5 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border border-[#E5EAE4] rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] py-2 min-w-[210px] text-left">
          {items.map((item) => {
            const isItemActive = location.pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`px-3.5 py-2 mx-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                  isItemActive
                    ? 'bg-[#E7EDE5] text-[#064D3B] font-bold'
                    : 'text-[#173D2D] hover:bg-[#F5F6F1] hover:text-[#064D3B]'
                }`}
              >
                <span>{item.label}</span>
                {isItemActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#064D3B]" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
