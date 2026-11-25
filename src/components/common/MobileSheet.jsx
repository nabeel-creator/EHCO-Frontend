import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

export default function MobileSheet({ navGroups, donateButton, isOpen, onClose }) {
  const sheetRef = useRef(null)
  const closeRef = useRef(null)
  const location = useLocation()
  const [openGroup, setOpenGroup] = useState(null)

  const prevPathname = useRef(location.pathname)

  // Close on route change
  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname
      onClose()
    }
  }, [location.pathname, onClose])

  // Focus trap & escape listener
  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = sheetRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={sheetRef}
      className="fixed inset-0 z-50 bg-[#17231F]/60 backdrop-blur-sm flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Top Header */}
        <div className="p-6 border-b border-[#E5EAE4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-bold text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <span className="font-extrabold text-[#064D3B] text-lg tracking-tight">EHCO Navigation</span>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-10 h-10 rounded-full bg-[#F5F6F1] hover:bg-[#E7EDE5] flex items-center justify-center text-[#173D2D] transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Menu Navigation Links */}
        <div className="p-6 space-y-4 flex-1">
          {navGroups.map((group) => {
            const hasSub = group.items && group.items.length > 0
            const isExpanded = openGroup === group.label

            if (!hasSub) {
              return (
                <div key={group.label} className="border-b border-[#E5EAE4] pb-3">
                  <Link
                    to={group.href || `/${group.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={onClose}
                    className="block text-lg font-bold text-[#064D3B] hover:text-[#0B6B52] transition-colors py-1"
                  >
                    {group.label}
                  </Link>
                </div>
              )
            }

            return (
              <div key={group.label} className="border-b border-[#E5EAE4] pb-3">
                <button
                  type="button"
                  onClick={() => setOpenGroup(isExpanded ? null : group.label)}
                  className="w-full flex items-center justify-between text-lg font-bold text-[#064D3B] py-1 cursor-pointer"
                >
                  <span>{group.label}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#064D3B]' : 'text-[#738078]'}`}
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#C9F15B]">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="block py-2 text-sm font-medium text-[#738078] hover:text-[#064D3B] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTAs */}
        <div className="p-6 bg-[#F5F6F1] border-t border-[#E5EAE4] space-y-3">
          <Button
            to={donateButton?.href || '/donate'}
            variant="lime"
            className="w-full justify-center !font-bold"
            onClick={onClose}
          >
            {donateButton?.label || 'Donate to EHCO'}
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            className="w-full justify-center"
            onClick={onClose}
          >
            Contact & Volunteer
          </Button>
        </div>
      </div>
    </div>
  )
}
