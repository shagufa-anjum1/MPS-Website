import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

interface HeroProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  fullHeight?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  heading = 'Powering Growth',
  subheading = 'Across Industries with Excellence & Innovation',
  buttonText = 'Know More',
  buttonLink = '/about',
  backgroundImage = '/images/hero-image.jpg',
  fullHeight = true,
}) => {
  return (
    <section
      className={`relative w-full ${
        fullHeight ? 'h-[calc(100vh-80px)]' : 'h-[600px]'
      } flex items-center overflow-hidden bg-gray-900`}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Dark Gradient Overlay - Positioned ABOVE image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>

      {/* Hero Content - Positioned ABOVE overlay */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight animate-slide-up">
            {heading}
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-8 md:mb-10 font-light leading-relaxed animate-slide-up animation-delay-200">
            {subheading}
          </p>

          {/* CTA Button */}
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group animate-slide-up animation-delay-400"
          >
            <span>{buttonText}</span>
            <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
   {/*    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
