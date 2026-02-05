export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Enterprise Solutions';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  INDUSTRIES: '/industries',
  CONTACT: '/contact',
  CAREERS: '/careers',
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
