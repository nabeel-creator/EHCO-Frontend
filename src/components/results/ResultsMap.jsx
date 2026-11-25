import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectPath } from '../../routes/paths'
import sitesData from '../../../content/sites.json'

export default function ResultsMap() {
  const [selectedSite, setSelectedSite] = useState(null)

  // Simple Lahore map — SVG coordinates derived from lat/lng
  // Map bounds: lat 31.38-31.65, lng 74.17-74.38
  const mapWidth = 500
  const mapHeight = 500
  const latMin = 31.38
  const latMax = 31.65
  const lngMin = 74.17
  const lngMax = 74.38

  function toSvg(lat, lng) {
    const x = ((lng - lngMin) / (lngMax - lngMin)) * mapWidth
    const y = mapHeight - ((lat - latMin) / (latMax - latMin)) * mapHeight
    return { x, y }
  }

  function ringRadius(people) {
    if (!people) return 10
    return Math.min(8 + 2.2 * Math.sqrt(people), 36)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Map */}
      <div className="lg:col-span-8">
        <svg
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
          role="img"
          aria-label="Map of EHCO project sites in Lahore"
          className="w-full border border-hairline rounded-[12px] bg-mint/30"
        >
          {/* Ravi River (simplified) */}
          <path
            d="M0 120 Q100 100 200 130 Q300 110 400 140 Q500 120 500 100"
            fill="none"
            stroke="var(--color-azure)"
            strokeWidth="3"
            opacity="0.4"
          />

          {/* Site pins */}
          {sitesData.sites.map((site) => {
            const pos = toSvg(site.lat, site.lng)
            const r = ringRadius(site.people)
            const isSelected = selectedSite?.slug === site.slug

            return (
              <g key={site.slug}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={r}
                  fill={isSelected ? 'var(--color-navy)' : 'none'}
                  stroke={isSelected ? 'var(--color-navy)' : 'var(--color-azure)'}
                  strokeWidth="2"
                  opacity={isSelected ? 0.9 : 0.6}
                />
                {/* Hit area for accessibility — min 44px equivalent */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={Math.max(r, 22)}
                  fill="transparent"
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${site.name}: ${site.people || 'unknown'} people, ${site.date}`}
                  onClick={() => setSelectedSite(site)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedSite(site)
                    }
                  }}
                />
                {/* Label */}
                <text
                  x={pos.x}
                  y={pos.y + r + 14}
                  textAnchor="middle"
                  className="text-[11px] fill-navy"
                >
                  {site.name}
                </text>
              </g>
            )
          })}

          {/* Legend */}
          <g transform={`translate(10, ${mapHeight - 60})`}>
            <text className="text-[10px] fill-navy/60" y="0">Ring size = people at the event</text>
            <circle cx="12" cy="20" r="6" fill="none" stroke="var(--color-azure)" strokeWidth="1.5" opacity="0.6"/>
            <text className="text-[9px] fill-navy/60" x="24" y="24">Small</text>
            <circle cx="70" cy="20" r="14" fill="none" stroke="var(--color-azure)" strokeWidth="1.5" opacity="0.6"/>
            <text className="text-[9px] fill-navy/60" x="90" y="24">Large</text>
          </g>
        </svg>
      </div>

      {/* Selected site panel */}
      <div className="lg:col-span-4">
        {selectedSite ? (
          <div className="bg-mint rounded-[20px] p-6">
            <h3 className="text-forest font-semibold text-lg">{selectedSite.name}</h3>
            <p className="text-navy/70 text-sm mt-1">{selectedSite.date}</p>
            <p className="text-navy text-base mt-2">
              {selectedSite.people ? `${selectedSite.people} people` : 'People count not available'}
            </p>
            {selectedSite.projectSlug && (
              <Link
                to={projectPath(selectedSite.projectSlug)}
                className="inline-flex items-center gap-1 mt-4 text-azure font-semibold text-sm underline underline-offset-2 hover:text-azure-hover min-h-[48px]"
              >
                View project
              </Link>
            )}
          </div>
        ) : (
          <div className="bg-mint rounded-[20px] p-6">
            <p className="text-navy/60 text-base">Select a site on the map to see details.</p>
          </div>
        )}
      </div>
    </div>
  )
}
