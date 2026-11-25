# EHCO Website Deliverables & Architectural Summary

## 1. Design Concept (5 Sentences)

EHCO's model is a community multiplier: one trained student teaches a class, and that class reaches entire households. Concentric ripples symbolize this dynamic and are applied with deliberate restraint in exactly two key touchpoints: the circular hero photo and the results map pins. Circles represent people, while straight hairlines and ledger typography evoke the careful measurement of grams in student plastic audits. The palette alternates calm white and glacier mint bands, punctuated by forest green headings and classic navy body copy. The overall experience feels authentic, grounded, and purpose-built for community trust rather than a generic non-profit template.

---

## 2. Brand Kit & Data Corrections Applied (Spec Section 2)

1. **Classic Navy Value**: Corrected from `#203B46` to `#123B65` to match the physical swatch, RGB, and CMYK values.
2. **Glacier Mint**: Standardized to `#D5E9E3` based on official brand kit swatches.
3. **Contrast-Failing Olive Green**: Olive (`#79A25A`) fails WCAG AA text contrast (2.95:1 on white/olive). It has been strictly confined to decorative graphics, ring strokes, and badge accents—never for readable text.
4. **Tagline Typographic Treatment**: Swapped olive text for Glacier Mint text over a deep Forest Green band (4.99:1 ratio), rendered in Georgia italic fallback for Brittany Signature.
5. **Logo Spelling Fix**: The wordmark misspelling ("Envionmental") in legacy artwork is avoided in all live HTML text, typeset correctly as **Environmental Healthcare Organization**.
6. **No Terracotta Orange**: Discarded the unauthorized orange from the 2026 pitch deck, adhering strictly to the official green, navy, and mint brand kit.
7. **Single-side Editorial Layouts**: Project listings follow consistent editorial rows with left-aligned imagery rather than alternating zig-zag cards.

---

## 3. Technology & Architecture Decisions

- **Framework**: React 19 + Vite with full code-splitting and lazy-loaded routes across all 22 pages.
- **Styling**: Tailwind CSS v4 custom `@theme` configuration mapping custom brand tokens (`forest`, `navy`, `azure`, `mint`, `olive`, `hairline`) without generic Tailwind colors.
- **Iconography**: Clean, inline, scalable SVGs rather than bulky external icon libraries.
- **Mapping**: Inline SVG schematic of Lahore and the Ravi river under 5 KB, bypassing heavy tile libraries (Leaflet/Mapbox) to save data on slow 4G connections.
- **Video Facade**: Click-to-load YouTube facade that downloads zero third-party scripts or iframes until activated by the user.
- **Forms**: Fully accessible forms with `aria-describedby` error linkages, `aria-live` status regions, honeypot spam protection, and direct WhatsApp alternative CTAs.

---

## 4. Open Questions for EHCO (Spec Section 10)

1. **Vector Logo**: Can you provide an updated vector SVG of the circular logo with "Environmental" spelled correctly?
2. **Typography Licence**: Does EHCO hold a web license for Brittany Signature, or should we continue with the Georgia italic fallback?
3. **Team Roster & Roles**: Can you confirm the final titles for each team member (e.g. Sania Asim: Vice Chairperson vs. Executive Assistant) and provide the missing second half of Hamra Imran's bio?
4. **Data Definitions**: How are the 968 people reached, 10 projects, 8 schools, and 9 countries quantified?
5. **Plastic Audit Specifics**: Where was Plastic Audit Phase 1 held, and which school campus ran Phase 2? Is 35.7 g measured per person per day?
6. **Consent for Photography**: Is signed parental consent on file for the school children depicted in workshop photos?
7. **Payment Channels & NGO Number**: What are the verified NGO registration numbers and account credentials for bank transfer, JazzCash, and Easypaisa?
8. **Collaborator Confirmations**: Have all listed collaborators (Bargad, Al-Khidmat, FDI, Virsapur, I-CAN, Pencrest, Ravi Bachao Tehreek, YOUNGO) formally approved website placement?
9. **Urdu Localization**: Is an Urdu (RTL) localized version planned for future phases?
10. **Eco Shop Commerce**: Will Eco Shop products continue via WhatsApp inquiries or will an online checkout gateway be required in the future?
