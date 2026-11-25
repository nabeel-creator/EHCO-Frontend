import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Button from '../common/Button'
import ImagePlaceholder from '../common/ImagePlaceholder'
import siteData from '@content/site.json'
import impactData from '@content/impact.json'

export default function Hero() {
  const containerRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headingRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const mainImageRef = useRef(null)
  const rightColRef = useRef(null)

  const peopleStat = impactData.stats?.find((s) => s.figure === '968') || impactData.stats?.[0]
  const projectStat = impactData.stats?.find((s) => s.figure === '10') || impactData.stats?.[1]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // 1. Eyebrow appears
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        // 2. Heading reveals
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.3'
        )
        // 3. Supporting description fades upward
        .fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        // 4. CTA buttons appear
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.4'
        )
        // 5. Main image scales gently into place
        .fromTo(
          mainImageRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, clearProps: 'transform' },
          '-=0.4'
        )
        // 6. Supporting portrait card and metric cards appear with a slight stagger
        .fromTo(
          rightColRef.current?.children || [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, clearProps: 'transform' },
          '-=0.5'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column (Hero Content + Primary Environmental Photograph) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Eyebrow Label */}
            <div ref={eyebrowRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7EDE5] text-[#064D3B] text-xs sm:text-sm font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#C9F15B] shadow-xs" />
              <span>Youth-Led Climate Action · Lahore, Pakistan</span>
            </div>

            {/* Headline */}
            <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#064D3B] leading-[1.08] tracking-tight">
              Young people in Lahore are turning{' '}
              <span className="relative inline-block text-[#064D3B]">
                climate awareness
                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#C9F15B]/40 -z-10 rounded-sm" />
              </span>{' '}
              into direct action.
            </h1>

            {/* Supporting description */}
            <p ref={descRef} className="text-lg sm:text-xl text-[#738078] max-w-2xl leading-relaxed">
              EHCO trains students in hands-on climate resilience — from school plastic audits to emergency flood preparedness — empowering them to teach and protect their communities.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/get-involved" variant="lime" withArrow className="!font-bold">
                Join our programmes
              </Button>
              <Button to="/impact/projects" variant="secondary" withArrow>
                Explore verified projects
              </Button>
            </div>

            {/* Main Environmental Photograph Container (~65-70% visual composition) */}
            <div ref={mainImageRef} className="pt-4">
              <div className="relative rounded-3xl overflow-hidden card-shadow group border border-[#E5EAE4]">
                <ImagePlaceholder
                  id="HERO_MAIN"
                  label="EHCO Community Climate Workshop in Lahore"
                  description="Wide documentary photograph of youth volunteers and students conducting a community plastic audit and eco-restoration workshop under natural sunlight."
                  aspectRatio="16/9"
                  dimensions="1200 × 675"
                  rounded="rounded-3xl"
                  priority
                  className="w-full transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Floating caption badge over main image */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5EAE4] shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#064D3B] text-[#C9F15B] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#064D3B]">
                      {siteData.tagline || 'Grow, Adapt, Sustain.'}
                    </p>
                    <p className="text-[11px] text-[#738078] line-clamp-1">
                      {siteData.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Volunteer Card + Verified Impact Badges) */}
          <div ref={rightColRef} className="lg:col-span-4 space-y-6 lg:pt-4">
            {/* Volunteer / Team Portrait Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5EAE4] card-shadow relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-3 py-1 rounded-full">
                  Volunteer Spotlight
                </span>
                <span className="text-xs text-[#738078] font-medium">Lahore Chapter</span>
              </div>

              {/* Portrait Placeholder */}
              <div className="mb-5 overflow-hidden rounded-2xl border border-[#E5EAE4]">
                <ImagePlaceholder
                  id="HERO_VOLUNTEER"
                  label="EHCO Student Fellow in Lahore"
                  description="Portrait photograph of an environmental student volunteer holding an air quality test kit outdoors in Lahore, documentary style."
                  aspectRatio="3/4"
                  dimensions="600 × 800"
                  rounded="rounded-2xl"
                  className="w-full"
                />
              </div>

              <h3 className="text-lg font-bold text-[#064D3B]">
                Student-led climate multipliers
              </h3>
              <p className="mt-2 text-sm text-[#738078] leading-relaxed">
                "We don't just lecture in classrooms. Every student we train conducts real household audits and teaches 20 more families."
              </p>

              <div className="mt-4 pt-4 border-t border-[#E5EAE4] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#064D3B]">Laiba Nadeem</span>
                <span className="text-[#738078]">Founder & Chairperson</span>
              </div>
            </div>

            {/* Impact Metric Card 1 */}
            <div className="bg-[#064D3B] text-white rounded-3xl p-6 border border-[#0B6B52] shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9F15B]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C9F15B]">
                    Documented Reach
                  </span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {peopleStat?.figure || '968'}+
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#D0DFD7] leading-relaxed">
                    {peopleStat?.label || 'people reached through school workshops and flood relief sessions.'}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#C9F15B] shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Impact Metric Card 2 */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5EAE4] card-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EDE5] text-[#064D3B] flex items-center justify-center font-bold text-xl shrink-0">
                {projectStat?.figure || '10'}
              </div>
              <div>
                <p className="text-sm font-bold text-[#064D3B]">
                  Completed Initiatives
                </p>
                <p className="text-xs text-[#738078] mt-0.5">
                  Across Lahore schools, Al-Khidmat relief camps & online summits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
