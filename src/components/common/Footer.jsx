import { useState } from 'react'
import { Link } from 'react-router-dom'
import navigation from '../../../content/navigation.json'
import siteData from '../../../content/site.json'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) return
    setNewsletterStatus('subscribed')
  }

  return (
    <footer className="relative bg-[#17231F] text-white dark-bg overflow-hidden border-t border-[#233830]">
      {/* Decorative top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#064D3B] via-[#C9F15B] to-[#064D3B]" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-0">
        {/* 1. Attractive & Compact Contact Card (No tags, rich gradient surface) */}
        <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#064D3B] via-[#093A2D] to-[#0D2820] border border-[#0B6B52]/50 shadow-lg relative overflow-hidden">
          {/* Subtle lime glow accent */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9F15B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Contact Proposal & Rapid Channels */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                Have a project, partnership, or workshop in mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#D0DFD7] max-w-lg leading-relaxed">
                Connect directly with our Lahore youth secretariat for school audit bookings, flood kits, or institutional partnerships.
              </p>

              {/* Attractive Quick-Action Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={siteData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9F15B] hover:bg-[#B7E048] text-[#064D3B] text-xs font-bold transition-all duration-150 shadow-xs"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.352-3.095 1.037 1.037-3.095-.352-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all duration-150"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Right: Newsletter Input */}
            <div className="lg:col-span-5 bg-black/25 rounded-xl p-4 border border-white/10">
              <span className="text-[11px] font-bold text-[#C9F15B] uppercase tracking-wider block mb-1">
                Newsletter Dispatch
              </span>
              <p className="text-xs text-[#D0DFD7] mb-3">
                Get monthly field logs and upcoming volunteer notices.
              </p>

              {newsletterStatus === 'subscribed' ? (
                <div className="p-2.5 rounded-lg bg-[#C9F15B]/20 text-[#C9F15B] text-xs font-semibold flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    aria-label="Email address for updates"
                    className="flex-1 px-3.5 py-2 rounded-full bg-black/30 border border-white/15 text-white text-xs placeholder-[#738078] focus:border-[#C9F15B] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-[#C9F15B] hover:bg-[#B7E048] text-[#064D3B] font-bold text-xs transition-colors shrink-0 cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 2. Compact Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Organization Bio */}
          <div className="lg:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-bold text-sm border border-[#0B6B52]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                {siteData.name}
              </span>
            </Link>

            <p className="text-[#A9C3B5] text-xs leading-relaxed max-w-sm">
              {siteData.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={siteData.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#21332D] hover:bg-[#C9F15B] hover:text-[#064D3B] text-white flex items-center justify-center transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href={siteData.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#21332D] hover:bg-[#C9F15B] hover:text-[#064D3B] text-white flex items-center justify-center transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href={siteData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#21332D] hover:bg-[#C9F15B] hover:text-[#064D3B] text-white flex items-center justify-center transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.3-2.188l-.44-.352-3.095 1.037 1.037-3.095-.352-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {navigation.groups.slice(0, 3).map((group) => (
            <div key={group.label} className="space-y-2.5">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                {group.label}
              </h4>
              <ul className="space-y-1.5 text-xs">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-[#A9C3B5] hover:text-[#C9F15B] transition-colors inline-block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Bottom Legal & Registration Bar */}
        <div className="pt-5 pb-6 border-t border-[#233830] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#738078]">
          <p>
            &copy; {CURRENT_YEAR} Environmental Healthcare Organization (EHCO). All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#A9C3B5]/50">{siteData.ngoRegistration}</span>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact & Inquiries
            </Link>
          </div>
        </div>

        {/* 4. Massive Brand Statement Watermark (Flush to the bottom edge with 0 bottom margin) */}
        <div className="w-full overflow-hidden select-none pointer-events-none text-center leading-none -mb-3 sm:-mb-5 md:-mb-8 lg:-mb-10">
          <span className="block text-[21vw] font-black tracking-tighter text-white/[0.05] uppercase leading-none font-sans">
            EHCO
          </span>
        </div>
      </div>
    </footer>
  )
}
