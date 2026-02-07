import { NavigationConfig } from '@types/megaMenu.types';

/**
 * Mega Menu Navigation Configuration
 * Centralized data for all navigation items and their mega menu content
 */
export const navigationConfig: NavigationConfig = {
  mainNav: [
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
              image:
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
              description: 'Discover our journey',
            },
            {
              id: 'our-legacy',
              label: 'Our Legacy',
              path: '/about/legacy',
              image:
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
              description: 'Years of excellence',
            },
            {
              id: 'our-leaders',
              label: 'Our Leaders',
              path: '/about/leadership',
              image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
              description: 'Meet our team',
            },
            {
              id: 'our-presence',
              label: 'Our Presence',
              path: '/about/locations',
              image:
                'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop',
              description: 'Global footprint',
            },
            {
              id: 'our-recognitions',
              label: 'Our Recognitions',
              path: '/about/awards',
              image:
                'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop',
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
      columns: 4,
      layout: 'grid',
      categories: [
        {
          title: 'Product Lines',
          items: [
            {
              id: 'products',
              label: 'Products',
              path: '/business/products',
              image:
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            },
            {
              id: 'innovation-hub',
              label: 'Innovation Hub',
              path: '/business/innovation',
              image:
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
            },
          ],
        },
        {
          title: 'Consumer Electronics',
          items: [
            {
              id: 'mobile-phones',
              label: 'Mobile Phones',
              path: '/business/mobile',
              image:
                'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
            },
            {
              id: 'displays',
              label: 'Displays',
              path: '/business/displays',
              image:
                'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            },
          ],
        },
        {
          title: 'Home Solutions',
          items: [
            {
              id: 'appliances',
              label: 'Appliances',
              path: '/business/appliances',
              image:
                'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop',
            },
            {
              id: 'smart-home',
              label: 'Smart Home',
              path: '/business/smart-home',
              image:
                'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
            },
          ],
        },
        {
          title: 'Enterprise',
          items: [
            {
              id: 'b2b-solutions',
              label: 'B2B Solutions',
              path: '/business/b2b',
              image:
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
            },
            {
              id: 'industrial',
              label: 'Industrial Tech',
              path: '/business/industrial',
              image:
                'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop',
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
              image:
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
            },
            {
              id: 'corporate-governance',
              label: 'Corporate Governance',
              path: '/investors/governance',
              image:
                'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
            },
            {
              id: 'filings',
              label: 'Filings & Reports',
              path: '/investors/filings',
              image:
                'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop',
            },
            {
              id: 'shareholder-info',
              label: 'Shareholder Info',
              path: '/investors/shareholders',
              image:
                'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop',
            },
          ],
        },
      ],
    },
    {
      label: 'Responsibility',
      path: '/responsibility',
      hasMegaMenu: true,
      columns: 4,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'sustainability',
              label: 'Sustainability',
              path: '/responsibility/sustainability',
              image:
                'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
            },
            {
              id: 'projects',
              label: 'Projects & Initiatives',
              path: '/responsibility/projects',
              image:
                'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
            },
            {
              id: 'communities',
              label: 'Communities',
              path: '/responsibility/communities',
              image:
                'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop',
            },
            {
              id: 'environment',
              label: 'Environmental Impact',
              path: '/responsibility/environment',
              image:
                'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
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
              path: '/careers/culture',
              image:
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
            },
            {
              id: 'job-openings',
              label: 'Job Openings',
              path: '/careers/openings',
              image:
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
            },
            {
              id: 'benefits',
              label: 'Benefits & Perks',
              path: '/careers/benefits',
              image:
                'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=300&fit=crop',
            },
          ],
        },
      ],
    },
    {
      label: 'Newsroom',
      path: '/newsroom',
      hasMegaMenu: true,
      columns: 4,
      layout: 'grid',
      categories: [
        {
          title: '',
          items: [
            {
              id: 'blogs',
              label: 'Blogs',
              path: '/newsroom/blogs',
              image:
                'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
            },
            {
              id: 'press-releases',
              label: 'Press Releases',
              path: '/newsroom/press',
              image:
                'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
            },
            {
              id: 'media-resources',
              label: 'Media Resources',
              path: '/newsroom/media',
              image:
                'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop',
            },
            {
              id: 'events',
              label: 'Events',
              path: '/newsroom/events',
              image:
                'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
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
