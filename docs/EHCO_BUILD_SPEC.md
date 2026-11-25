# EHCO website: design and build spec

Built from three sources: the design brief (Task 1), the EHCO brand kit, and the EHCO Portfolio 2026 deck.
Task deadline: Friday 20 November 2026. Deliverables: wireframes for key pages, plus high-fidelity layouts for desktop, tablet and mobile.

**Using this file in Antigravity**
1. Project root gets `AGENTS.md`. This file goes in `docs/EHCO_BUILD_SPEC.md`. Put the source PDFs, the docx, the logos and the photos in `assets-source/`.
2. Open the folder in Antigravity. Work in Planning mode. Paste one phase prompt from section 8 at a time.
3. Read the Plan artifact before approving. After the build, check the Screenshots and Browser Recording artifacts before you paste the next phase.

---

## 1. The brief, decoded

| Item | What it means for the build |
|---|---|
| Goal | Build trust first. Then make it easy to contact, donate, and join a program. Awareness comes third. |
| Audience | Community members, partners, donors. Mobile-first, simple to read, fast on slow connections, comfortable for older users. |
| Tone | Calm, clean, trustworthy, natural. |
| Structure | Five groups: Who we are, What we do, Our impact, Eco Shop, Get involved. |
| Team cards | Open to show more when "Read more" is selected. |
| Results | Presented as a map and key numbers. |
| Stack | Not decided in the brief. We decide: Next.js static export, plain CSS (section 3.9). |
| Technical | Fully responsive, WCAG, fast load, all major browsers. |
| Content | EHCO supplies text, images, icons later. Placeholders now. |
| Not in the brief but implied | A Donate page. The goal names donating, but the site structure has no page for it. We add `/donate`. |

---

## 2. What the three files tell us, and what we correct

### 2.1 Brand kit problems (fix before building)

| Problem | Decision |
|---|---|
| Classic Navy is listed as `#203B46`, but its RGB (18, 59, 101) and the swatch are a blue navy. The two disagree. | Use **`#123B65`**. It matches the RGB, the CMYK and the swatch. |
| Glacier Mint is listed as `#D5E9E3`, but its RGB (194, 222, 176) is a light green. | Use **`#D5E9E3`**. It matches the swatch. |
| The balance note mentions "Soft Sage", "Leaf Green" and "Water Blue". None exist in the palette. | Read them as Glacier Mint, Olive Green and Vivid Azure. |
| Olive `#79A25A` fails contrast. White on olive is 2.95:1. Olive on white is 2.95:1. That fails even large text. | Olive is a fill for graphics and bands only. Never text on white. Never white text on olive. Navy text on olive (3.88:1) is allowed at 24px or larger only. |
| The kit says to use olive for "the tagline". | Set the tagline in mint on forest (4.99:1) instead. |
| Brittany Signature is a commercial script font. Web use needs a licence. | Ship Georgia italic as the fallback. Add Brittany only if EHCO has a web licence. Used once, in the footer band (section 3.4). |
| The logo artwork and the vertical lockup spell "Envionmental". | Never typeset that spelling. Show the logo as an image. Write the name as text in HTML. Ask EHCO for corrected SVG logo files. |
| The portfolio deck is built on terracotta orange. The brand kit has no orange. | The brief says follow the brand kit. Drop the orange entirely. |

### 2.2 Contrast table (computed, WCAG 2.2)

| Pair | Ratio | Use |
|---|---|---|
| Navy on white | 11.42 | Body text |
| Navy on mint | 9.02 | Text on panels |
| White on forest | 6.31 | Buttons |
| White on azure | 6.94 | Secondary buttons |
| Azure on white | 6.94 | Links |
| Azure on mint | 5.49 | Links on panels |
| Forest on white | 6.31 | Headings |
| Forest on mint | 4.99 | Headings on panels, OK for AA |
| Mint on forest | 4.99 | Footer tagline |
| Mint on navy | 9.02 | Text on dark bands |
| Olive on navy | 3.88 | Graphics only, large text at most |
| Olive on white | 2.95 | **Fails. Do not use for text or required UI.** |
| Forest on olive | 2.14 | **Fails.** |

Hover shades are the same hue, 18% darker: forest `#315734`, navy `#0F3053`, azure `#044B81`.

### 2.3 Content problems in the portfolio (flag, do not silently copy)

