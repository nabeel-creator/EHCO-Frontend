import Button from '../common/Button'

const steps = [
  {
    number: '01',
    title: 'School & Camp Visits',
    subtitle: 'Hands-on classroom experiments',
    description: 'We enter classrooms with tactile materials — air filter cards, measurement scales, and waste sorting bins — turning abstract climate science into tangible reality.',
  },
  {
    number: '02',
    title: 'Civil Society Coalitions',
    subtitle: 'Partnerships with relief networks',
    description: 'Partnering with Al-Khidmat Foundation, Bargad, and local educators to scale emergency kit distribution and flood preparedness across vulnerable districts.',
  },
  {
    number: '03',
    title: 'Digital Youth Outreach',
    subtitle: 'Podcasts, webinars & summits',
    description: 'Amplifying student voices through the "Let\'s Talk Climate" podcast series, virtual COP simulations, and open educational materials reaching 9+ countries.',
  },
  {
    number: '04',
    title: 'Inclusion & Multiplier Action',
    subtitle: 'Centering young women leaders',
    description: 'Every student trained acts as a community multiplier, educating households and peers to ensure sustainable environmental habits endure long after workshops.',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#17231F] text-white dark-bg overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#064D3B]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C9F15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C9F15B] text-[#064D3B] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Our Core Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How EHCO turns climate awareness into lasting habits.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D0DFD7] leading-relaxed">
            A structured four-pillar approach designed and executed by young women in Lahore to build grassroots resilience.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#0E1A16] border border-[#233830] flex flex-col justify-between group hover:border-[#C9F15B]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-[#C9F15B] font-mono tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#C9F15B] font-bold">
                    ✓
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#A0BAAC] block mb-1">
                  {step.subtitle}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9F15B] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[#A9C3B5] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#233830] text-xs text-[#738078]">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Supporting Photo Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#064D3B] border border-[#0B6B52] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9F15B]">
              Documented Impact Model
            </span>
            <h3 className="text-2xl font-bold text-white">
              Multiplier Training: One Student Reaches 20+ People
            </h3>
            <p className="text-sm sm:text-base text-[#D0DFD7] max-w-2xl leading-relaxed">
              In our pilot sessions, over 100 students conducted household audits, directly engaging family members and neighbors on waste segregation and flood safety.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Button to="/impact/results" variant="lime" withArrow className="!font-bold">
              View Verified Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
