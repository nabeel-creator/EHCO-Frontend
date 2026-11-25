import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'
import reportsData from '@content/reports.json'

export default function ReportsPage() {
  return (
    <>
      <PageBanner
        title="Publications & Reports"
        breadcrumbs={[{ label: 'Reports' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto space-y-3">
          {reportsData.reports.map((report, idx) => (
            <div
              key={idx}
              className="bg-[#F5F6F1] rounded-2xl p-4 sm:p-5 border border-[#E5EAE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5EAE4] text-[#064D3B] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#064D3B]">{report.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#738078]">
                    <span>{report.year}</span>
                    <span>·</span>
                    <span>{report.sizeKB ? `${report.sizeKB} KB PDF` : 'Formal Publication'}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                {report.file && !report.file.startsWith('TODO') ? (
                  <Button href={report.file} variant="secondary" download className="!text-xs !py-1.5 !px-3">
                    Download PDF
                  </Button>
                ) : (
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-white text-[#738078] border border-[#E5EAE4]">
                    Pending Release
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
