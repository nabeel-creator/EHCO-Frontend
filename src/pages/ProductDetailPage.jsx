import { useParams } from 'react-router-dom'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import Button from '@/components/common/Button'
import productsData from '@content/products.json'
import siteData from '@content/site.json'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = productsData.products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <Section bg="white" className="py-12 text-center">
        <div className="bg-[#F5F6F1] rounded-2xl p-6 border border-[#E5EAE4] max-w-md mx-auto">
          <h1 className="text-xl font-bold text-[#064D3B]">Product Not Found</h1>
          <p className="text-xs text-[#738078] mt-1">This eco-product is not listed in our catalogue.</p>
          <div className="mt-4">
            <Button to="/shop" variant="primary" className="!py-2 !px-4 !text-xs">
              Return to Eco Shop
            </Button>
          </div>
        </div>
      </Section>
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Hello EHCO team, I am interested in ordering "${product.name}". Could you share details?`
  )

  return (
    <>
      <PageBanner
        title={product.name}
        breadcrumbs={[
          { label: 'Eco Shop', href: '/shop' },
          { label: product.name },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Photo Gallery (5 Cols) */}
          <div className="md:col-span-5 overflow-hidden rounded-2xl border border-[#E5EAE4] bg-[#F5F6F1] p-3">
            <ImagePlaceholder
              id={`PRODUCT_DETAIL_${product.slug.toUpperCase().replace(/-/g, '_')}`}
              label={product.name}
              description={`Detailed photograph of ${product.name}.`}
              aspectRatio="1/1"
              dimensions="600 × 600"
              rounded="rounded-xl"
              priority
              className="w-full"
            />
          </div>

          {/* Product Details (7 Cols) */}
          <div className="md:col-span-7 bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4] space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2.5 py-0.5 rounded-md inline-block mb-1.5">
                {product.material}
              </span>

              <h1 className="text-xl sm:text-2xl font-bold text-[#064D3B]">
                {product.name}
              </h1>

              {product.price && product.status !== 'coming-soon' && (
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#064D3B] font-mono">
                    {product.price}
                  </span>
                  <span className="text-xs text-[#738078]">per unit</span>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#738078] leading-relaxed">
              {product.description}
            </p>

            <div className="p-3.5 rounded-xl bg-white border border-[#E5EAE4]">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] mb-2">
                Specifications
              </h3>
              <dl className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <dt className="text-[#738078]">Crafted By</dt>
                  <dd className="font-semibold text-[#173D2D]">EHCO Students</dd>
                </div>
                <div>
                  <dt className="text-[#738078]">Material</dt>
                  <dd className="font-semibold text-[#173D2D]">{product.material}</dd>
                </div>
              </dl>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <Button
                href={`${siteData.contact.whatsappLink}?text=${whatsappMessage}`}
                variant="lime"
                withArrow
                target="_blank"
                rel="noopener noreferrer"
                className="!font-bold !py-2 !px-4 !text-xs justify-center"
              >
                Inquire via WhatsApp
              </Button>
              <Button to="/shop" variant="secondary" className="!py-2 !px-4 !text-xs justify-center">
                Back to Shop
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
