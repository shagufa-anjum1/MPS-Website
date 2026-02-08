export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Enterprise Solutions';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  INDUSTRIES: '/industries',
  CONTACT: '/contact',
  CAREERS: '/careers',

  // About Section Routes
  STORY: '/about/story',
  OUR_LEGACY: '/about/legacy',
  OUR_LEADERSHIP: '/about/leadership',
  OUR_PRESENCE: '/about/presence',
  OUR_RECOGNITIONS: '/about/recognitions',

  // Business Routes
  MOBILE_PHONES: '/business/mobile',
  OUR_PRODUCTS: '/business/products',
  OUR_INNOVATION: '/business/innovation',
  OUR_B2B: '/business/b2b',

  // Investors Routes
  INVESTORS_FINANCIALS: '/investors/financials',
  INVESTORS_FILINGS: '/investors/filings',
  INVESTORS_GOVERNANCE: '/investors/governance',
  INVESTORS_SHAREHOLDERS: '/investors/shareholders',

  // Responsibility Routes
  RESPONSIBILITY_SUSTAINABILITY: '/responsibility/sustainability',
  RESPONSIBILITY_ESG: '/responsibility/esg',
  RESPONSIBILITY_COMMUNITY: '/responsibility/community',

  // Careers Routes
  CAREERS_LIFE: '/careers/life',
  CAREERS_JOBS: '/careers/jobs',
  CAREERS_BENEFITS: '/careers/benefits',

  // Newsroom Routes
  NEWSROOM_PRESS: '/newsroom/press',
  NEWSROOM_BLOG: '/newsroom/blog',
  NEWSROOM_EVENTS: '/newsroom/events',
} as const;

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://linkedin.com',
  TWITTER: 'https://twitter.com',
  FACEBOOK: 'https://facebook.com',
  INSTAGRAM: 'https://instagram.com',
};

export const CONTACT_INFO = {
  EMAIL: 'info@enterprisesolutions.com',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: '123 Business Street, Tech City, TC 12345',
};
