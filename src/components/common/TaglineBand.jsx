export default function TaglineBand() {
  return (
    <div className="relative overflow-hidden bg-[#064D3B] py-12 md:py-16 text-center text-white dark-bg border-y border-[#0B6B52]/40">
      <div className="absolute inset-0 bg-radial from-[#C9F15B]/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <span className="inline-block px-3.5 py-1 mb-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C9F15B] text-[#064D3B]">
          EHCO Motto
        </span>
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Grow, Adapt, <span className="text-[#C9F15B]">Sustain.</span>
        </p>
        <p className="mt-3 text-sm sm:text-base text-[#D0DFD7] max-w-md mx-auto">
          Environmental Healthcare Organization — Empowering Youth Leadership in Lahore, Pakistan
        </p>
      </div>
    </div>
  )
}