- **Team titles disagree.** The "Meet our team" slides and the VCOP screenshot give different roles for the same people (for example Sania Asim: Vice Chairperson vs Executive Assistant). Use the "Meet our team" titles and confirm with EHCO.
- **Hamra Imran's bio stops mid-sentence** ("With a passion for sustainable solutions,"). Needs a full bio.
- **Impact numbers cannot be checked.** 968 people, 10 projects, 8 schools, 9 countries. The deck lists about 11 finished activities plus 4 ongoing projects, so "10" needs a definition. The 9 countries are not named. Show them as "unverified" in content files and put a "How we count this" note next to them.
- **Plastic Audit Phase 1** is labelled "Lahore Fort · June 2025", copied from the World Environment Day slide. The photos show an online closing ceremony. Treat it as online.
- **Phase 2 school** is called "SWAT School", with a crest reading "SPS". Location unknown. Do not pin it on the map.
- **Podcast "Online reach ∞"** is not a number. Drop it. The YouTube screenshot shows 43 subscribers and 23 videos. Use those only if EHCO confirms they are current.
- **Progress percentages** (80%, 50%, 40%) mean little to donors. Show "In progress" with a plain sentence. Keep `progress` in the data as optional.
- **Typos in the source** ("Methodolgy", "Particpants", "Samnabad", "Verrticle"): fix in copy.
- **Photos of children** appear throughout. Get consent for web use. No names. Generic alt text.

### 2.4 What the sources do not cover (placeholder, flagged `TODO(EHCO)`)

Our policies. Our expertise. Services and topics. Strategic plan and annual agenda. Blog posts. Reports and publications. Stories (write from the project data, then ask EHCO for quotes). Eco Shop products. Donation methods. Registration or NGO status. A new idea worth using: **Eco-Pots** (upcycled paper planters, "80% completed" in the deck) is the natural first product for the Eco Shop.

---

## 3. Design direction

### 3.1 Concept: ripples

EHCO's method is a multiplier. One trained student teaches a class. A class reaches a household. The flood programme says it outright: "multiplier training model". The logo is a circle. Water is the brand's second colour. So the design idea is **concentric rings**.

Rings are used in exactly two places, and each one means something:
1. **The hero.** The photo is cropped to a circle with thin rings behind it. They draw once on load.
2. **The results map.** Each pin is a ring. Ring size shows how many people were at that event.

Everywhere else the site is quiet. **Spend the boldness in the map.** It is the memorable thing.

### 3.2 Shape language

- **Circles mean people.** Team portraits, hero photo, map pins.
- **Straight hairlines mean measurement.** EHCO's signature activity is the plastic audit, where people count grams. So numbers appear as a **ledger**: a big figure on the left, a plain sentence on the right, hairline rules between rows. It is not a stat band, not a row of glowing counters.

### 3.3 Colour use

White and mint alternate as page bands. Forest is for buttons and headings. Navy is for body text, and for exactly two dark bands: the Get involved block on the home page and the footer. Azure is for links, rules, the focus ring and the ring strokes. Olive is only a fill: ring strokes, map land tint, chart bars.

| Token | Hex | Role |
|---|---|---|
| `--forest` | `#3C6A3F` | Primary buttons, headings, wordmark |
| `--olive` | `#79A25A` | Graphic fills, ring strokes |
| `--navy` | `#123B65` | Body text, dark bands |
| `--azure` | `#055C9D` | Links, rules, focus ring |
| `--mint` | `#D5E9E3` | Panel and band backgrounds |
| `--white` | `#FFFFFF` | Page background |
| `--hairline` | `#C5D8D2` | Decorative dividers only (never as the only boundary of a control) |

Form fields and buttons get a 1.5px navy border. They need 3:1 against the background.

### 3.4 Typography

Poppins carries everything. It is the brand's choice and one family keeps the page light.

| Role | Poppins weight | Mobile | Desktop | Line height |
|---|---|---|---|---|
| Display (home hero only) | 700 | 36px | 60px | 1.1 |
| H1 | 700 | 32px | 42px | 1.15 |
| H2 | 600 | 24px | 32px | 1.2 |
| H3 | 500 | 20px | 24px | 1.3 |
| Body | 400 | 18px | 18px | 1.65 |
| Caption | 400 | 14px | 14px | 1.5 |
| Button | 600 | 16px | 16px | 1 |

Use fluid `clamp()` between the mobile and desktop sizes. Headings get `letter-spacing: -0.01em` and `text-wrap: balance`. Body gets `max-width: 65ch` and `text-wrap: pretty`. Load only weights 400, 500, 600, 700, Latin subset.

**Brittany Signature:** one use only. The footer band reads "Grow, Adapt, Sustain" in Brittany (or Georgia italic) at 32px, mint on forest. Not in paragraphs, not in capitals, never below 22px.

The brief's web sizes (title 42px, H1 32px) are met on desktop. We go larger only for the home hero, and 18px body is above the kit's 16px floor on purpose, for older readers.

### 3.5 Layout

- Grid: 4 columns on mobile, 8 on tablet, 12 on desktop. Max content width 1200px.
- Side padding: 20px mobile, 32px tablet, 48px desktop.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Section padding 64px mobile, 96px desktop.
- Breakpoints: 600px (tablet), 1024px (desktop). Design widths for deliverables: **390, 820, 1440**.
- Text is left-aligned. Asymmetric layouts: text takes 7 columns, image 5, with space left empty on purpose.
- Radius follows role: buttons and fields 8px, photos 12px, mint panels 20px, portraits and pins 50%. Nothing else.

