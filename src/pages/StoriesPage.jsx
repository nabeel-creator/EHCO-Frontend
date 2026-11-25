import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import Button from '@/components/common/Button'

export default function StoriesPage() {
  return (
    <>
      <PageBanner
        title="Field Stories"
        breadcrumbs={[{ label: 'Stories' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Featured Story Spotlight */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <ImagePlaceholder
                id="STORY_FEATURED_IMG"
                label="Student Auditor in Lahore"
                description="Student displaying their 20-day plastic audit weight chart."
                aspectRatio="16/10"
                dimensions="700 × 438"
                rounded="rounded-xl"
                className="w-full"
              />
            </div>

            <div className="lg:col-span-7 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2.5 py-0.5 rounded-md inline-block">
                Student Perspective
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#064D3B] leading-snug">
                "Counting every single plastic wrapper transformed how our whole family buys groceries."
              </h2>
              <p className="text-xs sm:text-sm text-[#738078] leading-relaxed">
                During the 20-day Plastic Audit Phase 2, student teams weighed their daily waste, identifying single-use wrappers as their primary footprint. Participants designed replacement fabric carriers and shared audit logs with their households.
              </p>
              <div className="text-[11px] font-bold text-[#064D3B] pt-1">
                Student Case Study · Lahore Chapter
              </div>
            </div>
          </div>

          {/* Secondary Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#F5F6F1] rounded-2xl p-5 border border-[#E5EAE4] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded-md">
                  Flood Relief Dispatch
                </span>
                <h3 className="text-base font-bold text-[#064D3B] mt-2 mb-1.5">
                  Training Community Responders in Chung
                </h3>
                <p className="text-xs text-[#738078] leading-relaxed">
                  How young volunteers teamed up with Al-Khidmat Foundation to prepare 50+ children and families for annual monsoon flooding risks through tactile simulation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E5EAE4]">
                <Button to="/impact/projects/alkhidmat-flood-camp" variant="quiet" className="!p-0 !text-xs !font-bold text-[#064D3B]">
                  Read project breakdown →
                </Button>
              </div>
            </div>

            <div className="bg-[#F5F6F1] rounded-2xl p-5 border border-[#E5EAE4] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded-md">
                  Classroom Leadership
                </span>
                <h3 className="text-base font-bold text-[#064D3B] mt-2 mb-1.5">
                  Building DIY Air Quality Monitors at Samanabad
                </h3>
                <p className="text-xs text-[#738078] leading-relaxed">
                  Students built particulate monitoring devices from raw components, measuring smog levels in their own hallways and designing school filtration guidelines.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E5EAE4]">
                <Button to="/impact/projects/samanabad-school-session" variant="quiet" className="!p-0 !text-xs !font-bold text-[#064D3B]">
                  Read project breakdown →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
