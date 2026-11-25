import { Link } from 'react-router-dom'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'

export default function NotFoundPage() {
  return (
    <>
      <PageBanner
        title="404 — Page Not Found"
        breadcrumbs={[{ label: '404' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="bg-[#F5F6F1] rounded-2xl p-6 sm:p-8 border border-[#E5EAE4] text-center max-w-md mx-auto">
          <h2 className="text-xl font-bold text-[#064D3B] mb-2">
            Looking for something?
          </h2>
          <p className="text-xs text-[#738078] mb-6 leading-relaxed">
            The page you requested could not be found. Use the quick links below to navigate our verified programmes:
          </p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <Link
              to="/about"
              className="p-2.5 rounded-xl bg-white hover:bg-[#E7EDE5] text-[#064D3B] font-bold text-xs transition-colors border border-[#E5EAE4]"
            >
              About Us
            </Link>
            <Link
              to="/what-we-do/services"
              className="p-2.5 rounded-xl bg-white hover:bg-[#E7EDE5] text-[#064D3B] font-bold text-xs transition-colors border border-[#E5EAE4]"
            >
              Services
            </Link>
            <Link
              to="/impact/projects"
              className="p-2.5 rounded-xl bg-white hover:bg-[#E7EDE5] text-[#064D3B] font-bold text-xs transition-colors border border-[#E5EAE4]"
            >
              Case Studies
            </Link>
            <Link
              to="/impact/blog"
              className="p-2.5 rounded-xl bg-white hover:bg-[#E7EDE5] text-[#064D3B] font-bold text-xs transition-colors border border-[#E5EAE4]"
            >
              Blog
            </Link>
          </div>

          <Button to="/" variant="primary" withArrow className="!py-2 !px-4 !text-xs">
            Return to Homepage
          </Button>
        </div>
      </Section>
    </>
  )
}
