import { useState } from 'react'

export default function YouTubeFacade({ videoId, title }) {
  const [loaded, setLoaded] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  if (loaded) {
    return (
      <div className="relative w-full aspect-video rounded-[12px] overflow-hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="relative w-full aspect-video rounded-[12px] overflow-hidden group cursor-pointer bg-navy/10"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
        width={480}
        height={360}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-navy/20 group-hover:bg-navy/30 transition-colors">
        <svg width="68" height="48" viewBox="0 0 68 48" aria-hidden="true" className="drop-shadow-lg">
          <path d="M66.5 7.7c-.8-2.9-3-5.1-5.9-5.9C55.3 0 34 0 34 0S12.7 0 7.4 1.8c-2.9.8-5.1 3-5.9 5.9C0 13 0 24 0 24s0 11 1.5 16.3c.8 2.9 3 5.1 5.9 5.9C12.7 48 34 48 34 48s21.3 0 26.6-1.8c2.9-.8 5.1-3 5.9-5.9C68 35 68 24 68 24s0-11-1.5-16.3z" fill="#FF0000"/>
          <path d="M27 34l18-10-18-10z" fill="#fff"/>
        </svg>
      </div>
    </button>
  )
}
