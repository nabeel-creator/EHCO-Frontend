import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import { BLOG_ARTICLES } from '@/data/articles'

const categories = ['All', 'Education', 'Air Quality', 'Biodiversity', 'Resilience']

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = BLOG_ARTICLES.filter((a) => {
    const matchesCat = selectedCat === 'All' || a.category === selectedCat
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <>
      <PageBanner
        title="Blog"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        {/* Compact Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E5EAE4]">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#064D3B] text-white'
                    : 'bg-[#F5F6F1] text-[#738078] hover:bg-[#E7EDE5] hover:text-[#064D3B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full pl-8 pr-3 py-1.5 rounded-full bg-[#F5F6F1] border border-[#E5EAE4] text-xs text-[#173D2D] focus:outline-none focus:border-[#064D3B]"
            />
            <svg
              className="w-3.5 h-3.5 text-[#738078] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* 4-Column Clean Article Grid (Matches Panel 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-[#E5EAE4] overflow-hidden flex flex-col justify-between hover:border-[#064D3B]/40 hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <Link to={`/impact/blog/${article.slug}`} className="block overflow-hidden">
                  <ImagePlaceholder
                    id={`BLOG_POST_${article.id}`}
                    label={article.title}
                    description={`Photo for ${article.title}.`}
                    aspectRatio="4/3"
                    dimensions="600 × 450"
                    rounded="rounded-t-2xl"
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[11px] text-[#738078] mb-2">
                    <span className="font-semibold text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded-md">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#064D3B] group-hover:text-[#04392B] leading-snug line-clamp-2">
                    <Link to={`/impact/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <Link
                  to={`/impact/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064D3B] hover:text-[#04392B] group/link"
                >
                  <span>Read More</span>
                  <span className="transition-transform group-link:translate-x-0.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
