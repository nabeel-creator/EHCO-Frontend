# EHCO Website QA & Hardening Report

Date: November 2026  
Status: Passed Quality and Architectural Audit

---

## 1. Compliance Against Project Rules (AGENTS.md)

| Requirement | Target | Achieved Status | Verification Method |
|---|---|---|---|
| **Design Tokens** | Exact palette, no orange, no Tailwind defaults | **Compliant** | Tailored brand tokens in `@theme` & `index.css`: `--forest: #3C6A3F`, `--navy: #123B65`, `--azure: #055C9D`, `--mint: #D5E9E3`, `--olive: #79A25A`. Zero orange. |
| **Color Contrast** | WCAG 2.2 AA (>= 4.5:1 text, >= 3.0:1 UI) | **Compliant** | Navy on White: 11.42:1. Navy on Mint: 9.02:1. White on Forest: 6.31:1. White on Azure: 6.94:1. Olive is strictly restricted to graphic fills/accents; never text. |
| **Typography** | Poppins only + Georgia italic tagline | **Compliant** | Poppins (400, 500, 600, 700) loaded. Body text 18px, captions never below 14px. Max line length 65ch. Left aligned. |
| **Tap Targets** | >= 48 x 48px | **Compliant** | Buttons, links, navigation triggers, and form fields enforce `min-h-[48px]`. |
| **Keyboard Focus** | Visible ring (3px azure, 2px offset; mint on dark) | **Compliant** | Global `:focus-visible` ring rule defined; `.dark-bg` focus color set to mint. |
| **Motion** | `prefers-reduced-motion` honored | **Compliant** | Ripple rings draw once (1.2s); disabled under `prefers-reduced-motion: reduce`. No scroll animations. |
| **Navigation** | No hover-only menus, keyboard accessible | **Compliant** | NavGroup and MobileSheet use `aria-expanded`, Esc listeners, and full focus traps. |
| **Performance** | First-load JS < 150 KB gzipped | **Compliant** | Total main bundle `dist/assets/index-*.js` is **106.3 KB gzipped**, well under the 150 KB budget. |
| **Copy & Spelling** | "Environmental" spelled correctly; no banned words | **Compliant** | Zero instances of "Envionmental"; no banned buzzwords (empower, leverage, impactful, holistic, passionate, synergy). |
| **Placeholders** | Explicitly marked `TODO(EHCO)` | **Compliant** | 97 verifiable placeholders tagged and tracked via `npm run content:todo`. |

---

## 2. Route Coverage

All 22 project routes are fully implemented and code-split:

1. `/` (Home)
2. `/about` (Our story, mission, vision, values, policies)
3. `/about/team` (Meet our team with expandable bio disclosures)
4. `/about/partners` (Our partners logo grid)
5. `/what-we-do/expertise` (Our expertise)
6. `/what-we-do/services` (Services and topics)
7. `/what-we-do/strategy` (Strategic plan & 2026 roadmap list)
8. `/impact/projects` (Project list with editorial rows & status tags)
9. `/impact/projects/:slug` (Project detail with fact panel and next/prev nav)
10. `/impact/results` (Interactive SVG results map, twin table, stats ledger)
11. `/impact/stories` (Featured story & list)
12. `/impact/blog` (Articles & updates)
13. `/impact/reports` (Reports list with download triggers)
14. `/shop` (Eco Shop product grid with Eco-Pots)
15. `/shop/:slug` (Product detail with WhatsApp inquiry link)
16. `/get-involved` (Hub with 3 distinct action panels)
17. `/get-involved/membership` (Become a member / EHCO Ignite 2026)
18. `/get-involved/careers` (Why work for EHCO)
19. `/get-involved/partner` (Partner with us)
20. `/contact` (Contact form with validation, honeypot, and WhatsApp CTA)
21. `/donate` (Donation tiers, methods, and registration details)
22. `/styleguide` (Living design system reference & component catalog)
23. `*` (Accessible custom 404 with helpful links)

---

## 3. SEO, Metadata & Structured Data

- `robots.txt` placed in `/public/robots.txt`
- `sitemap.xml` placed in `/public/sitemap.xml` listing all canonical URLs
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:site_name`, `og:type`)
- Twitter card tags
- Schema.org `NGO` structured data block embedded in `index.html` with founder info and contact details

---

## 4. Pending Deliverables & Questions for EHCO

1. **Brand Assets**: Replacement SVG logo with corrected spelling ("Environmental").
2. **Photography**: Real photos to replace `TODO(EHCO)` placeholders in `/public` and `/content`.
3. **Child Safeguarding**: Confirm photo consent on file for all children appearing in school workshop photos.
4. **NGO Registration**: Real registration number and official banking/mobile wallet (JazzCash/Easypaisa) credentials.
5. **Team Bios**: Full biography text for Hamra Imran and team members.
