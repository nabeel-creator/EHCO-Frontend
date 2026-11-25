# EHCO website: project rules

You are building the public website for EHCO (Environmental Healthcare Organization), a women-led, youth-led climate NGO in Lahore, Pakistan.

The full spec is `docs/EHCO_BUILD_SPEC.md`. Before each task, read the sections that task names. Do not work from memory of this file alone.

## Who the site is for
Community members, partners and donors. Many are on slow mobile connections. Many are older readers. Design mobile first, then widen.

Site goals, in priority order: build trust, make Donate / Join / Contact easy, raise awareness.

## Stack (decided, do not swap)
- Next.js App Router, TypeScript strict, static export (`output: 'export'`)
- Plain CSS: global `app/tokens.css` plus CSS Modules per component. **No Tailwind** (v4 needs Chrome 111+ / Safari 16.4+, which excludes older Android phones this audience uses).
- Content lives in `/content` (JSON and MDX). Components never hard-code copy.
- Fonts through `next/font`, self-hosted, `display: swap`. Poppins only. Brittany Signature is optional, with Georgia italic fallback.
- Every new dependency needs a one-line justification with its gzipped size. **Banned:** map tile libraries (Leaflet, Mapbox, Google Maps), carousel libraries, animation libraries (Framer Motion, GSAP), whole icon packs. Use inline SVG.

## Brand tokens (from the brand kit, corrected, see spec section 2)
```
--forest: #3C6A3F   primary: buttons, headings, wordmark
--olive:  #79A25A   accent fills and graphics ONLY, never text, never white text on it
--navy:   #123B65   body text, dark bands, footer
--azure:  #055C9D   links, dividers, chart series, focus ring
--mint:   #D5E9E3   calm background panels
--white:  #FFFFFF
--forest-hover: #315734   --navy-hover: #0F3053   --azure-hover: #044B81
```
- Balance: about 60% white and mint, 30% forest and navy, 10% olive and azure.
- Do NOT use the orange from the 2026 portfolio deck. It is not in the brand kit.
- Text is left-aligned. Sentence case everywhere. No all-caps labels.

## Non-negotiables
**Accessibility (WCAG 2.2 AA minimum)**
- Body text 18px, never below 16px. Captions never below 14px. Line length 45 to 70 characters.
- Tap targets at least 48 x 48px. Visible text labels on every button and link. No icon-only controls.
- Visible keyboard focus on everything (3px azure ring, 2px offset; on dark backgrounds use mint).
- Links are underlined in body copy. Colour is never the only signal.
- Respect `prefers-reduced-motion`. No autoplay, no auto-advancing carousels.
- Every image has real alt text, or `alt=""` if decorative. Forms have labels, error text tied with `aria-describedby`, and an `aria-live` status.
- No hover-only menus. Navigation must work by keyboard and touch.

**Performance (budgets, check with `next build` output and Lighthouse mobile, Slow 4G)**
- LCP under 2.5s. CLS under 0.1. First-load JS under 150 KB gzipped per route.
- Hero image under 90 KB on mobile (AVIF or WebP, `priority`). Everything below the fold is lazy.
- Always set `width` and `height` on images. No layout shift.
- The map is inline SVG, no tiles, no map library. YouTube uses a click-to-load facade.

**Browsers**: last 2 versions of Chrome, Edge, Firefox, Safari (macOS and iOS), plus Samsung Internet and Android Chrome 100+. Do not rely on `color-mix()`, `:has()`, or container queries without a fallback.

## Design rules (this is not a template site)
- No eyebrow labels above headings. No `01 / 02 / 03` numbering unless the content really is a sequence.
- No row of identical rounded cards with identical shadows. Layout varies by content type (spec section 3).
- No gradient washes, no glassmorphism, no emoji as icons, no stock photos.
- No scroll-triggered fade-ups. Motion only answers a user action, plus one hero moment.
- Radius follows role (spec section 3). Do not apply one radius to everything.
- Copy is plain, specific and short. Banned words: empower, leverage, impactful, holistic, passionate, synergy.

## Content rules
- EHCO supplies real content later. Use placeholders now, and mark every one `TODO(EHCO)` in the content file.
- The name is spelled **Environmental** in all text. The brand kit logo artwork misspells it ("Envionmental"). Never typeset that spelling. Use the logo as an image and write the name in HTML text.
- Do not invent statistics, quotes, registration numbers or donation details. Use the seed data in the spec, flagged `unverified`.
- Photos of children: no names, generic alt text, and a `TODO(EHCO): consent confirmed` flag on each file.

## Workflow
- One phase per task (spec section 8). Start in Planning mode, show the plan, then build.
- After each phase: run `npm run build`, `npm run lint`, `npm run a11y`, and take screenshots at 390, 820 and 1440px wide. Fix before moving on.
- Commit after every phase with a message that names the phase.
- If the spec and the brand kit disagree, the spec's corrected values win. If the spec is silent, ask. Do not guess.
