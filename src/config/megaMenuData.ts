import { NavigationConfig } from '../types/megaMenu.types';

/**
 * Mega Menu Navigation Configuration
 * Centralized data for all navigation items and their mega menu content
 * Simplified structure for improved usability and faster navigation
 */
export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      label: 'Home',
      path: '/',
      hasMegaMenu: false,
    },
    {
      label: 'About Us',
      path: '/about',
      hasMegaMenu: true,
      columns: 5,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'our-story',
              label: 'Our Story',
              path: '/about/story',
              image: 'https://picsum.photos/400/300?random=1',
              description: 'Discover our journey',
            },
            {
              id: 'our-legacy',
              label: 'Our Legacy',
              path: '/about/legacy',
              image: 'https://picsum.photos/400/300?random=2',
              description: 'Years of excellence',
            },
            {
              id: 'our-leaders',
              label: 'Our Leaders',
              path: '/about/leadership',
              image: 'https://picsum.photos/400/300?random=3',
              description: 'Meet our team',
            },
            {
              id: 'our-presence',
              label: 'Our Presence',
              path: '/about/presence',
              image: 'https://picsum.photos/400/300?random=4',
              description: 'Global footprint',
            },
            {
              id: 'our-recognitions',
              label: 'Our Recognitions',
              path: '/about/recognitions',
              image: 'https://picsum.photos/400/300?random=5',
              description: 'Awards & achievements',
            },
          ],
        },
      ],
    },
    {
      label: 'Business',
      path: '/business',
      hasMegaMenu: true,
      columns: 3,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'products',
              label: 'Products',
              path: '/business/products',
              image: 'https://picsum.photos/400/300?random=6',
              description: 'Explore our complete product portfolio',
            },
            {
              id: 'innovation-hub',
              label: 'Innovation Hub',
              path: '/business/innovation',
              image: 'https://picsum.photos/400/300?random=7',
              description: 'Cutting-edge research and development',
            },
            {
              id: 'b2b-solutions',
              label: 'B2B Solutions',
              path: '/business/b2b',
              image: 'https://picsum.photos/400/300?random=8',
              description: 'Enterprise and business services',
            },
          ],
        },
      ],
    },
    {
      label: 'Investors',
      path: '/investors',
      hasMegaMenu: true,
      columns: 4,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'financial-performance',
              label: 'Financial Performance',
              path: '/investors/financials',
              image: 'https://picsum.photos/400/300?random=9',
              description: 'Quarterly and annual results',
            },
            {
              id: 'filings',
              label: 'Filings & Reports',
              path: '/investors/filings',
              image: 'https://picsum.photos/400/300?random=10',
              description: 'SEC filings and financial documents',
            },
            {
              id: 'corporate-governance',
              label: 'Corporate Governance',
              path: '/investors/governance',
              image: 'https://picsum.photos/400/300?random=11',
              description: 'Board structure and policies',
            },
            {
              id: 'shareholder-info',
              label: 'Shareholder Info',
              path: '/investors/shareholders',
              image: 'https://picsum.photos/400/300?random=12',
              description: 'Dividends and investor resources',
            },
          ],
        },
      ],
    },
    {
      label: 'Responsibility',
      path: '/responsibility',
      hasMegaMenu: true,
      columns: 3,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'sustainability',
              label: 'Sustainability',
              path: '/responsibility/sustainability',
              image: 'https://picsum.photos/400/300?random=13',
              description: 'Environmental commitments and goals',
            },
            {
              id: 'esg-initiatives',
              label: 'ESG Initiatives',
              path: '/responsibility/esg',
              image: 'https://picsum.photos/400/300?random=14',
              description: 'Environmental, social, and governance programs',
            },
            {
              id: 'community-impact',
              label: 'Community Impact',
              path: '/responsibility/community',
              image: 'https://picsum.photos/400/300?random=15',
              description: 'Social responsibility and outreach',
            },
          ],
        },
      ],
    },
    {
      label: 'Careers',
      path: '/careers',
      hasMegaMenu: true,
      columns: 3,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'life-at-company',
              label: 'Life at Company',
              path: '/careers/life',
              image: 'https://picsum.photos/400/300?random=16',
              description: 'Culture, values, and employee experience',
            },
            {
              id: 'job-openings',
              label: 'Job Openings',
              path: '/careers/jobs',
              image: 'https://picsum.photos/400/300?random=17',
              description: 'Current opportunities and positions',
            },
            {
              id: 'benefits',
              label: 'Benefits & Perks',
              path: '/careers/benefits',
              image: 'https://picsum.photos/400/300?random=18',
              description: 'Compensation, wellness, and perks',
            },
          ],
        },
      ],
    },
    {
      label: 'Newsroom',
      path: '/newsroom',
      hasMegaMenu: true,
      columns: 3,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'press-releases',
              label: 'Press Releases',
              path: '/newsroom/press',
              image: 'https://picsum.photos/400/300?random=19',
              description: 'Latest company announcements',
            },
            {
              id: 'blogs',
              label: 'Blogs',
              path: '/newsroom/blog',
              image: 'https://picsum.photos/400/300?random=20',
              description: 'Insights and thought leadership',
            },
            {
              id: 'events',
              label: 'Events',
              path: '/newsroom/events',
              image: 'https://picsum.photos/400/300?random=21',
              description: 'Upcoming and past events',
            },
          ],
        },
      ],
    },
    {
      label: 'Contact Us',
      path: '/contact',
      hasMegaMenu: false,
    },
  ],
};
