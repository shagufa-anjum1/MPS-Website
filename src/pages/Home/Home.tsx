import React from 'react';
import Hero from '@components/Hero/Hero';
import WhoWeAre from '@components/WhoWeAre/WhoWeAre';
import WhatWeDo from '@components/WhatWeDo/WhatWeDo';
import WhyChooseUs from '@components/WhyChooseUs/WhyChooseUs';
import IndustriesWeServe from '@components/IndustriesWeServe/IndustriesWeServe';
import OurClients from '@components/OurClients/OurClients';
import Sustainability from '@components/Sustainability/Sustainability';
import CareersCTA from '@components/CareersCTA/CareersCTA';
import {
  FaIndustry,
  FaHandshake,
  FaMapMarkedAlt,
  FaAward,
  FaUserTie,
  FaCertificate,
  FaMobileAlt,
  FaBlender,
  FaLightbulb,
  FaCar,
  FaBolt,
  FaLeaf,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';

/**
 * Home Page Component
 * Enterprise-grade manufacturing company website
 */
const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        heading="Powering Growth"
        subheading="Across Industries with Excellence & Innovation"
        buttonText="Know More"
        buttonLink="/about"
        backgroundImage="/images/hero-image2.avif"
      />

      {/* Who We Are Section */}
      <WhoWeAre
        label="WHO WE ARE"
        heading="A Trusted Partner in Manufacturing & Innovation"
        description="With decades of pioneering experience, we are a leading diversified manufacturing partner delivering comprehensive end-to-end solutions across industries. Our commitment to innovation, quality, and excellence empowers global and domestic brands to achieve their vision through cost-effective, scalable, and reliable manufacturing solutions."
        buttonText="Learn More"
        buttonLink="/about"
        images={[
          'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
          'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
        ]}
        stats={[
          { value: '45+', label: 'Years Experience' },
          { value: '60+', label: 'Global Brands' },
        ]}
      />

      {/* What We Do Section */}
      <WhatWeDo
        label="WHAT WE DO"
        heading="Our Core Business Verticals"
        subheading="Delivering end-to-end manufacturing excellence across diversified industry segments with proven capabilities and scale."
        verticals={[
          {
            id: 'electronics-manufacturing',
            title: 'Electronics Manufacturing Services',
            description:
              'Comprehensive EMS solutions from PCB assembly to complete product manufacturing for global and domestic brands.',
            image:
              'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
            link: '/business/electronics',
          },
          {
            id: 'oem-odm',
            title: 'OEM & ODM Solutions',
            description:
              'Turnkey manufacturing partnerships with design, engineering, and production capabilities across multiple categories.',
            image:
              'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
            link: '/business/oem',
          },
          {
            id: 'industrial-automation',
            title: 'Industrial Automation & Engineering',
            description:
              'Advanced automation systems and precision engineering solutions for manufacturing process optimization.',
            image:
              'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
            link: '/business/automation',
          },
          {
            id: 'supply-chain',
            title: 'Supply Chain & Logistics',
            description:
              'Integrated supply chain management with warehousing, distribution, and just-in-time delivery capabilities.',
            image:
              'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
            link: '/business/supply-chain',
          },
        ]}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs
        label="WHY US"
        heading="Why Leading Brands Trust Us"
        subheading="Decades of manufacturing excellence backed by scale, quality, and reliability. Our commitment to innovation and operational excellence makes us the preferred manufacturing partner for global and domestic brands."
        strengths={[
          {
            id: 'manufacturing-scale',
            icon: <FaIndustry className="text-4xl" />,
            title: 'Large-Scale Manufacturing Capability',
            description:
              'State-of-the-art facilities with high-volume production capacity across multiple locations.',
          },
          {
            id: 'oem-partnerships',
            icon: <FaHandshake className="text-4xl" />,
            title: 'Strong OEM Partnerships',
            description:
              'Trusted manufacturing partner for leading global brands with long-term strategic relationships.',
          },
          {
            id: 'pan-india',
            icon: <FaMapMarkedAlt className="text-4xl" />,
            title: 'Pan-India Manufacturing Presence',
            description:
              'Strategically located facilities ensuring optimal logistics and regional market coverage.',
          },
          {
            id: 'quality-compliance',
            icon: <FaAward className="text-4xl" />,
            title: 'Quality & Compliance Driven',
            description:
              'ISO certified processes with stringent quality controls and international standard compliance.',
          },
          {
            id: 'leadership',
            icon: <FaUserTie className="text-4xl" />,
            title: 'Experienced Leadership Team',
            description:
              'Seasoned management and engineering professionals with deep industry expertise.',
          },
          {
            id: 'certifications',
            icon: <FaCertificate className="text-4xl" />,
            title: 'Industry Certifications',
            description:
              'Comprehensive certifications ensuring adherence to global manufacturing standards.',
          },
        ]}
        stats={[
          { value: '15+', label: 'Manufacturing Units' },
          { value: '20+', label: 'Years of Excellence' },
          { value: '100+', label: 'Global Clients' },
          { value: '5000+', label: 'Skilled Workforce' },
        ]}
      />

      {/* Industries We Serve Section */}
      <IndustriesWeServe
        label="INDUSTRIES"
        heading="Industries We Serve"
        subheading="Delivering reliable and scalable manufacturing solutions across diverse industries with proven expertise and cutting-edge capabilities."
        industries={[
          {
            id: 'consumer-electronics',
            icon: <FaMobileAlt className="text-5xl" />,
            title: 'Consumer Electronics',
            description: 'Smartphones, wearables, smart devices',
            image:
              'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
          },
          {
            id: 'home-appliances',
            icon: <FaBlender className="text-5xl" />,
            title: 'Home Appliances',
            description: 'Washing machines, air conditioners, kitchen appliances',
            image:
              'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&h=400&fit=crop',
          },
          {
            id: 'lighting-electricals',
            icon: <FaLightbulb className="text-5xl" />,
            title: 'Lighting & Electricals',
            description: 'LED lighting, electrical components',
            image:
              'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop',
          },
          {
            id: 'automotive-ev',
            icon: <FaCar className="text-5xl" />,
            title: 'Automotive & EV Components',
            description: 'Wiring systems, electronic modules',
            image:
              'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
          },
          {
            id: 'industrial-manufacturing',
            icon: <FaIndustry className="text-5xl" />,
            title: 'Industrial Manufacturing',
            description: 'Heavy equipment, precision components',
            image:
              'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
          },
          {
            id: 'energy-power',
            icon: <FaBolt className="text-5xl" />,
            title: 'Energy & Power Solutions',
            description: 'Power electronics, sustainable energy systems',
            image:
              'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
          },
        ]}
      />

      {/* Our Clients & Partners Section */}
      <OurClients
        label="CLIENTS & PARTNERS"
        heading="Trusted by Global Industry Leaders"
        subheading="Long-term partnerships with leading global and domestic brands across industries."
        trustStatement="Serving global OEMs across consumer electronics, appliances, industrial systems, and power solutions."
        industryTags={[
          'Consumer Electronics',
          'Home Appliances',
          'Industrial Systems',
          'Power & Energy',
        ]}
        grayscale={true}
        clients={[
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
        ]}
      />

      {/* Sustainability / ESG Section */}
      <Sustainability
        label="SUSTAINABILITY"
        heading="Sustainability & ESG"
        subheading="We are committed to responsible growth by integrating environmental, social, and governance principles across our operations."
        pillars={[
          {
            id: 'environmental',
            icon: <FaLeaf className="text-4xl" />,
            title: 'Environmental Responsibility',
            points: [
              'Energy-efficient manufacturing',
              'Waste reduction & recycling',
              'Sustainable sourcing practices',
            ],
          },
          {
            id: 'social',
            icon: <FaUsers className="text-4xl" />,
            title: 'Social Responsibility',
            points: [
              'Employee safety & well-being',
              'Skill development & training',
              'Community engagement initiatives',
            ],
          },
          {
            id: 'governance',
            icon: <FaShieldAlt className="text-4xl" />,
            title: 'Strong Governance',
            points: [
              'Ethical business practices',
              'Compliance & transparency',
              'Robust risk management',
            ],
          },
        ]}
        metrics={[
          { value: '35%', label: 'Energy from sustainable sources' },
          { value: '2,500+', label: 'Employees trained annually' },
          { value: '100%', label: 'Compliance adherence' },
        ]}
        image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop"
      />

      {/* Careers CTA Section */}
      <CareersCTA
        label="CAREERS"
        heading="Build Your Career With Us"
        description="Join a team that is shaping the future of manufacturing, technology, and sustainable growth across industries."
        highlights={[
          'Long-term career growth',
          'Learning & development programs',
          'Safe & inclusive work environment',
          'Exposure to global clients',
        ]}
        primaryButtonText="Explore Careers"
        primaryButtonLink="/careers"
        secondaryButtonText="View Open Positions"
        secondaryButtonLink="/careers#openings"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        backgroundColor="white"
      />
    </div>
  );
};

export default Home;
