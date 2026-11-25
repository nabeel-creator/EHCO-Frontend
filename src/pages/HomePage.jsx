import Hero from '@/components/home/Hero'
import CategoryBar from '@/components/home/CategoryBar'
import OrgIntroSection from '@/components/home/OrgIntroSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import ProcessSection from '@/components/home/ProcessSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import CommunityHighlight from '@/components/home/CommunityHighlight'
import LatestArticles from '@/components/home/LatestArticles'
import FinalCTA from '@/components/home/FinalCTA'
import Section from '@/components/common/Section'
import SectionHeading from '@/components/common/SectionHeading'
import Ledger from '@/components/common/Ledger'
import PartnerWall from '@/components/partners/PartnerWall'
import Button from '@/components/common/Button'
import ResultsMap from '@/components/results/ResultsMap'
import impactData from '@content/impact.json'
import partnersData from '@content/partners.json'

export default function HomePage() {
  return (
    <>
      {/* 1. Asymmetrical Editorial Hero */}
      <Hero />

      {/* 2. Category Navigation Bar */}
      <CategoryBar />

      {/* 3. Organization Introduction (Asymmetrical Collage + Dark-Green Card) */}
      <OrgIntroSection />

      {/* 4. Services Grid (SaaS-inspired modern card grid) */}
      <ServicesGrid />

      {/* 5. Featured Process / Methodology Section (Dark-green with lime accents) */}
      <ProcessSection />

      {/* 6. Projects & Case Studies (Asymmetrical image-led layout) */}
      <CaseStudiesSection />

      {/* 7. Community & Team Highlight (Dark-green panel with portraits) */}
      <CommunityHighlight />

      {/* 8. Impact Footprint & Results Map (Preserving existing verified map & ledger data) */}
      <Section bg="white" className="border-t border-[#E5EAE4]">
        <SectionHeading
          eyebrow="Geographic Reach"
          title={impactData.headline || 'Where We Have Worked'}
          description={
            impactData.description ||
            'Each ring on the map marks a community in Pakistan where EHCO conducted a verified project or camp.'
          }
          action={
            <Button to="/impact/results" variant="secondary" withArrow>
              View detailed results table
            </Button>
          }
        />

        <div className="bg-[#F5F6F1] rounded-3xl p-6 sm:p-8 border border-[#E5EAE4] card-shadow mb-10">
          <ResultsMap />
        </div>

        <div className="pt-4">
          <Ledger items={impactData.stats} />
        </div>
      </Section>

      {/* 9. Coalition & Partners Wall */}
      <Section bg="main" className="border-t border-[#E5EAE4]">
        <SectionHeading
          eyebrow="Coalition Network"
          title="Our partners and collaborative allies"
          description="We work alongside recognized civic institutions, humanitarian relief agencies, and academic campuses to scale practical climate training."
          action={
            <Button to="/about/partners" variant="secondary" withArrow>
              Partner with us
            </Button>
          }
        />
        <PartnerWall partners={partnersData.partners} />
      </Section>

      {/* 10. Latest Editorial Articles & Research */}
      <LatestArticles />

      {/* 11. Pre-Footer Final CTA */}
      <FinalCTA />
    </>
  )
}
