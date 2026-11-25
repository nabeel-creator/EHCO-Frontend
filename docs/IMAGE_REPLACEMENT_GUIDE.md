# EHCO Image Placeholder Replacement Guide

This guide catalogs every image placeholder across the redesigned EHCO website.

All placeholders are generated through the unified `<ImagePlaceholder />` component (`src/components/common/ImagePlaceholder.jsx`), which enforces strict aspect ratios, responsive scaling, zero layout shift (CLS < 0.1), and semantic labeling.

To replace any placeholder with a real photograph, simply supply the image file path to the `src` attribute (or update the corresponding record in `/content/*.json`).

---

## 1. Homepage Assets

| Placeholder ID | Location / Component | Required Photograph Description | Aspect Ratio | Recommended Size | Target Source File / Prop |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **`HERO_MAIN`** | Homepage Hero (`src/components/home/Hero.jsx`) | Wide documentary photograph of youth volunteers and students conducting a community plastic audit or environmental workshop outdoors in Lahore under natural sunlight. | **16:9** | 1200 × 675 px (or 1600 × 900) | `src/components/home/Hero.jsx` (`src` prop) |
| **`HERO_VOLUNTEER`** | Homepage Hero Right Column (`src/components/home/Hero.jsx`) | Portrait photograph of an environmental student volunteer holding an air quality test kit outdoors in Lahore, authentic documentary style. | **3:4** | 600 × 800 px | `src/components/home/Hero.jsx` (`src` prop) |
| **`ABOUT_COLLAGE_1`** | Homepage Intro Section (`src/components/home/OrgIntroSection.jsx`) | Hands-on school workshop in Lahore: students sorting recyclable materials and checking air filter cards in a classroom. | **4:5** | 700 × 875 px | `src/components/home/OrgIntroSection.jsx` (`src` prop) |
| **`ABOUT_COLLAGE_2`** | Homepage Intro Section (`src/components/home/OrgIntroSection.jsx`) | Young people planting native tree seeds in an urban community garden in Lahore. | **1:1** | 500 × 500 px | `src/components/home/OrgIntroSection.jsx` (`src` prop) |
| **`PROJECT_FEATURED`** | Homepage Case Studies (`src/components/home/CaseStudiesSection.jsx`) | Documentary photo of the Plastic Audit Phase 1 / Samanabad school session showing students logging plastic waste. | **16:9** | 1200 × 675 px | `src/components/home/CaseStudiesSection.jsx` (`src` prop) |
| **`PROJECT_SUPPORT_1`** | Homepage Case Studies (`src/components/home/CaseStudiesSection.jsx`) | Flood relief camp with Al-Khidmat Foundation in Chung reaching 50+ children. *(Note: Child photo consent confirmed)* | **16:9** | 700 × 394 px | `src/components/home/CaseStudiesSection.jsx` (`src` prop) |
| **`PROJECT_SUPPORT_2`** | Homepage Case Studies (`src/components/home/CaseStudiesSection.jsx`) | 200 flood preparedness kits assembled and distributed in partnership with Bargad and FDI. | **16:9** | 700 × 394 px | `src/components/home/CaseStudiesSection.jsx` (`src` prop) |
| **`ARTICLE_THUMB_1`** | Homepage Editorial (`src/components/home/LatestArticles.jsx`) | Student measuring household plastic packaging on a kitchen scale. | **4:3** | 700 × 525 px | `src/components/home/LatestArticles.jsx` (`src` prop) |
| **`ARTICLE_THUMB_2`** | Homepage Editorial (`src/components/home/LatestArticles.jsx`) | Migratory bird habitat and wetland vegetation along the River Ravi basin. | **4:3** | 700 × 525 px | `src/components/home/LatestArticles.jsx` (`src` prop) |
| **`ARTICLE_THUMB_3`** | Homepage Editorial (`src/components/home/LatestArticles.jsx`) | Cover image of the Plastic Audit 2025 pilot report and data sheets. | **4:3** | 700 × 525 px | `src/components/home/LatestArticles.jsx` (`src` prop) |

