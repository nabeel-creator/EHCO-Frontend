import { useState } from 'react'
import Section from '@/components/common/Section'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import RippleRings from '@/components/home/RippleRings'
import Field from '@/components/form/Field'
import Select from '@/components/form/Select'
import Textarea from '@/components/form/Textarea'

export default function StyleguidePage() {
  const [fieldVal, setFieldVal] = useState('Sample text')
  const [selectVal, setSelectVal] = useState('one')
  const [areaVal, setAreaVal] = useState('Sample message text')

  return (
    <div className="py-8">
      {/* Title */}
      <Container className="mb-12">
        <Breadcrumbs items={[{ label: 'Design System & Styleguide' }]} />
        <h1 className="text-forest font-bold text-[36px] md:text-[48px] leading-[1.1] mb-4">
          EHCO Design System & Tokens
        </h1>
        <p className="text-navy text-lg max-w-[65ch]">
          Living styleguide documenting brand tokens, contrast compliance (WCAG 2.2 AA), radius roles, and reusable interface components.
        </p>
      </Container>

      {/* 1. Color Palette & Contrast Validation */}
      <Section bg="mint">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          1. Brand Palette & Contrast Ratios
        </h2>
        <p className="text-navy text-lg mb-8 max-w-[65ch]">
          Balance: 60% white and mint, 30% forest and navy, 10% olive and azure. Olive is strictly an accent fill and never used for body text.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-[20px] border border-hairline shadow-sm">
            <div className="w-full h-16 rounded-[8px] bg-forest mb-4" />
            <h3 className="text-forest font-semibold text-xl">Forest (#3C6A3F)</h3>
            <p className="text-navy text-sm mt-1">Role: Primary buttons, headings, wordmark</p>
            <p className="text-navy/70 text-sm mt-2">White on Forest: 6.31:1 (AA Pass)</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-hairline shadow-sm">
            <div className="w-full h-16 rounded-[8px] bg-navy mb-4" />
            <h3 className="text-navy font-semibold text-xl">Classic Navy (#123B65)</h3>
            <p className="text-navy text-sm mt-1">Role: Body copy, dark bands, footer</p>
            <p className="text-navy/70 text-sm mt-2">Navy on White: 11.42:1 (AAA Pass)</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-hairline shadow-sm">
            <div className="w-full h-16 rounded-[8px] bg-azure mb-4" />
            <h3 className="text-azure font-semibold text-xl">Vivid Azure (#055C9D)</h3>
            <p className="text-navy text-sm mt-1">Role: Links, focus ring, ring pins</p>
            <p className="text-navy/70 text-sm mt-2">Azure on White: 6.94:1 (AA Pass)</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-hairline shadow-sm">
            <div className="w-full h-16 rounded-[8px] bg-mint border border-hairline mb-4" />
            <h3 className="text-forest font-semibold text-xl">Glacier Mint (#D5E9E3)</h3>
            <p className="text-navy text-sm mt-1">Role: Calm background panels, badges</p>
            <p className="text-navy/70 text-sm mt-2">Navy on Mint: 9.02:1 (AAA Pass)</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-hairline shadow-sm">
            <div className="w-full h-16 rounded-[8px] bg-olive mb-4" />
            <h3 className="text-navy font-semibold text-xl">Olive Green (#79A25A)</h3>
            <p className="text-navy text-sm mt-1">Role: Graphic fills, rings (never text)</p>
            <p className="text-red-700 text-sm font-medium mt-2">Fails text contrast. Graphic fill only.</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-hairline shadow-sm">
            <div className="w-full h-16 rounded-[8px] bg-white border border-hairline mb-4" />
            <h3 className="text-forest font-semibold text-xl">White (#FFFFFF)</h3>
            <p className="text-navy text-sm mt-1">Role: Default canvas background</p>
            <p className="text-navy/70 text-sm mt-2">Forest on White: 6.31:1 (AA Pass)</p>
          </div>
        </div>
      </Section>

      {/* 2. Typography Scale */}
      <Section bg="white">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-8">
          2. Typography Scale (Poppins + Georgia Italic)
        </h2>
        <div className="space-y-8 max-w-[800px]">
          <div>
            <span className="text-xs font-semibold text-navy/50">Display (Home Hero only) · 36px mobile / 60px desktop · 700</span>
            <p className="text-forest font-bold text-[36px] md:text-[60px] leading-[1.1] tracking-[-0.01em]">
              Young people in Lahore
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold text-navy/50">H1 · 32px mobile / 42px desktop · 700</span>
            <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15]">
              Turning climate awareness into action
            </h1>
          </div>

          <div>
            <span className="text-xs font-semibold text-navy/50">H2 · 24px mobile / 32px desktop · 600</span>
            <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2]">
              Where we have worked in communities
            </h2>
          </div>

          <div>
            <span className="text-xs font-semibold text-navy/50">H3 · 20px mobile / 24px desktop · 500</span>
            <h3 className="text-forest font-medium text-xl md:text-2xl leading-[1.3]">
              School plastic audits & waste reduction
            </h3>
          </div>

          <div>
            <span className="text-xs font-semibold text-navy/50">Body copy · 18px / 1.65 line-height · 400</span>
            <p className="text-navy text-lg leading-relaxed max-w-[65ch]">
              Community members, partners and donors. Many are on slow mobile connections. Many are older readers. Design mobile first, then widen. Links are explicitly <a href="#test" className="text-azure underline underline-offset-2">underlined in body copy</a>.
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold text-navy/50">Tagline font (Georgia italic fallback) · 32px · Mint on Forest</span>
            <div className="bg-forest p-6 rounded-[12px] text-center dark-bg mt-2">
              <p className="text-mint text-[32px] leading-tight" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Grow, Adapt, Sustain.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Buttons & Actions */}
      <Section bg="mint">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          3. Button Variants (48px min hit target)
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <Button variant="primary">Primary Button</Button>
            <p className="text-navy/70 text-xs mt-2">Forest fill, white text, 8px radius</p>
          </div>
          <div>
            <Button variant="secondary">Secondary Button</Button>
            <p className="text-navy/70 text-xs mt-2">Navy 1.5px border, navy text</p>
          </div>
          <div>
            <Button variant="quiet">Quiet Button Link</Button>
            <p className="text-navy/70 text-xs mt-2">Azure text, underlined</p>
          </div>
        </div>
      </Section>

      {/* 4. Radius Rules */}
      <Section bg="white">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          4. Radius Follows Role
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-mint p-6 rounded-[8px] flex flex-col items-center justify-center min-h-[140px]">
            <span className="text-navy font-semibold text-lg">8px</span>
            <span className="text-navy/70 text-sm mt-1">Buttons & Fields</span>
          </div>
          <div className="bg-mint p-6 rounded-[12px] flex flex-col items-center justify-center min-h-[140px]">
            <span className="text-navy font-semibold text-lg">12px</span>
            <span className="text-navy/70 text-sm mt-1">Photos & Cards</span>
          </div>
          <div className="bg-mint p-6 rounded-[20px] flex flex-col items-center justify-center min-h-[140px]">
            <span className="text-navy font-semibold text-lg">20px</span>
            <span className="text-navy/70 text-sm mt-1">Mint Panels</span>
          </div>
          <div className="bg-mint p-6 rounded-full flex flex-col items-center justify-center w-[140px] h-[140px] mx-auto">
            <span className="text-navy font-semibold text-lg">50%</span>
            <span className="text-navy/70 text-sm mt-1">Portraits & Pins</span>
          </div>
        </div>
      </Section>

      {/* 5. Form Elements */}
      <Section bg="mint">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          5. Form Inputs (WCAG Compliant)
        </h2>
        <div className="max-w-[500px] space-y-6">
          <Field
            label="Standard text input"
            name="demo-field"
            value={fieldVal}
            onChange={(e) => setFieldVal(e.target.value)}
          />

          <Field
            label="Field with accessible error"
            name="demo-err"
            required
            value=""
            error="Please provide a valid entry to continue."
            onChange={() => {}}
          />

          <Select
            label="Category selector"
            name="demo-select"
            value={selectVal}
            onChange={(e) => setSelectVal(e.target.value)}
            options={[
              { value: 'one', label: 'School workshops' },
              { value: 'two', label: 'Flood preparedness' },
              { value: 'three', label: 'Youth leadership' },
            ]}
          />

          <Textarea
            label="Multiline textarea"
            name="demo-area"
            value={areaVal}
            onChange={(e) => setAreaVal(e.target.value)}
          />
        </div>
      </Section>

      {/* 6. Hero Ripple Rings */}
      <Section bg="white">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          6. Ripple Rings (Hero Concept)
        </h2>
        <p className="text-navy text-lg mb-8 max-w-[65ch]">
          Concentric ripples symbolize multiplier impact. Animated once with stroke-dashoffset, static under reduced motion.
        </p>
        <div className="relative w-[300px] h-[300px] mx-auto bg-mint/20 rounded-full flex items-center justify-center overflow-hidden">
          <RippleRings />
          <div className="w-[160px] h-[160px] rounded-full bg-forest text-white flex items-center justify-center font-bold text-xl z-10">
            EHCO
          </div>
        </div>
      </Section>
    </div>
  )
}