### 3.6 Layout varies by content, not by template

| Content | Treatment |
|---|---|
| Team | Circular portraits. The chairperson and founder gets a wide row. The other six sit in a 3-column grid (2 on tablet, 1 on mobile). |
| Projects | Editorial rows. Photo on the left (5 columns), text on the right (7). Same side on every row, no zigzag. A fact line under the title lists place, date, people. Hairlines between rows. |
| Stories | One large feature, then a plain list. |
| Numbers | The ledger (3.2). |
| Partners | A logo wall: equal-height white tiles, no borders, no hover effects. |
| Get involved | Three panels with unequal weight. Donate is the largest. |
| Reports | A table-like list: title, year, file size, Download button. |

### 3.7 Motion (one moment plus responses)

- **Hero rings** draw once with `stroke-dashoffset`, 1.2s, 150ms stagger. With reduced motion they are static.
- **Responses to an action only:** the team card opening, a map pin being selected (ring fills navy), a form confirming. 200ms ease-out.
- Nothing animates on scroll. Nothing hovers up or glows.

### 3.8 Imagery

- Real EHCO photos, natural colour, no filters. Crops: 3:2 and 4:3. The hero is a circle.
- No stock photography. Until real files arrive, use a mint block with an aspect ratio and `TODO(EHCO)` alt text.
- Export AVIF and WebP with `srcset`. The longest edge is 1600px.
- Icons are inline SVG, 24px, stroke 1.75px, always next to a text label.

### 3.9 Stack decision

Next.js App Router, TypeScript, static export, CSS Modules plus a `tokens.css`. Deploy on Vercel, Netlify or Cloudflare Pages. No server needed.

