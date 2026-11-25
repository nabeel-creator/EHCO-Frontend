import Button from '../common/Button'

export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#064D3B] text-white p-6 sm:p-10 md:p-12 border border-[#0B6B52] shadow-xl text-center">
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#C9F15B]/15 via-[#0B6B52]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to bring real environmental resilience to your school or community?
            </h2>

            <p className="text-base sm:text-lg text-[#D0DFD7] max-w-2xl mx-auto leading-relaxed">
              Whether you want to sponsor a school workshop, distribute emergency flood preparedness kits, or join as a student fellow, your action directly protects vulnerable communities in Lahore.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button to="/donate" variant="lime" withArrow className="!font-bold !px-8">
                Donate to EHCO
              </Button>
              <Button to="/get-involved" variant="outline" className="!text-white !border-white/30 hover:!bg-white/10 !px-8">
                Get involved as a volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
