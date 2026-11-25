import Button from '../common/Button'

export default function GetInvolvedPanels() {
  return (
    <section className="bg-navy py-16 md:py-24 dark-bg">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-12">
        <h2 className="text-white font-semibold text-2xl md:text-[32px] leading-[1.2] mb-10">
          Get involved
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Donate — largest panel */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-forest rounded-[20px] p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-white font-semibold text-xl md:text-2xl mb-4">
                Donate
              </h3>
              <p className="text-mint text-base leading-relaxed">
                Your donation helps us run workshops in schools, distribute flood preparedness kits, and train young people in climate action skills.
              </p>
            </div>
            <div className="mt-6">
              <Button
                to="/donate"
                className="!bg-white !text-forest hover:!bg-mint !font-semibold"
              >
                Donate now
              </Button>
            </div>
          </div>

          {/* Become a member */}
          <div className="bg-white/10 rounded-[20px] p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">
                Become a member
              </h3>
              <p className="text-mint/80 text-base leading-relaxed">
                Join EHCO as a volunteer or member. Contribute your skills to climate education and community projects.
              </p>
            </div>
            <div className="mt-4">
              <Button
                to="/get-involved/membership"
                variant="secondary"
                className="!border-mint !text-mint hover:!bg-mint hover:!text-navy"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Partner with us */}
          <div className="bg-white/10 rounded-[20px] p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">
                Partner with us
              </h3>
              <p className="text-mint/80 text-base leading-relaxed">
                Schools, NGOs, and businesses — we work together to run workshops, distribute resources, and reach more communities.
              </p>
            </div>
            <div className="mt-4">
              <Button
                to="/get-involved/partner"
                variant="secondary"
                className="!border-mint !text-mint hover:!bg-mint hover:!text-navy"
              >
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