**Why no Tailwind:** Tailwind v4 needs Chrome 111+, Safari 16.4+ and Firefox 128+. Many phones in this audience are older. Plain CSS reaches them and ships less.
**Why no map library:** tiles are heavy and slow on weak connections. An inline SVG map is under 40 KB and needs no JavaScript to read.
**Forms:** there is no backend. Forms post to an endpoint set in `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree, Netlify Forms or a Cloudflare Worker). Build the UI and validation now.

### 3.10 Copy voice

Sentence case. Plain verbs. Specific numbers. Short. A button says what happens: "Join a program", "Send message", not "Submit". Errors say what went wrong and how to fix it, and never apologise.

The portfolio is full of phrases like "empowering young minds". Rewrite them as what actually happened: "Students ran 3 hands-on activities on waste sorting and cutting plastic."

---

## 4. Information architecture

### 4.1 Navigation (labels are the brief's words)

```
Who we are        About us · Meet our team · Our partners
What we do        Our expertise · Our services and topics · Strategic plan and annual agenda
Our impact        Projects · Stories · Results · Blogs · Reports and publications
Eco Shop          (single page)
Get involved      Become a member · Why work for EHCO · Partner with us · Contact us
[ Donate ]        always visible, forest button
```

### 4.2 Routes

| Route | Page | Priority |
|---|---|---|
| `/` | Home | Key |
| `/about` | Our story, mission, vision, core values, policies | Key |
| `/about/team` | Meet our team | Key |
| `/about/partners` | Our partners | Standard |
| `/what-we-do/expertise` | Our expertise | Standard |
| `/what-we-do/services` | Our services and topics | Standard |
| `/what-we-do/strategy` | Strategic plan and annual agenda | Standard |
| `/impact/projects` | Project list | Key |
| `/impact/projects/[slug]` | Project detail | Key |
| `/impact/stories` and `/[slug]` | Stories | Standard |
| `/impact/results` | Map and key numbers | Key |
| `/impact/blog` and `/[slug]` | Blogs | Standard |
| `/impact/reports` | Reports and publications | Standard |
| `/shop` and `/shop/[slug]` | Eco Shop | Key |
| `/get-involved` | Hub with the three paths | Key |
| `/get-involved/membership` | Become a member | Standard |
| `/get-involved/careers` | Why work for EHCO | Standard |
| `/get-involved/partner` | Partner with us | Standard |
| `/contact` | Contact us | Key |
| `/donate` | Donate (added) | Key |
| `/404` | Not found, with search-free helpful links | Standard |

"Key" pages get wireframes and hi-fi layouts at three widths. "Standard" pages reuse the same components and are built, but not wireframed separately.

### 4.3 Header, footer, wayfinding

- **Header:** logo and name on the left, five nav groups, Donate button. Sticky, 64px tall.
- **Desktop nav:** each group is a button with `aria-expanded` that opens a short list on click or Enter. No hover-only behaviour.
- **Mobile nav:** a button with the visible word "Menu". It opens a full-screen sheet. Groups are accordions. Donate is pinned at the bottom of the sheet.
- **Breadcrumbs** on every page below the first level.
- **Skip link** to main content, first in tab order.
- **Footer:** contact block (WhatsApp tap-to-chat, email, Instagram, YouTube, LinkedIn, each with a text label), a sitemap, a placeholder for NGO registration details, then the forest band with the tagline.

---

## 5. Wireframes (key pages)

Annotations are in `[brackets]`. Phase 3 turns these into grey-box HTML boards and PNGs.

### 5.1 Home, desktop 1440

```
+----------------------------------------------------------------------------+
| (logo) EHCO   Who we are v  What we do v  Our impact v  Eco Shop  Get inv v  [Donate]
+----------------------------------------------------------------------------+
| H1 Young people in Lahore are            ( . . . )                          |
|    turning climate awareness             (  PHOTO  )   [circle crop,        |
|    into action.                          ( . . . )      rings behind]       |
|                                                                             |
| Sub: EHCO trains students and youth in practical climate skills, from       |
| plastic audits to flood preparedness, then helps them teach others.         |
| [Join a program]  [Donate]                                                  |
| Women- and youth-led, based in Lahore, working with schools since 2024.     |
+----------------------------------------------------------------------------+
| [mint band] H2 What we do                                                   |
|  Climate education in schools    -------------------------------- photo    |
|  Plastic and waste               [4 rows: title, 2 lines, link]    photo    |
|  Flood preparedness              each row links to the services page        |
|  Youth leadership                                                           |
+----------------------------------------------------------------------------+
| H2 Where we have worked                                                     |
|  [ RESULTS MAP: Lahore, ring pins ]            | Selected site panel        |
|  Ledger: 968 people reached ---- 10 projects ---- 8 schools ---- 9 online   |
|  [See all results]                                                          |
+----------------------------------------------------------------------------+
| [mint band] Featured project: Plastic Audit                                 |
|  Photo (5 col)  | H2 103 people signed up. 42 tracked their plastic daily.  |
|                 | Fact line + [Read the project]                            |
+----------------------------------------------------------------------------+
| [navy band] H2 Get involved                                                 |
|  +---------- Donate (large) ----------+  +-- Become a member --+            |
|  | what a donation does, [Donate]     |  +-- Partner with us --+            |
|  +------------------------------------+                                     |
+----------------------------------------------------------------------------+
| Partners: logo wall (6 to 8 tiles)                                          |
+----------------------------------------------------------------------------+
| Latest: 1 blog post (left)  |  1 report with [Download] (right)             |
+----------------------------------------------------------------------------+
| [forest band] Grow, Adapt, Sustain (Brittany)                               |
| Footer                                                                      |
+----------------------------------------------------------------------------+
```

### 5.2 Home, mobile 390

```
+--------------------+
| (logo)  [Donate] [Menu]
+--------------------+
| H1 (36px, 3 lines) |
| sub text           |
| ( photo circle )   |
| [Join a program]   |  [full-width, 56px tall]
| [Donate]           |
| trust line         |
+--------------------+
| What we do (list)  |
| Map (square) then  |
|   site list below  |
| Ledger, stacked    |
| Featured project   |
| Get involved: Donate first, then two stacked
| Partners 2 x 4     |
| Latest             |
| Tagline band, footer
+--------------------+
```

### 5.3 Meet our team, desktop

```
| Breadcrumb: Who we are / Meet our team                                     |
| H1 Meet our team                                                           |
| Intro, 2 lines                                                             |
|---------------------------------------------------------------------------|
| (portrait)  Laiba Nadeem, Chairperson and founder        [wide row]        |
|  circle     2 to 3 line bio                              [Read more v]     |
|---------------------------------------------------------------------------|
| (circle)       (circle)       (circle)                                    |
| Sania Asim     Amna Ahmad     Hamra Imran     [align-items: start so an    |
| Vice Chair     Gen. Secretary Asst. Secretary  open card does not stretch  |
| 1 line         1 line         1 line           its neighbours]            |
| [Read more v]  [Read more v]  [Read more v]                               |
| (circle)       (circle)       (circle)                                    |
| Noor Fatima    Amna Maheen    Eshal Zainab                                |
```
Read more: a button, `aria-expanded`, `aria-controls`. The card grows in place and shows the full bio. The label flips to "Show less". Several cards can be open. No modal. It works on touch and keyboard, and a modal would be harder for older users.

### 5.4 Results, desktop

```
| H1 Results                                                                 |
| One sentence: what the rings mean.                                         |
| +-------------------------------------------+ +-------------------------+ |
| | [Pakistan inset: Lahore marked]           | | Selected: Lahore Fort    | |
| |                                           | | World Environment Day    | |
| |      Lahore schematic, Ravi in azure      | | June 2025                | |
| |        ( )  ring pins sized by people     | | 40+ people               | |
| |      ( )     ( )                          | | [View project]           | |
| | Legend: ring size = people at the event   | |                          | |
| +-------------------------------------------+ +-------------------------+ |
| Table: Place | Date | What we did | People      [same data, accessible]    |
| Online work (not on map): VCOP 2025, Let's Talk Climate, Plastic Audit 1   |
| Ledger: figure | sentence | [How we count this v]                          |
```
Mobile: the map is square and sits above the table. The side panel becomes a bottom sheet under the map. Pins have 44px hit areas.

### 5.5 Contact, mobile 390

```
| H1 Contact us                                |
| Fastest: [Message us on WhatsApp]  (48px+)   |
| Or email: ehc.org.pak@gmail.com (tap)        |
|----------------------------------------------|
| Name *            [____________]             |
| Email *           [____________]             |
| Phone (optional)  [____________]             |
| I'm writing about [ Select v ]  (donating,   |
|                    joining, partnering, shop,|
|                    media, other)             |
| Message *         [____________]             |
| [Send message]                               |
| We reply within TODO(EHCO) working days.     |
|----------------------------------------------|
| Instagram, YouTube, LinkedIn (text links)    |
```
Required fields marked with the word "required", not only an asterisk. Errors appear under each field in text, and a summary is announced in an `aria-live` region.

### 5.6 Project detail, desktop

```
| Breadcrumb: Our impact / Projects / Plastic Audit Workshop                 |
| H1 Plastic Audit Workshop, Phase 1                                         |
| Fact line: Online · July 2025 · 103 signed up                              |
| Hero photo (full content width, 3:2)                                       |
| Body, 65ch, left (7 col)            | Facts panel (4 col, mint)            |
|  What happened                      |  Place, date, partners, goals (SDGs) |
|  How it worked (steps: real sequence| [Share]                              |
|    so numbered steps are OK here)   |                                      |
|  What we learned                    |                                      |
| Next / previous project                                                    |
```

### 5.7 Eco Shop and Donate

- **Eco Shop:** intro line, then a product grid (2 columns on mobile, 3 on desktop). First product is Eco-Pots, tagged "Coming soon" if not on sale. Each product page shows photos, what it is made from, price (`TODO(EHCO)`), and an **Enquire on WhatsApp** button. No cart and no checkout, because there is no backend.
- **Donate:** one-line promise, amount choices (placeholders, `TODO(EHCO)`), payment methods listed plainly (bank transfer, JazzCash, Easypaisa: all `TODO(EHCO)`), "What your donation does" (3 plain lines), NGO registration details, a contact line for questions. Do not invent donation figures or registration numbers.

---

## 6. Components

| Component | Behaviour and accessibility |
|---|---|
| `SiteHeader`, `NavGroup`, `MobileSheet` | Disclosure buttons with `aria-expanded`. Esc closes. Focus returns to the trigger. Sheet traps focus while open. |
| `Button` | Variants: primary (forest), secondary (navy outline), quiet (azure text, underlined). Min height 48px. One `<a>` or `<button>` only. |
| `Hero` | Home only. Circle photo `priority`. `RippleRings` SVG, `aria-hidden`. |
| `RippleRings` | Three circles. Draw-in animation. Static under reduced motion. Clipped so it never causes sideways scroll. |
| `TeamCard` | Portrait circle, name, role, one line. Read more toggles the full bio in place. |
| `ProjectRow` | Photo, title, fact line (`<dl>`), summary, link. |
| `FactLine` | Place, date, people. Plain text, no icons. |
| `Ledger` | `<dl>` rows. Big figure, sentence, optional "How we count this" disclosure. |
| `ResultsMap` | Inline SVG. Pins are `<button>`s in the same order as the table. Selected pin fills navy. A visible legend explains ring size. |
| `ResultsTable` | Real `<table>` with caption. The accessible twin of the map. |
| `PartnerWall` | Equal tiles, `alt` = partner name. |
| `GetInvolvedPanels` | Unequal weights. Donate first. |
| `Form`, `Field`, `Select`, `Textarea` | Visible labels. Errors tied by `aria-describedby`. Honeypot field. Success message in `aria-live`. |
| `YouTubeFacade` | Thumbnail plus a Play button. The iframe loads only after click. |
| `Breadcrumbs`, `SkipLink`, `Footer`, `TaglineBand` | Standard. |
| `PlaceholderBadge` | Dev-only marker on any content flagged `TODO(EHCO)`. Never shown in production. |

---

## 7. Content model and seed data

### 7.1 Files

```
content/
  site.json            name, tagline, contact, socials
  team.json            members
  partners.json        name, logo, url, note
  projects/*.mdx       frontmatter + body
  sites.json           map sites: slug, name, lat, lng, people, date, projectSlug
  stories/*.mdx   blog/*.mdx
  reports.json         title, year, file, sizeKB
  products.json        slug, name, status, price, images
  pages/*.mdx          about, expertise, services, strategy, policies
```
Every record has `unverified: boolean` and `todo: string[]`. A script `npm run content:todo` lists all `TODO(EHCO)` items.

### 7.2 Site facts (from the deck)

- Name: Environmental Healthcare Organization (EHCO). Tagline: *Grow, Adapt, Sustain.*
- Self-description: women-led, youth-led, Lahore, working since 2024.
- Contact: ehc.org.pak@gmail.com · WhatsApp +92 328 8058732 · Instagram @ehc.org.pak · YouTube @EHCOofficial · LinkedIn "Environmental HealthCare Organization" (URL needed).
- Mission, vision and values text: use the deck's, tightened. Core values: Inclusion and quality education; Innovation and collaboration; Resilience and sustainability.
- Method: school and camp visits with hands-on activities, collaboration with schools, NGOs and community groups, digital outreach, equal involvement of girls and marginalised groups.
- Framing line: Pakistan is one of the 10 most climate-vulnerable countries (the deck's claim. Add a source before publishing.)

### 7.3 Team (titles from "Meet our team", confirm)

| Name | Title | Notes |
|---|---|---|
| Laiba Nadeem | Chairperson, founder | Deck calls her founder |
| Sania Asim | Vice Chairperson | |
| Amna Ahmad | General Secretary | |
| Hamra Imran | Assistant Secretary | Bio incomplete |
| Noor Fatima | Executive Director | |
| Amna Maheen | Program Coordinator | |
| Eshal Zainab | M&E Officer | |

Seed bios from the deck are generic. Keep one line each as placeholders and ask for real ones.

### 7.4 Projects (all `unverified: true`)

| Slug | Place | When | Numbers | Notes |
|---|---|---|---|---|
| samanabad-school-session | Samanabad, Lahore | 2025 | 3 classes, 3 activities | Waste sorting, cutting plastic, DIY air-quality kits |
| alkhidmat-flood-camp | Chung, Lahore | 2025 floods | 50+ children | Partner: Al-Khidmat Foundation |
| flood-kits-bargad-fdi | Lahore | April 2025 | 200 kits, 2 partners | Partners: Bargad, FDI |
| vcop-2025 | Online | 2025 | 15 participants | Virtual COP, YOUNGO |
| ehsas-e-zameen-fellowship | 3 schools | Ramadan 2025 | about 100 students, 4 activities | Energy and water saving, plastic, seed planting |
| lets-talk-climate-podcast | Online | 2025 | 2 series, 10 topics | YouTube |
| earth-day-gathering | Lawrence Garden, Lahore | April 2025 | 11 people | Community picnic |
| world-environment-day | Lahore Fort | June 2025 | 40+ people | Heritage and footprint pledges |
| plastic-audit-phase-1 | Online | July 2025 | 103 signed up, 42 daily auditors, 35.7 g average per day (confirm: per person?) | Ages 16 to 25, 7 days |
| plastic-audit-phase-2 | A school with 3 campuses | 2025 | 480+ signed up, 93 daily auditors | 20 days, students turned plastic into products |
| world-migratory-bird-day | Kamran Baradari, Lahore | October 2026 | 18 people | With Ravi Bachao Tehreek, speaker Dr. Atif Yaqub (GCU Lahore) |

**In progress:** Eco-Pots (upcycled paper planters), Climate-Integrated Curriculum Guidebook (flagship, for government schools, Single National Curriculum), Green Skills (links artisan producers to green brands), Flood Resilient Lahore (submitted to the APFM Global Integrated Flood and Drought Management Competition for Youth-Led Projects 2026). **Volunteer programme:** EHCO Ignite 2026, in onboarding.

### 7.5 Map sites (approximate coordinates, verify before launch)

| Site | Lat, Lng | People |
|---|---|---|
| Lahore Fort | 31.589, 74.315 | 40 |
| Kamran Baradari | 31.620, 74.301 | 18 |
| Lawrence Garden | 31.555, 74.329 | 11 |
| Samanabad | 31.535, 74.297 | unknown (min size) |
| Chung | 31.420, 74.205 | 50 |

Online work and sites with unknown locations are listed under the map, not pinned. Ring radius = `8 + 2.2 * sqrt(people)` px, capped at 36. Unknown = 10px.
Draw the base map from **Natural Earth** (public domain): Pakistan outline and the Ravi. Build it once with a dev script and commit the finished SVG. If OpenStreetMap data is used for Lahore detail, add "Map data © OpenStreetMap contributors" under the map.

### 7.6 Partners to show (confirm each has agreed)

From the deck's collaborators slide: Bargad, Virsapur, I-CAN Network, Pencrest, one school crest (unidentified), Ravi Bachao Tehreek. From project slides: Al-Khidmat Foundation, FDI, YOUNGO.

---

## 8. Build phases (paste one at a time)

Each prompt is written for Antigravity. Keep Planning mode on for phases 0 to 3 and 8, and Fast mode is fine for 4 to 7 once the plan looks right.

### Phase 0: setup and reference notes

```
Read AGENTS.md and docs/EHCO_BUILD_SPEC.md sections 1 to 3 and 9. Then:
1. Scaffold Next.js (App Router, TypeScript strict, output: 'export') in this folder. No Tailwind.
2. Add ESLint, Prettier, and an accessibility check script: `npm run a11y` using Playwright + @axe-core/playwright against the built site.
3. Create app/tokens.css with every token from spec 3.3 and 3.4, the 4-8-12 spacing scale, and the radius roles.
4. Add `npm run content:todo` which greps content/ for TODO(EHCO).
5. Open undp.org/careers, wwfpak.org and cop.sifiratikvakfi.org/en/ in the browser. Write docs/reference-notes.md: 5 bullets per site on nav pattern, where Donate sits, how listings are filtered, and one thing NOT to copy. Do not copy any visuals.
6. Extract the logo and photos from assets-source/ into public/ and content/ (sizes, formats per spec 3.8). Do not use the brand kit's misspelled wordmark as text.
Show me the plan first.
```
**Done when:** `npm run build` passes, tokens exist, notes file exists.

### Phase 1: design system

```
Read spec sections 3 and 6. Build the design system and a /styleguide route (noindex):
Button (3 variants), Heading scale, Body text, Link, Container, Section (white, mint, navy, forest variants), Field/Select/Textarea, Breadcrumbs, SkipLink, RippleRings.
Fonts through next/font: Poppins 400/500/600/700, Latin subset. Brittany Signature only if a licensed font file is in assets-source/, otherwise Georgia italic.
Follow the radius roles and contrast rules exactly. Screenshot /styleguide at 390, 820 and 1440 and attach them.
```
**Done when:** every colour pair on the styleguide meets its ratio in section 2.2, focus rings are visible on all variants, and there is no horizontal scroll at 320px.

### Phase 2: shell (header, footer, navigation)

```
Read spec sections 4.1 to 4.3. Build SiteHeader, desktop NavGroup dropdowns (click/Enter disclosure, Esc closes, focus returns), MobileSheet (full screen, accordions, focus trap, Donate pinned at the bottom), Footer and TaglineBand. Use the routes in 4.2 and create empty placeholder pages for each so every link resolves.
Test by keyboard only and at 200% zoom. Attach screenshots of the menu open at 390 and 1440.
```
**Done when:** every nav item is reachable by keyboard, the skip link works, and the sheet closes on Esc and on route change.

### Phase 3: wireframes (first deliverable)

```
Read spec section 5. In deliverables/wireframes/ create one self-contained grey-box HTML board for each key page: Home, About, Team, Results, Project detail, Eco Shop, Contact, Donate. Each board shows mobile (390) and desktop (1440) side by side, real headings, content blocks as grey boxes, and short numbered annotations explaining the UX reason for each block. Export each board to PNG with the browser. No colour except grey and one annotation colour.
```
**Done when:** 8 PNGs exist. **Stop and review them with the design owner before Phase 4.** Changing a wireframe is cheaper than changing a built page.

### Phase 4: home page (hi-fi)

```
Read spec sections 3, 5.1, 5.2 and 7. Build the home page from content/ files, not hard-coded text. Hero with circular photo and RippleRings (draw once, static under reduced motion). Sections in the order of 5.1. Use the ledger, not a stat band. The Get involved block is the first navy band; the footer is the second.
Responsive at 390, 820, 1440. Run build, lint, a11y. Report Lighthouse mobile (Slow 4G) numbers against the budgets in AGENTS.md.
```
**Done when:** LCP under 2.5s on Slow 4G, no layout shift, hero image under 90 KB on mobile.

### Phase 5: Who we are

```
Read spec sections 3.6, 5.3, 7.2, 7.3 and 7.6. Build /about (story, mission and vision, core values, policies as a plain list of documents), /about/team and /about/partners.
Team: the chairperson wide row, then a 3-column grid (2 tablet, 1 mobile). Read more = button with aria-expanded and aria-controls, expands in place, label flips to Show less. align-items: start on the grid.
```
**Done when:** the team grid works with keyboard and screen reader (axe passes), and an open card never stretches its neighbours.

### Phase 6: What we do

```
Read spec sections 2.4, 3.6 and 3.10. Build /what-we-do/expertise, /services and /strategy from content/pages/*.mdx. Content is mostly placeholder: write short, plain, specific placeholder copy based on the project data in 7.4 and flag every paragraph TODO(EHCO). The strategy page shows the annual agenda as a simple dated list, not a chart.
```
**Done when:** every placeholder is flagged and `npm run content:todo` lists them.

### Phase 7: Our impact

```
Read spec sections 3.1, 5.4, 5.6, 7.4 and 7.5. Build:
1. /impact/projects (ProjectRow list) and /impact/projects/[slug] from content/projects/*.mdx using the seed table. Mark ongoing work as "In progress".
2. /impact/results: the ResultsMap (inline SVG, Natural Earth base built by a dev script, committed output under 40 KB), ring pins sized by the formula in 7.5, a real <table> twin, the online-work list, and the Ledger with a "How we count this" disclosure on each figure.
3. /impact/stories, /impact/blog, /impact/reports (list with Download buttons, file size shown).
Pins are buttons in table order. Selecting a pin updates the side panel (desktop) or bottom sheet (mobile) and fills the ring navy. YouTube embeds use the click-to-load facade.
```
**Done when:** the map is fully usable by keyboard, works with JavaScript disabled as a readable table, and the page ships no map library.

### Phase 8: Eco Shop and Donate

```
Read spec section 5.7. Build /shop, /shop/[slug] and /donate. Eco-Pots is the first product, status Coming soon. Enquiries go through a WhatsApp link (wa.me, number from content/site.json). No cart, no checkout. Donate lists payment methods as placeholders and shows an NGO registration block as TODO(EHCO). Do not invent figures or account details.
```
**Done when:** the Donate button in the header reaches /donate from every page, and no placeholder looks like real payment information.

### Phase 9: Get involved and Contact

```
Read spec sections 5.5, 3.10 and 6 (Form). Build /get-involved (hub with three panels), /membership, /careers (Why work for EHCO, with EHCO Ignite 2026 as the current volunteer programme), /partner and /contact.
Forms: native validation plus accessible custom messages, visible labels, aria-describedby errors, an aria-live status region, a honeypot field, and submission to NEXT_PUBLIC_FORM_ENDPOINT. Show a clear success and failure state. Test with the keyboard only and with a screen reader pass.
```
**Done when:** an invalid form announces the error summary, and a failed network request leaves the user's text in place.

### Phase 10: hardening

```
Run a full audit and fix everything:
- axe on every route; manual keyboard pass; 200% and 400% zoom; 320px width.
- Lighthouse mobile (Slow 4G) on Home, Results, Team, Project detail. Hit the budgets in AGENTS.md.
- Browser pass: Chrome, Firefox, Safari, Edge, plus an Android Chrome emulation. Log anything that breaks.
- Add metadata, Open Graph, sitemap.xml, robots.txt, favicon from the icon logo, and Organization JSON-LD from content/site.json.
- Add a custom 404 with links to the five groups.
Write docs/qa-report.md with results and what remains.
```

### Phase 11: deliverables

```
Create deliverables/hi-fi/ with full-page screenshots of Home, About, Team, Results, Project detail, Eco Shop, Contact and Donate at 1440, 820 and 390 widths (24 images, named page-width.png). Write deliverables/README.md: the design concept in 5 sentences, the corrections from spec section 2, the stack decision, and the open questions from spec section 10.
```

---

## 9. QA checklist

**Accessibility**
- [ ] axe passes on every route
- [ ] Every action reachable and usable by keyboard, in a logical order
- [ ] Focus ring visible on light and dark backgrounds
- [ ] No text under 14px, body 18px
- [ ] All contrast ratios from section 2.2 verified in the built CSS
- [ ] Map has a table twin; table is a real `<table>` with a caption
- [ ] Forms announce errors and success
- [ ] Works at 320px and 400% zoom with no sideways scroll
- [ ] Reduced motion honoured

**Performance (Lighthouse mobile, Slow 4G)**
- [ ] LCP under 2.5s, CLS under 0.1
- [ ] First-load JS under 150 KB gzipped on every route
- [ ] No render-blocking web fonts
- [ ] All images sized, modern formats, lazy below the fold
- [ ] Results map SVG under 40 KB

**Design**
- [ ] No orange anywhere
- [ ] Olive never used as text or behind white text
- [ ] Rings appear only in the hero and on the map
- [ ] No eyebrow labels, no stray numbering, no identical-card grids
- [ ] Brittany or Georgia italic appears once, in the footer band
- [ ] The name is spelled Environmental everywhere

**Content**
- [ ] `npm run content:todo` output sent to EHCO
- [ ] Every statistic marked `unverified` until EHCO confirms
- [ ] Photo consent confirmed for every image of a child

---

## 10. Questions for EHCO

1. Can you send the logo as SVG, with "Environmental" spelled correctly?
2. Do you hold a web licence for Brittany Signature?
3. What are the confirmed titles for each team member, and the full bio for Hamra Imran?
4. How do you define "project" (968 people, 10 projects, 8 schools, 9 countries)? Which countries?
5. Where was Plastic Audit Phase 1 held, and which school and city ran Phase 2? Is 35.7 g per person per day?
6. Is photo consent on file for the children in the school photos?
7. What are your NGO registration details, and which donation methods can you take (bank, JazzCash, Easypaisa)?
8. Which partners have agreed to appear? Who is the school crest in the collaborators slide?
9. Who answers messages sent from the contact form, and within how many working days?
10. Should the site also be available in Urdu? If yes, plan for right-to-left now. Use logical CSS properties (`margin-inline`, `padding-block`) from day one, and budget for a Nastaliq font.
11. Do you want the Eco Shop to take online orders later? That would need a backend and a payment partner.
