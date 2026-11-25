import { useParams, Link } from 'react-router-dom'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import Button from '@/components/common/Button'
import { BLOG_ARTICLES } from '@/data/articles'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const article = BLOG_ARTICLES.find((a) => a.slug === slug) || BLOG_ARTICLES[0]
  const otherArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <PageBanner
        title="Blog Single"
        breadcrumbs={[
          { label: 'Blog', href: '/impact/blog' },
          { label: article.category },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Article Header & Meta */}
          <div className="mb-8 pb-6 border-b border-[#E5EAE4]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#064D3B] tracking-tight leading-tight max-w-3xl">
                {article.title}
              </h1>
              <span className="text-xs text-[#738078] shrink-0 font-medium">
                {article.readTime} — {article.date}
              </span>
            </div>

            {/* Author Row */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#064D3B] text-[#C9F15B] font-bold text-sm flex items-center justify-center shrink-0">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-[#173D2D]">{article.author}</p>
                <p className="text-xs text-[#738078]">{article.role}</p>
              </div>
            </div>
          </div>

          {/* 2-Column Content + Sidebar (Matches Panel 1) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Editorial Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-4 text-sm sm:text-base text-[#738078] leading-relaxed">
                <h2 className="text-lg sm:text-xl font-bold text-[#064D3B]">
                  1. Tangible Empirical Discovery
                </h2>
                <p>
                  {article.summary} When students handle weighing scales and record discarded wrappers and bottles in daily physical journals, the abstraction of global climate collapse turns into an immediate, measurable reality.
                </p>
                <p>
                  In Lahore classrooms where EHCO conducted audit pilots, over 80% of students expressed surprise at their individual weekly single-use consumption. Direct tactile measurement creates accountability that traditional lectures cannot replicate.
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#738078] leading-relaxed pt-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#064D3B]">
                  2. Sustained Habit Formation Over 20 Days
                </h2>
                <p>
                  Habit transformation requires continuous reinforcement. Over a 20-day school tracking cycle, participating classrooms instituted waste segregation stations and monitored their daily drop in unrecyclable plastic.
                </p>
                <p>
                  By connecting data collection with peer competitions and classroom targets, waste volumes decreased by an average of 34% within the second week of implementation.
                </p>
              </div>

              {/* Bottom Wide Photographic Banner (Matches Panel 1) */}
              <div className="pt-4 overflow-hidden rounded-2xl border border-[#E5EAE4]">
                <ImagePlaceholder
                  id={`BLOG_HERO_${article.id}`}
                  label={article.title}
                  description={`Documentary photograph supporting ${article.title} in Lahore.`}
                  aspectRatio="16/7"
                  dimensions="1200 × 525"
                  rounded="rounded-2xl"
                  className="w-full"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <Button to="/impact/blog" variant="secondary" className="!py-2 !px-4 !text-xs">
                  ← Back to all articles
                </Button>
                <Button to="/get-involved" variant="primary" className="!py-2 !px-4 !text-xs">
                  Join next workshop
                </Button>
              </div>
            </div>

            {/* Sidebar: Popular Posts & Search (Matches Panel 1) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Search Widget */}
              <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#064D3B] mb-3">
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search topics..."
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5EAE4] text-xs text-[#173D2D] focus:outline-none focus:border-[#064D3B]"
                  />
                </div>
              </div>

              {/* Popular Posts Widget */}
              <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#064D3B] mb-4">
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {otherArticles.map((item) => (
                    <Link
                      key={item.id}
                      to={`/impact/blog/${item.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#E5EAE4]">
                        <ImagePlaceholder
                          id={`THUMB_${item.id}`}
                          label={item.title}
                          description="Thumbnail"
                          aspectRatio="1/1"
                          dimensions="100 × 100"
                          rounded="rounded-xl"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-[#064D3B] group-hover:text-[#04392B] leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-[#738078] mt-1 block">
                          {item.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </>
  )
}
