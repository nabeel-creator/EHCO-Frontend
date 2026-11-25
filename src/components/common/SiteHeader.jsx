import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavGroup from './NavGroup'
import MobileSheet from './MobileSheet'
import navigation from '../../../content/navigation.json'
import siteData from '../../../content/site.json'

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const handleClose = useCallback(() => setMobileOpen(false), [])

  const isHomeActive = location.pathname === '/'
  const isContactActive = location.pathname === '/contact'

  // Shared shadow token for all floating header elements
  const pillShadow = 'shadow-[0_4px_16px_rgba(0,0,0,0.06)]'

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300 pointer-events-none px-3 sm:px-6 md:px-8 pt-3 sm:pt-4">
        <div className="mx-auto max-w-[1280px] flex items-center justify-between gap-3">
          {/* 1. Left Pill: Logo Container (Height 48px) */}
          <div className="pointer-events-auto shrink-0">
            <Link
              to="/"
              className={`h-[48px] inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-[#E5EAE4] rounded-full px-4 ${pillShadow} hover:border-[#064D3B]/40 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-200 group`}
            >
              <div className="w-8 h-8 rounded-full bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-black text-sm shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-base font-extrabold tracking-tight text-[#064D3B] leading-none">
                  EHCO
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-[#738078] leading-none mt-0.5">
                  Climate Action
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Center Pill: Desktop Nav Links with Slashes & Low Spacing (Height 48px) */}
          <nav
            aria-label="Primary"
            className={`h-[48px] hidden lg:inline-flex pointer-events-auto items-center bg-white/95 backdrop-blur-md border border-[#E5EAE4] rounded-full px-4 ${pillShadow}`}
          >
            {/* Home Link */}
            <Link
              to="/"
              className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors duration-150 ${
                isHomeActive
                  ? 'text-[#064D3B] font-bold'
                  : 'text-[#173D2D] hover:text-[#064D3B]'
              }`}
            >
              Home
            </Link>
            <span className="text-[#738078]/40 select-none text-[11px] font-light px-1">/</span>

            {/* Navigation Groups (Dropdowns on Hover) */}
            {navigation.groups.map((group) => (
              <div key={group.label} className="inline-flex items-center">
                <NavGroup
                  label={group.label}
                  items={group.items}
                  href={group.href}
                />
                <span className="text-[#738078]/40 select-none text-[11px] font-light px-1">/</span>
              </div>
            ))}

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors duration-150 ${
                isContactActive
                  ? 'text-[#064D3B] font-bold'
                  : 'text-[#173D2D] hover:text-[#064D3B]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* 3. Right Pills: Social/Cart Pill + Donate Button Pill (Height 48px each) */}
          <div className="hidden lg:flex pointer-events-auto items-center gap-2.5 shrink-0">
            {/* Social & Cart Icons Container */}
            <div className={`h-[48px] inline-flex items-center gap-1 bg-white/95 backdrop-blur-md border border-[#E5EAE4] rounded-full px-3.5 ${pillShadow}`}>
              {/* Instagram */}
              <a
                href={siteData.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#738078] hover:text-[#064D3B] p-1.5 transition-colors rounded-full hover:bg-[#F5F6F1]"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={siteData.socials.linkedin?.url || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#738078] hover:text-[#064D3B] p-1.5 transition-colors rounded-full hover:bg-[#F5F6F1]"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={siteData.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#738078] hover:text-[#064D3B] p-1.5 transition-colors rounded-full hover:bg-[#F5F6F1]"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>

              {/* Shopping Bag / Eco Shop Icon with Badge */}
              <Link
                to="/shop"
                className="relative text-[#738078] hover:text-[#064D3B] p-1.5 transition-colors rounded-full hover:bg-[#F5F6F1]"
                title="Eco Shop"
                aria-label="Eco Shop"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                  <path d="M3 6h18"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#064D3B] text-[#C9F15B] text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  0
                </span>
              </Link>
            </div>

            {/* Donate CTA Pill Button (Height 48px) */}
            <Link
              to={navigation.donateButton.href}
              className={`h-[48px] px-5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md border border-[#E5EAE4] hover:border-[#064D3B]/40 text-[#064D3B] hover:bg-[#F5F6F1] ${pillShadow} hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-200 inline-flex items-center justify-center cursor-pointer`}
            >
              {navigation.donateButton.label}
            </Link>
          </div>

          {/* 4. Mobile Actions (Logo & Menu in separate clean pills, Height 48px) */}
          <div className="flex items-center gap-2 lg:hidden pointer-events-auto">
            <Link
              to="/donate"
              className={`h-[48px] px-4 rounded-full text-xs font-bold bg-[#C9F15B] text-[#064D3B] hover:bg-[#B7E048] ${pillShadow} inline-flex items-center justify-center transition-all`}
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-label="Open navigation menu"
              className={`h-[48px] w-[48px] flex items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-[#E5EAE4] hover:bg-[#F5F6F1] transition-colors text-[#064D3B] cursor-pointer ${pillShadow}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileSheet
        navGroups={navigation.groups}
        donateButton={navigation.donateButton}
        isOpen={mobileOpen}
        onClose={handleClose}
      />
    </>
  )
}
