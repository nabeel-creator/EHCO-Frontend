import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  y = 24,
  threshold = 0.15,
}) {
  const elRef = useRef(null)

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !elRef.current) return

    const el = elRef.current

    // IntersectionObserver to trigger animation when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              el,
              { opacity: 0, y },
              {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease: 'power2.out',
                clearProps: 'transform',
              }
            )
            observer.unobserve(el)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [delay, duration, y, threshold])

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  )
}
