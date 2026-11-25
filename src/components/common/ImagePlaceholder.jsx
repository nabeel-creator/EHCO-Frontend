export default function ImagePlaceholder({
  id,
  label = 'Image placeholder',
  description = 'Photographic asset placeholder',
  dimensions = 'Auto',
  aspectRatio = '16/9',
  className = '',
  src,
  alt = '',
  rounded = 'rounded-2xl',
  priority = false,
  dark = false,
}) {
  // If a real image source exists and isn't a TODO placeholder string, render standard image
  const hasRealImage = src && !src.startsWith('TODO') && src.trim().length > 0

  if (hasRealImage) {
    return (
      <div
        className={`relative overflow-hidden ${rounded} ${className}`}
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={alt || label}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`${label}: ${description} (${dimensions})`}
      className={`group relative overflow-hidden flex flex-col justify-between border transition-all duration-300 ${
        dark
          ? 'bg-[#122B22] border-[#1E4336] text-white'
          : 'bg-[#EAF1E8] border-[#DCE5DA] text-[#173D2D]'
      } ${rounded} ${className}`}
      style={{ aspectRatio }}
    >
      {/* Subtle background SVG pattern */}
      <svg
        className={`absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] ${
          dark ? 'stroke-white' : 'stroke-forest'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id={`grid-${id || 'ph'}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" strokeWidth="1" />
            <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${id || 'ph'})`} />
      </svg>

      {/* Top Header Pill */}
      <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase ${
            dark
              ? 'bg-white/10 text-lime border border-white/10'
              : 'bg-white/80 text-forest border border-forest/10 shadow-xs'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9F15B] animate-pulse" />
          {id || 'IMG_ASSET'}
        </span>

        {dimensions && (
          <span
            className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
              dark ? 'bg-black/30 text-[#A0BAAC]' : 'bg-forest/5 text-forest/70'
            }`}
          >
            {dimensions}
          </span>
        )}
      </div>

      {/* Center Icon & Label */}
      <div className="relative z-10 px-4 py-2 flex flex-col items-center justify-center text-center my-auto">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-105 ${
            dark ? 'bg-white/10 text-lime' : 'bg-white shadow-xs text-forest'
          }`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
        <p
          className={`text-xs sm:text-sm font-semibold tracking-tight ${
            dark ? 'text-white' : 'text-forest'
          }`}
        >
          {label}
        </p>
      </div>

      {/* Bottom Description banner */}
      <div
        className={`relative z-10 p-3 sm:p-3.5 text-[11px] sm:text-xs leading-snug line-clamp-2 ${
          dark ? 'bg-black/25 text-[#A9C3B5]' : 'bg-white/60 text-[#4D6559] border-t border-[#DCE5DA]/60'
        }`}
      >
        <span className="font-medium mr-1 text-forest">Required:</span>
        {description}
      </div>
    </div>
  )
}
