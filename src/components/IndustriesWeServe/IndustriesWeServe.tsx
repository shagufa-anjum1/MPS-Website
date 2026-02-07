import React from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { FaMobileAlt, FaBlender, FaLightbulb, FaCar, FaIndustry, FaBolt } from 'react-icons/fa';

interface Industry {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

interface IndustriesWeServeProps {
  label?: string;
  heading?: string;
  subheading?: string;
  industries?: Industry[];
}

/**
 * Industries We Serve Section
 * Enterprise-grade component showcasing domain expertise
 *
 * Design Philosophy:
 * - Scannable grid layout
 * - Minimal, professional aesthetic
 * - Trust-building presentation
 * - Corporate B2B feel
 */
const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({
  label = 'INDUSTRIES',
  heading = 'Industries We Serve',
  subheading = 'Delivering reliable and scalable manufacturing solutions across diverse industries with proven expertise and cutting-edge capabilities.',
  industries = [
    {
      id: 'consumer-electronics',
      icon: <FaMobileAlt className="text-5xl" />,
      title: 'Consumer Electronics',
      description: 'Smartphones, wearables, smart devices',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
    },
    {
      id: 'home-appliances',
      icon: <FaBlender className="text-5xl" />,
      title: 'Home Appliances',
      description: 'Washing machines, air conditioners, kitchen appliances',
      image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&h=400&fit=crop',
    },
    {
      id: 'lighting-electricals',
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Lighting & Electricals',
      description: 'LED lighting, electrical components',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop',
    },
    {
      id: 'automotive-ev',
      icon: <FaCar className="text-5xl" />,
      title: 'Automotive & EV Components',
      description: 'Wiring systems, electronic modules',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
    },
    {
      id: 'industrial-manufacturing',
      icon: <FaIndustry className="text-5xl" />,
      title: 'Industrial Manufacturing',
      description: 'Heavy equipment, precision components',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
    },
    {
      id: 'energy-power',
      icon: <FaBolt className="text-5xl" />,
      title: 'Energy & Power Solutions',
      description: 'Power electronics, sustainable energy systems',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
    },
  ],
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={targetRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary-600"></div>
            <span className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">
              {label}
            </span>
            <div className="h-px w-8 bg-primary-600"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {heading}
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{subheading}</p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                {industry.image ? (
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-gray-400 group-hover:text-primary-600 transition-colors duration-300">
                      {industry.icon}
                    </div>
                  </div>
                )}
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon (if no image) */}
                {!industry.image && (
                  <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-1 w-12 bg-primary-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
