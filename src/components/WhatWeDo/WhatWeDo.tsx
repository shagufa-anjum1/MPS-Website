import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

interface BusinessVertical {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface WhatWeDoProps {
  label?: string;
  heading?: string;
  subheading?: string;
  verticals?: BusinessVertical[];
}

/**
 * What We Do / Business Verticals Section
 * Enterprise-grade component showcasing core business areas
 *
 * Design Philosophy:
 * - Clean, professional layout
 * - Trust-building visuals
 * - Clear information hierarchy
 * - Investor-grade presentation
 */
const WhatWeDo: React.FC<WhatWeDoProps> = ({
  label = 'WHAT WE DO',
  heading = 'Our Core Business Verticals',
  subheading = 'Delivering end-to-end manufacturing excellence across diversified industry segments with proven capabilities and scale.',
  verticals = [
    {
      id: 'electronics-manufacturing',
      title: 'Electronics Manufacturing Services',
      description:
        'Comprehensive EMS solutions from PCB assembly to complete product manufacturing for global and domestic brands.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      link: '/business/electronics',
    },
    {
      id: 'oem-odm',
      title: 'OEM & ODM Solutions',
      description:
        'Turnkey manufacturing partnerships with design, engineering, and production capabilities across multiple categories.',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
      link: '/business/oem',
    },
    {
      id: 'industrial-automation',
      title: 'Industrial Automation & Engineering',
      description:
        'Advanced automation systems and precision engineering solutions for manufacturing process optimization.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      link: '/business/automation',
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain & Logistics',
      description:
        'Integrated supply chain management with warehousing, distribution, and just-in-time delivery capabilities.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      link: '/business/supply-chain',
    },
  ],
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div
          ref={targetRef}
          className={`max-w-3xl mb-16 transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary-600"></div>
            <span className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">
              {label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {heading}
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{subheading}</p>
        </div>

        {/* Business Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {verticals.map((vertical, index) => (
            <div
              key={vertical.id}
              className={`group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary-300 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/9] bg-gray-100">
                <img
                  src={vertical.image}
                  alt={vertical.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {vertical.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {vertical.description}
                </p>

                {/* Know More Link */}
                <Link
                  to={vertical.link}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300"
                >
                  <span>Know More</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>

              {/* Bottom Border Accent */}
              <div className="h-1 bg-gradient-to-r from-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
