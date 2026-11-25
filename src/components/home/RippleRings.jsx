export default function RippleRings() {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <circle
        cx="200" cy="200" r="140"
        fill="none"
        stroke="var(--color-azure)"
        strokeWidth="1"
        opacity="0.3"
        className="ripple-ring"
        style={{ strokeDasharray: '879.6', strokeDashoffset: '879.6', animation: 'drawRing 1.2s ease-out forwards' }}
      />
      <circle
        cx="200" cy="200" r="165"
        fill="none"
        stroke="var(--color-olive)"
        strokeWidth="0.75"
        opacity="0.25"
        className="ripple-ring"
        style={{ strokeDasharray: '1036.7', strokeDashoffset: '1036.7', animation: 'drawRing 1.2s ease-out 0.15s forwards' }}
      />
      <circle
        cx="200" cy="200" r="190"
        fill="none"
        stroke="var(--color-azure)"
        strokeWidth="0.5"
        opacity="0.15"
        className="ripple-ring"
        style={{ strokeDasharray: '1193.8', strokeDashoffset: '1193.8', animation: 'drawRing 1.2s ease-out 0.3s forwards' }}
      />

      <style>{`
        @keyframes drawRing {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ripple-ring {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </svg>
  )
}
