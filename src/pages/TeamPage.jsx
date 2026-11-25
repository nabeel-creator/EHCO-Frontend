import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import TeamCard from '@/components/team/TeamCard'
import Button from '@/components/common/Button'
import teamData from '@content/team.json'

export default function TeamPage() {
  const featured = teamData.members.find((m) => m.featured)
  const others = teamData.members.filter((m) => !m.featured)

  return (
    <>
      <PageBanner
        title="Our Team"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Our Team' },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Chairperson / Founder Featured Card */}
          {featured && <TeamCard member={featured} featured />}

          {/* Executive Committee & Officers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start mt-6">
            {others.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>

          {/* Recruitment / Volunteer CTA */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#064D3B] text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold">Want to work or volunteer with EHCO?</h3>
              <p className="text-xs text-[#D0DFD7] max-w-lg">
                We frequently open fellowships and volunteer intakes for students in Lahore eager for real field impact.
              </p>
            </div>
            <Button to="/get-involved/careers" variant="lime" withArrow className="!font-bold shrink-0 !py-2 !px-4 !text-xs">
              Explore Roles
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
