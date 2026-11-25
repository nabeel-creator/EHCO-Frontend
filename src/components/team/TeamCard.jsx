import { useState } from 'react'
import ImagePlaceholder from '../common/ImagePlaceholder'

export default function TeamCard({ member, featured = false }) {
  const [expanded, setExpanded] = useState(false)
  const bioId = `bio-${member.slug}`

  if (featured) {
    return (
      <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4] mb-6">
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <div className="w-32 sm:w-36 shrink-0 overflow-hidden rounded-xl border border-[#E5EAE4]">
            <ImagePlaceholder
              id={`TEAM_${member.slug.toUpperCase().replace(/-/g, '_')}`}
              label={member.name}
              description={`Portrait of ${member.name}, ${member.title}.`}
              aspectRatio="1/1"
              dimensions="400 × 400"
              rounded="rounded-xl"
              className="w-full"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E7EDE5] text-[#064D3B] mb-1">
              Leadership Spotlight
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#064D3B]">{member.name}</h2>
            <p className="text-[#738078] font-semibold text-xs sm:text-sm">{member.title}</p>
            <p className="text-[#173D2D] text-xs sm:text-sm mt-2 leading-relaxed">{member.bio}</p>

            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={bioId}
              className="mt-2 text-[#064D3B] text-xs font-bold underline hover:text-[#04392B] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{expanded ? 'Show less' : 'Read biography'}</span>
            </button>

            {expanded && (
              <div id={bioId} className="mt-2 p-3 rounded-lg bg-white border border-[#E5EAE4] text-xs text-[#738078] leading-relaxed">
                <p>Full bio record for {member.name}. Dedicated to advancing youth environmental leadership, community education, and institutional resilience across Pakistan.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#F5F6F1] rounded-2xl p-4 border border-[#E5EAE4] flex flex-col justify-between hover:border-[#064D3B]/40 hover:shadow-xs transition-all duration-200">
      <div>
        <div className="mb-3 overflow-hidden rounded-xl border border-[#E5EAE4]">
          <ImagePlaceholder
            id={`TEAM_${member.slug.toUpperCase().replace(/-/g, '_')}`}
            label={member.name}
            description={`Portrait of ${member.name}, ${member.title}.`}
            aspectRatio="1/1"
            dimensions="400 × 400"
            rounded="rounded-xl"
            className="w-full"
          />
        </div>

        <span className="text-[10px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded inline-block mb-1">
          {member.title}
        </span>
        <h3 className="text-sm font-bold text-[#064D3B]">{member.name}</h3>
        <p className="text-xs text-[#738078] mt-1 line-clamp-3 leading-relaxed">{member.bio}</p>
      </div>

      <div className="mt-3 pt-2 border-t border-[#E5EAE4]">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={bioId}
          className="text-[#064D3B] text-[11px] font-bold underline hover:text-[#04392B] inline-flex items-center gap-1 cursor-pointer"
        >
          <span>{expanded ? 'Hide' : 'Details'}</span>
        </button>

        {expanded && (
          <div id={bioId} className="mt-2 text-[11px] text-[#738078] leading-relaxed bg-white p-2.5 rounded-lg border border-[#E5EAE4]">
            {member.bio}
          </div>
        )}
      </div>
    </div>
  )
}
