import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import ImagePlaceholder from '../common/ImagePlaceholder'
import projectsData from '@content/projects.json'

export default function CaseStudiesSection() {
  const projects = projectsData.projects || []
  const featured =
    projects.find((p) => p.slug === 'plastic-audit-phase-1') ||
    projects.find((p) => p.slug === 'samanabad-school-session') ||
    projects[0]

  const supporting = projects
    .filter((p) => p.slug !== featured?.slug)
    .slice(0, 2)

  return (
    <section className="py-12 sm:py-16 bg-[#F5F6F1]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work in Action"
          title="Verified environmental initiatives across Lahore."
          description="Every initiative is youth-designed and directly implemented in classrooms and communities."
          action={
            <Button to="/impact/projects" variant="secondary" withArrow className="!py-2 !px-4 !text-xs">
              View all case studies
            </Button>
          }
        />

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Featured Project (7 Cols) */}
          {featured && (
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5EAE4] overflow-hidden flex flex-col justify-between hover:border-[#064D3B]/40 hover:shadow-sm transition-all duration-200 group">
              <div>
                <div className="relative overflow-hidden">
                  <ImagePlaceholder
                    id="PROJECT_FEATURED"
                    label={featured.title}
                    description={`Photograph of ${featured.title} in Lahore.`}
                    aspectRatio="16/9"
                    dimensions="1200 × 675"
                    rounded="rounded-t-2xl"
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-bold text-[#064D3B] border border-[#E5EAE4]">
                    Featured Case Study
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[#738078]">
                      {featured.place} {featured.when && `· ${featured.when}`}
                    </span>
                    {featured.people && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#E7EDE5] text-[#064D3B]">
                        {featured.people}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#064D3B] tracking-tight group-hover:text-[#04392B] mb-2 leading-snug">
                    {featured.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#738078] leading-relaxed line-clamp-3">
                    {featured.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <Button
                  to={`/impact/projects/${featured.slug}`}
                  variant="primary"
                  withArrow
                  className="!py-2 !px-4 !text-xs"
                >
                  Read full case study
                </Button>
              </div>
            </div>
          )}

          {/* Supporting Project Cards (5 Cols Stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {supporting.map((proj, idx) => (
              <div
                key={proj.slug}
                className="bg-white rounded-2xl border border-[#E5EAE4] overflow-hidden flex flex-col justify-between hover:border-[#064D3B]/40 hover:shadow-sm transition-all duration-200 p-4 sm:p-5 flex-1 group"
              >
                <div>
                  <div className="relative mb-3 overflow-hidden rounded-xl">
                    <ImagePlaceholder
                      id={`PROJECT_SUPPORT_${idx + 1}`}
                      label={proj.title}
                      description={`Documentary photo of ${proj.title}.`}
                      aspectRatio="16/9"
                      dimensions="600 × 338"
                      rounded="rounded-xl"
                      className="w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    {proj.partners && proj.partners.length > 0 && (
                      <span className="absolute bottom-2 left-2 bg-[#17231F]/80 backdrop-blur-sm text-[#C9F15B] text-[10px] font-bold px-2 py-0.5 rounded">
                        Partner: {proj.partners.join(', ')}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] text-[#738078] font-medium">
                      {proj.place} {proj.when && `· ${proj.when}`}
                    </span>
                    {proj.people && (
                      <span className="text-[10px] font-semibold text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded">
                        {proj.people}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#064D3B] group-hover:text-[#04392B] mb-1 leading-snug">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-[#738078] line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#E5EAE4] flex items-center justify-between text-xs font-bold text-[#064D3B]">
                  <Link
                    to={`/impact/projects/${proj.slug}`}
                    className="hover:underline flex items-center gap-1.5"
                  >
                    <span>View breakdown</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
