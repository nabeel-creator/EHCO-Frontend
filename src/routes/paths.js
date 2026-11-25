export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  TEAM: '/about/team',
  PARTNERS: '/about/partners',
  EXPERTISE: '/what-we-do/expertise',
  SERVICES: '/what-we-do/services',
  STRATEGY: '/what-we-do/strategy',
  PROJECTS: '/impact/projects',
  PROJECT_DETAIL: '/impact/projects/:slug',
  STORIES: '/impact/stories',
  STORY_DETAIL: '/impact/stories/:slug',
  RESULTS: '/impact/results',
  BLOG: '/impact/blog',
  BLOG_DETAIL: '/impact/blog/:slug',
  REPORTS: '/impact/reports',
  SHOP: '/shop',
  PRODUCT_DETAIL: '/shop/:slug',
  GET_INVOLVED: '/get-involved',
  MEMBERSHIP: '/get-involved/membership',
  CAREERS: '/get-involved/careers',
  PARTNER: '/get-involved/partner',
  CONTACT: '/contact',
  DONATE: '/donate',
  STYLEGUIDE: '/styleguide',
}

export function projectPath(slug) {
  return `/impact/projects/${slug}`
}

export function productPath(slug) {
  return `/shop/${slug}`
}

export function storyPath(slug) {
  return `/impact/stories/${slug}`
}

export function blogPath(slug) {
  return `/impact/blog/${slug}`
}