---

## 2. Team & Leadership Assets

| Placeholder ID | Location / Component | Required Photograph Description | Aspect Ratio | Recommended Size | Target Source File / Field |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **`TEAM_LAIBA_NADEEM`** | Team Page (`/about/team`) & Homepage | Professional portrait of Chairperson & Founder Laiba Nadeem in Lahore. | **1:1** | 500 × 500 px | `content/team.json` (`image` field) |
| **`TEAM_SANIA_ASIM`** | Team Page (`/about/team`) | Portrait of Vice Chairperson Sania Asim. | **1:1** | 500 × 500 px | `content/team.json` (`image` field) |
| **`TEAM_AMNA_AHMAD`** | Team Page (`/about/team`) | Portrait of General Secretary Amna Ahmad. | **1:1** | 500 × 500 px | `content/team.json` (`image` field) |
| **`TEAM_HAMRA_IMRAN`** | Team Page (`/about/team`) | Portrait of Assistant Secretary Hamra Imran. | **1:1** | 500 × 500 px | `content/team.json` (`image` field) |
| **`TEAM_NOOR_FATIMA`** | Team Page (`/about/team`) | Portrait of Executive Director Noor Fatima. | **1:1** | 500 × 500 px | `content/team.json` (`image` field) |
| **`TEAM_AMNA_MAHEEN`** | Team Page (`/about/team`) | Portrait of Program Coordinator Amna Maheen. | **1:1** | 500 × 500 px | `content/team.json` (`image` field) |
| **`TEAM_ESHAL_ZAINAB`** | Team Page (`/about/team`) | Portrait of M&E Officer Eshal Zainab. | **1:1** | 500 × 500 px | `content/team.json` (`image` field) |

---

## 3. Internal Page Banners & Case Studies

| Placeholder ID | Location / Component | Required Photograph Description | Aspect Ratio | Recommended Size | Target Source File / Field |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **`ABOUT_STORY_IMG`** | About Us (`/about`) | Documentary photograph of EHCO organizers conducting a community environmental audit with youth. | **4:3** | 1000 × 750 px | `src/pages/AboutPage.jsx` |
| **`SERVICES_OVERVIEW`** | Services (`/what-we-do/services`) | Classroom students testing water samples and assembling DIY air quality sensors. | **4:3** | 700 × 525 px | `src/pages/ServicesPage.jsx` |
| **`STORY_FEATURED_IMG`** | Stories (`/impact/stories`) | High school student displaying their 20-day plastic audit weight chart and fabric alternatives. | **4:3** | 700 × 525 px | `src/pages/StoriesPage.jsx` |
| **`PROJ_DETAIL_<SLUG>`** | Project Detail Pages (`/impact/projects/:slug`) | Hero photography capturing the specific initiative (Samanabad session, Al-Khidmat camp, etc.). | **16:9** | 1400 × 788 px | `content/projects.json` (`image` field) |
| **`BLOG_FEATURED`** | Blog Listing (`/impact/blog`) | Wide photo showing students in interactive climate debate. | **16:9** | 1400 × 788 px | `src/pages/BlogPage.jsx` |
| **`PRODUCT_<SLUG>`** | Eco Shop (`/shop` & `/shop/:slug`) | Studio product photography of student-crafted planters, upcycled stationery, or seed packs. | **1:1** | 800 × 800 px | `content/products.json` (`image` field) |

---

## 4. How to Swap In Real Images

Place your WebP or AVIF image files into `public/images/` and pass the path directly to the `src` attribute:

```jsx
<ImagePlaceholder
  id="HERO_MAIN"
  src="/images/hero/hero-main.webp"
  alt="EHCO community plastic audit session in Lahore"
  label="EHCO Community Climate Workshop"
  description="Wide documentary photograph of youth volunteers"
  aspectRatio="16/9"
/>
```

When a valid `src` is passed, `<ImagePlaceholder />` immediately renders an optimized `<img>` element with `object-cover` and zero layout shift.
