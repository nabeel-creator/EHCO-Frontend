import Button from '../common/Button'
import ImagePlaceholder from '../common/ImagePlaceholder'
import teamData from '@content/team.json'

export default function CommunityHighlight() {
  const featuredMembers = (teamData.members || []).slice(0, 4)

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#064D3B] text-white p-8 sm:p-12 md:p-16 border border-[#0B6B52] shadow-xl">
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9F15B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#17231F]/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Header */}
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C9F15B] text-[#064D3B] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                Women-Led Climate Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Meet the young scientists & organizers steering EHCO.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#D0DFD7] leading-relaxed">
                {teamData.intro}
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredMembers.map((member, idx) => (
                <div
                  key={member.slug}
                  className="bg-[#122B22] rounded-2xl p-5 border border-[#1E4336] flex flex-col justify-between group hover:border-[#C9F15B]/40 transition-all duration-200"
                >
                  <div>
                    <div className="mb-4 overflow-hidden rounded-xl border border-[#1E4336]">
                      <ImagePlaceholder
                        id={`TEAM_PORTRAIT_${idx + 1}`}
                        label={member.name}
                        description={`Professional documentary portrait of ${member.name}, ${member.title} at EHCO Lahore.`}
                        aspectRatio="1/1"
                        dimensions="500 × 500"
                        rounded="rounded-xl"
                        dark
                        className="w-full"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#C9F15B] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#A0BAAC] uppercase tracking-wide mt-1">
                      {member.title}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1E4336] text-[11px] text-[#A9C3B5]/80">
                    Lahore Core Team
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Banner */}
            <div className="pt-6 border-t border-[#0B6B52] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-white">
                  Want to join our volunteer fellowship or core committee?
                </p>
                <p className="text-xs text-[#D0DFD7] mt-0.5">
                  We welcome passionate youth across environmental science, education, and digital design.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button to="/about/team" variant="lime" withArrow className="!font-bold">
                  View full team
                </Button>
                <Button to="/get-involved/membership" variant="outline" className="!text-white !border-white/30 hover:!bg-white/10">
                  Become a member
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
