import React from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

interface Client {
  id: string;
  name: string;
  logo: string;
}

interface OurClientsProps {
  label?: string;
  heading?: string;
  subheading?: string;
  trustStatement?: string;
  industryTags?: string[];
  clients?: Client[];
  grayscale?: boolean;
}

/**
 * Our Clients & Partners Section - Enterprise Premium
 * Redesigned for trust, scale, and board-level presentation
 *
 * Design Philosophy:
 * - Dense, confident layout
 * - Logos are proof, not CTAs
 * - Grayscale = maturity & professionalism
 * - Trust statement = instant credibility
 */
const OurClients: React.FC<OurClientsProps> = ({
  label = 'CLIENTS & PARTNERS',
  heading = 'Trusted by Global Industry Leaders',
  subheading = 'Long-term partnerships with leading global and domestic brands across industries.',
  trustStatement = 'Serving global OEMs across consumer electronics, appliances, industrial systems, and power solutions.',
  industryTags = [
    'Consumer Electronics',
    'Home Appliances',
    'Industrial Systems',
    'Power & Energy',
  ],
  clients = [
    {
      id: 'client-1',
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    },
    {
      id: 'client-2',
      name: 'LG',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg',
    },
    {
      id: 'client-3',
      name: 'Sony',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg',
    },
    {
      id: 'client-4',
      name: 'Panasonic',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Panasonic_logo_%28Blue%29.svg',
    },
    {
      id: 'client-5',
      name: 'Bosch',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
    },
    {
      id: 'client-6',
      name: 'Philips',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg',
    },
    {
      id: 'client-7',
      name: 'Haier',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Haier_logo.svg',
    },
    {
      id: 'client-8',
      name: 'Whirlpool',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Whirlpool_logo.svg',
    },
    {
      id: 'client-9',
      name: 'Hitachi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Hitachi_logo.svg',
    },
    {
      id: 'client-10',
      name: 'Toshiba',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Toshiba_logo.svg',
    },
    {
      id: 'client-11',
      name: 'Siemens',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
    },
    {
      id: 'client-12',
      name: 'GE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg',
    },
  ],
  grayscale = true,
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compact & Bold */}
        <div
          ref={targetRef}
          className={`mb-12 transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Label */}
          <div className="mb-3">
            <span className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">
              {label}
            </span>
          </div>

          {/* Heading - Bold & Authoritative */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {heading}
          </h2>

          {/* Subheading - One line only */}
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">{subheading}</p>
        </div>

        {/* Logo Grid - Dense & Professional */}
        <div
          className={`mb-10 transition-all duration-1000 delay-200 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Grid Container with subtle dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-200 bg-white">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className={`flex items-center justify-center p-8 border-r border-b border-gray-200 transition-all duration-300 hover:bg-gray-50 ${
                  // Remove right border on last column
                  (index + 1) % 6 === 0 ? 'lg:border-r-0' : ''
                } ${(index + 1) % 4 === 0 ? 'md:border-r-0 lg:border-r' : ''} ${
                  (index + 1) % 3 === 0 ? 'sm:border-r-0 md:border-r' : ''
                } ${(index + 1) % 2 === 0 ? 'border-r-0 sm:border-r' : ''} ${
                  // Remove bottom border on last row
                  index >= clients.length - 6 ? 'lg:border-b-0' : ''
                } ${index >= clients.length - 4 ? 'md:border-b-0 lg:border-b' : ''} ${
                  index >= clients.length - 3 ? 'sm:border-b-0 md:border-b' : ''
                } ${index >= clients.length - 2 ? 'border-b-0 sm:border-b' : ''}`}
                style={{
                  transitionDelay: `${index * 30}ms`,
                }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className={`max-h-10 max-w-full w-auto h-auto object-contain transition-all duration-300 ${
                    grayscale
                      ? 'grayscale opacity-50 hover:grayscale-0 hover:opacity-100'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const fallback = document.createElement('div');
                      fallback.className =
                        'fallback-text text-gray-600 font-semibold text-xs uppercase tracking-wider';
                      fallback.textContent = client.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement - Single Line, Bold */}
        {trustStatement && (
          <div
            className={`text-center mb-8 transition-all duration-1000 delay-400 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-sm sm:text-base text-gray-700 font-medium max-w-4xl mx-auto">
              {trustStatement}
            </p>
          </div>
        )}

        {/* Industry Tags - Inline, Minimal */}
        {industryTags && industryTags.length > 0 && (
          <div
            className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-1000 delay-500 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {industryTags.map((tag, index) => (
              <React.Fragment key={index}>
                <span className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wider">
                  {tag}
                </span>
                {index < industryTags.length - 1 && <span className="text-gray-400">•</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurClients;
