import Button from '../common/Button'
import ImagePlaceholder from '../common/ImagePlaceholder'
import siteData from '@content/site.json'

export default function OrgIntroSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F6F1]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Side 1: Environmental Image Collage (Asymmetrical) */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-7">
              <ImagePlaceholder
                id="ABOUT_COLLAGE_1"
                label="Hands-On School Workshop in Lahore"
                description="Students sorting recyclable materials and checking air filter cards in a classroom."
                aspectRatio="4/5"
                dimensions="700 × 875"
                rounded="rounded-3xl"
                className="w-full card-shadow"
              />
            </div>
            <div className="col-span-12 sm:col-span-5 flex flex-col gap-4 justify-between">
              <ImagePlaceholder
                id="ABOUT_COLLAGE_2"
                label="Seed Planting & Resilience"
                description="Young people planting native trees in an urban community garden in Lahore."
                aspectRatio="1/1"
                dimensions="500 × 500"
                rounded="rounded-2xl"
                className="w-full card-shadow"
              />

              <div className="p-5 rounded-2xl bg-[#E7EDE5] border border-[#DCE5DA] flex flex-col justify-center">
                <span className="text-2xl font-extrabold text-[#064D3B]">2024</span>
                <span className="text-xs text-[#738078] font-medium mt-1">
                  Founded in Lahore, led by youth & women scientists
                </span>
              </div>
            </div>
          </div>

          {/* Side 2: Large Dark-Green Editorial Card */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-[#064D3B] text-white p-8 sm:p-12 md:p-14 border border-[#0B6B52] shadow-xl">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9F15B]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C9F15B] text-[#064D3B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  Who We Are
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Turning Pakistan's climate reality into community resilience.
                </h2>

                <p className="text-base sm:text-lg text-[#D0DFD7] leading-relaxed">
                  {siteData.description} {siteData.mission}
                </p>

                {/* Mission & Vision Quote blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#0B6B52]">
                  <div className="p-4 rounded-2xl bg-[#122B22]/70 border border-[#1E4336]">
                    <span className="text-xs uppercase font-bold text-[#C9F15B]">Our Vision</span>
                    <p className="mt-1 text-xs sm:text-sm text-[#D0DFD7] leading-relaxed">
                      {siteData.vision}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#122B22]/70 border border-[#1E4336]">
                    <span className="text-xs uppercase font-bold text-[#C9F15B]">Urgent Context</span>
                    <p className="mt-1 text-xs sm:text-sm text-[#D0DFD7] leading-relaxed">
                      {siteData.framingLine}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button to="/about" variant="lime" withArrow className="!font-bold">
                    Learn about EHCO
                  </Button>
                  <Button to="/about/team" variant="outline" className="!text-white !border-white/30 hover:!bg-white/10">
                    Meet the team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
