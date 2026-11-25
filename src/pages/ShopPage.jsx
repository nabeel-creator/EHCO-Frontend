import { Link } from 'react-router-dom'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import productsData from '@content/products.json'
import { productPath } from '@/routes/paths'

export default function ShopPage() {
  return (
    <>
      <PageBanner
        title="Eco Shop"
        breadcrumbs={[{ label: 'Eco Shop' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl font-bold text-[#064D3B]">Student-crafted sustainability items</h2>
            <p className="text-xs text-[#738078] mt-1">{productsData.intro}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productsData.products.map((product) => (
              <Link
                key={product.slug}
                to={productPath(product.slug)}
                className="group bg-[#F5F6F1] border border-[#E5EAE4] rounded-2xl overflow-hidden hover:border-[#064D3B]/40 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden bg-white">
                    <ImagePlaceholder
                      id={`PRODUCT_${product.slug.toUpperCase().replace(/-/g, '_')}`}
                      label={product.name}
                      description={`Product photograph of ${product.name}.`}
                      aspectRatio="1/1"
                      dimensions="500 × 500"
                      rounded="rounded-t-2xl"
                      className="w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.status === 'coming-soon' ? (
                      <span className="absolute top-3 left-3 bg-[#17231F]/80 backdrop-blur-sm text-[#C9F15B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#064D3B] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#E5EAE4]">
                        Available
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <span className="text-[11px] text-[#738078] font-medium block mb-1">
                      {product.material}
                    </span>
                    <h3 className="text-sm font-bold text-[#064D3B] group-hover:text-[#04392B] leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#738078] mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between border-t border-[#E5EAE4] mt-2">
                  <span className="text-xs font-mono font-bold text-[#064D3B]">
                    {product.price}
                  </span>
                  <span className="text-xs font-bold text-[#064D3B] group-hover:underline">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
