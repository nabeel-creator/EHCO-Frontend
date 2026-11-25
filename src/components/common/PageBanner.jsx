import Breadcrumbs from './Breadcrumbs'

export default function PageBanner({
  title,
  description,
  breadcrumbs = [],
  children,
  className = '',
}) {
  return (
    <div className={`relative px-4 sm:px-6 lg:px-8 pt-2 pb-4 md:pb-6 ${className}`}>
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-2xl bg-[#064D3B] text-white py-6 sm:py-8 px-6 text-center border border-[#0B6B52]/40 shadow-sm">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C9F15B]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h1>

            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mt-2 text-xs opacity-80">
                <Breadcrumbs items={breadcrumbs} className="!text-[#D5E9E3]" />
              </div>
            )}

            {description && (
              <p className="mt-2 text-xs sm:text-sm text-[#D0DFD7] max-w-lg mx-auto leading-relaxed">
                {description}
              </p>
            )}

            {children && <div className="mt-3">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
