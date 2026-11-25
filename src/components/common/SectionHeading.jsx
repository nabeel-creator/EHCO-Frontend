export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  dark = false,
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={`mb-6 md:mb-8 ${
        isCenter ? 'text-center mx-auto' : ''
      } ${className}`}
    >
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${isCenter ? 'items-center' : ''}`}>
        <div className={`space-y-3 ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>
          {eyebrow && (
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              dark
                ? 'bg-[#C9F15B] text-[#064D3B]'
                : 'bg-[#E7EDE5] text-[#064D3B]'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span>{eyebrow}</span>
            </div>
          )}

          {title && (
            <h2
              className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-[1.2] ${
                dark ? 'text-white' : 'text-[#064D3B]'
              }`}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                dark ? 'text-[#D0DFD7]' : 'text-[#738078]'
              } ${isCenter ? 'mx-auto' : ''}`}
            >
              {description}
            </p>
          )}
        </div>

        {action && (
          <div className="shrink-0 self-start md:self-end">
            {action}
          </div>
        )}
      </div>
    </div>
  )
}
