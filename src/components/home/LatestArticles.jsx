import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import ImagePlaceholder from '../common/ImagePlaceholder'

const articles = [
  {
    slug: 'plastic-audits-work-better-than-lectures',
    title: 'Why plastic audits work better than lectures in Lahore schools',
    category: 'Education & Behaviour',
    date: 'Nov 2025',
    readTime: '4 min read',
    summary: 'When students weigh their household plastic waste in grams over 20 days, sustainable habits emerge naturally through personal empirical data.',
    link: '/impact/blog/plastic-audits-work-better-than-lectures',
  },
  {
    slug: 'conserving-the-ravi-migratory-bird-day',
    title: 'Conserving the Ravi: World Migratory Bird Day observations',
    category: 'Ecosystems & Biodiversity',
    date: 'Oct 2025',
    readTime: '6 min read',
    summary: "Reflections from Dr. Atif Yaqub's talk at Kamran Baradari on ecological decline, river pollution, and seasonal avian transit routes.",
    link: '/impact/blog/conserving-the-ravi-migratory-bird-day',
  },
  {
    slug: 'lahore-smog-survival-school-kit',
    title: 'School air monitors: What classrooms do when smog index spikes',
    category: 'Air Quality',
    date: 'Sep 2025',
    readTime: '5 min read',
    summary: 'How DIY particulate sensors assembled in Samanabad classrooms empower students to track indoor air quality.',
    link: '/impact/blog/lahore-smog-survival-school-kit',
  },
]

export default function LatestArticles() {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F6F1]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Editorial & Insights"
          title="Latest field dispatches and research."
          description="Reflections, curriculum experiments, and environmental science from our Lahore team."
          action={
            <Button to="/impact/blog" variant="secondary" withArrow className="!py-2 !px-4 !text-xs">
              View all articles
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((post, idx) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-[#E5EAE4] overflow-hidden flex flex-col justify-between hover:border-[#064D3B]/40 hover:shadow-sm transition-all duration-200 group"
            >
              <div>
                <Link to={post.link} className="block overflow-hidden">
                  <ImagePlaceholder
                    id={`ARTICLE_THUMB_${idx + 1}`}
                    label={post.title}
                    description={`Editorial thumbnail for ${post.title}.`}
                    aspectRatio="16/10"
                    dimensions="600 × 375"
                    rounded="rounded-t-2xl"
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[11px] text-[#738078] mb-2 font-medium">
                    <span className="font-semibold text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#064D3B] group-hover:text-[#04392B] leading-snug line-clamp-2">
                    <Link to={post.link}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#738078] mt-2 leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <Link
                  to={post.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064D3B] hover:text-[#04392B] group/btn"
                >
                  <span>Read article</span>
                  <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
