import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ResultsMap from '@/components/results/ResultsMap'
import ResultsTable from '@/components/results/ResultsTable'
import Ledger from '@/components/common/Ledger'
import impactData from '@content/impact.json'

export default function ResultsPage() {
  return (
    <>
      <PageBanner
        title="Impact & Results"
        breadcrumbs={[{ label: 'Results' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Key Metrics Ledger Cards */}
          <div>
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2.5 py-0.5 rounded-md">
                By The Numbers
              </span>
              <h2 className="text-xl font-bold text-[#064D3B] mt-1.5">
                Verified Program Metrics
              </h2>
            </div>
            <Ledger items={impactData.stats} />
          </div>

          {/* Interactive Map Visual */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4]">
            <h2 className="text-base font-bold text-[#064D3B] mb-1">Geographic Footprint</h2>
            <p className="text-xs text-[#738078] mb-4">Intervention sites across Lahore and flood-affected territories.</p>
            <ResultsMap />
          </div>

          {/* Accessible Data Twin Table */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4]">
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2.5 py-0.5 rounded-md">
                Full Registry
              </span>
              <h2 className="text-lg font-bold text-[#064D3B] mt-1">
                Project Sites Table
              </h2>
            </div>
            <ResultsTable />
          </div>
        </div>
      </Section>
    </>
  )
}
