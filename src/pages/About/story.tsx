// src/pages/About/story.tsx - Fixed for React Router Outlet
import React from 'react';

// Inline Components with proper TypeScript types
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({ children, className = '' }, ref) => (
  <section ref={ref} className={`w-full py-20 ${className}`}>
    {children}
  </section>
));
Section.displayName = 'Section';

const StoryPage: React.FC = () => {
  const heroRef = React.useRef<HTMLElement>(null);
  const journeyRef = React.useRef<HTMLElement>(null);
  const valuesRef = React.useRef<HTMLElement>(null);
  const statsRef = React.useRef<HTMLElement>(null);

  const [heroVisible, setHeroVisible] = React.useState(false);
  const [journeyVisible, setJourneyVisible] = React.useState(false);
  const [valuesVisible, setValuesVisible] = React.useState(false);
  const [statsVisible, setStatsVisible] = React.useState(false);

  // Intersection Observer Setup
  React.useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const heroObserver = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.isIntersecting);
    }, observerOptions);

    const journeyObserver = new IntersectionObserver(([entry]) => {
      setJourneyVisible(entry.isIntersecting);
    }, observerOptions);

    const valuesObserver = new IntersectionObserver(([entry]) => {
      setValuesVisible(entry.isIntersecting);
    }, observerOptions);

    const statsObserver = new IntersectionObserver(([entry]) => {
      setStatsVisible(entry.isIntersecting);
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (journeyRef.current) journeyObserver.observe(journeyRef.current);
    if (valuesRef.current) valuesObserver.observe(valuesRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      heroObserver.disconnect();
      journeyObserver.disconnect();
      valuesObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const coreValues = [
    {
      title: 'Quality',
      description: 'We deliver top-tier performance with no compromises.',
      icon: '⭐',
    },
    {
      title: 'Innovation',
      description: 'We use advanced technology for next-generation solutions.',
      icon: '💡',
    },
    {
      title: 'Customer Focus',
      description: 'We understand your needs and deliver beyond expectations.',
      icon: '🎯',
    },
    {
      title: 'Trust',
      description: 'We build lasting partnerships through reliability.',
      icon: '🤝',
    },
  ];

  const journeyMilestones = [
    {
      year: '2015',
      title: 'Foundation',
      desc: 'Precision enclosures manufacturing founded in Delhi',
      highlight: true,
    },
    {
      year: '2018',
      title: 'Scale Achievement',
      desc: 'Injection molding for leading smartphone OEMs',
      highlight: false,
    },
    {
      year: '2021',
      title: 'CNC Excellence',
      desc: 'Advanced aluminum device body manufacturing launched',
      highlight: false,
    },
    {
      year: '2024',
      title: 'Global Expansion',
      desc: '50M+ units exported to international markets',
      highlight: true,
    },
    {
      year: '2026',
      title: 'Smart Factory',
      desc: 'AI-powered production systems deployment',
      highlight: false,
    },
  ];

  const statsData = [
    { label: 'Brands Trust Our Expertise', value: '75+', icon: '🏆' },
    { label: 'Manufacturing Facilities', value: '3', icon: '🏭' },
    { label: 'R&D Innovation Centers', value: '2', icon: '🔬' },
    { label: 'Dedicated Employees', value: '5,000+', icon: '👥' },
    { label: 'Device Bodies Manufactured', value: '50M+', icon: '📱' },
    { label: 'Years of Excellence', value: '11+', icon: '⏱️' },
    { label: 'Manufacturing Space (sq.ft)', value: '500K+', icon: '📐' },
    { label: 'Quality Certifications', value: '12+', icon: '✅' },
  ];

  const capabilities = [
    {
      icon: '📱',
      title: 'Smartphone Casings',
      desc: 'High-volume injection molding for consumer electronics',
    },
    {
      icon: '⌚',
      title: 'Wearable Devices',
      desc: 'Micro-precision CNC aluminum enclosures',
    },
    {
      icon: '🔌',
      title: 'IoT Device Bodies',
      desc: 'Custom PCB housings and smart device enclosures',
    },
    {
      icon: '⚙️',
      title: 'Precision Components',
      desc: 'Anodized magnesium and aluminum parts',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section
        ref={heroRef}
        className={`overflow-hidden transition-all duration-1000 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ${
          heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <Container>
          <div className="min-h-[80vh] flex items-center justify-center text-center px-4">
            <div className="max-w-5xl">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-bold tracking-wide mb-6">
                  OUR STORY
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                Leading Innovation in Electronics Manufacturing
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                A leading electronics manufacturing powerhouse, driving innovation in consumer
                electronics and telecommunications. Engineering durable device bodies with
                micron-level precision since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/services"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Our Capabilities
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Manufacturing Quote
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section className="bg-white py-24">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-blue-200"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Journey Timeline */}
      <Section
        ref={journeyRef}
        className={`bg-gradient-to-b from-slate-50 to-white py-24 transition-all duration-1000 ${
          journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
              Our Precision Journey
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              From Delhi workshops to powering global electronics OEMs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {journeyMilestones.map((item, i) => (
              <div
                key={i}
                className={`group p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border overflow-hidden ${
                  item.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400 text-white'
                    : 'bg-white/90 backdrop-blur-md border-gray-100 hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50'
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300 mx-auto ${
                    item.highlight
                      ? 'bg-white/20 text-white backdrop-blur-lg'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  }`}
                >
                  {item.year}
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-6 transition-all duration-300 ${
                    item.highlight ? 'text-white' : 'text-gray-900 group-hover:text-blue-600'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    item.highlight ? 'text-blue-100' : 'text-gray-600 group-hover:text-gray-800'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Manufacturing Capabilities */}
      <Section className="bg-white py-24">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Device Body Expertise
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              End-to-end manufacturing precision for global brands
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="group p-10 text-center rounded-3xl bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-blue-300 hover:from-blue-50 hover:to-indigo-50 cursor-pointer"
              >
                <div className="text-6xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 font-medium text-lg leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Snapshot */}
      <Section
        ref={statsRef}
        className={`bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-32 transition-all duration-1000 ${
          statsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              A Snapshot of Our Scale and Impact
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Delivering excellence across every metric that matters
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className="group p-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 border border-white/20 hover:border-white/40 hover:bg-white/15 text-center"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-4 group-hover:scale-105 transition-all">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-blue-100 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section
        ref={valuesRef}
        className={`bg-gradient-to-b from-white to-slate-50 py-24 transition-all duration-1000 ${
          valuesVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="group p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="text-5xl mb-8">🎯</div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 group-hover:text-blue-600 transition-colors">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To redefine the future of electronics manufacturing by becoming the most trusted
                innovation partner for global brands — known for precision, sustainability, and
                transformative impact across industries.
              </p>
            </div>
            <div className="group p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-white">
              <div className="text-5xl mb-8">🚀</div>
              <h3 className="text-3xl md:text-4xl font-black mb-8">Our Mission</h3>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                We exist to empower innovation at scale by delivering cutting-edge manufacturing
                solutions with integrity, intelligence, and impact.
              </p>
              <ul className="space-y-4 text-blue-50">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Customer-Centric Excellence through reliable, future-ready solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Precision Without Compromise with zero-defect manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span>Purpose-Driven Impact for sustainable manufacturing practices</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Innovation Hub CTA */}
      <Section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-600 text-white py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-8">🔬</div>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Step Into Our World of Innovation
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Discover the forefront of innovation at our hub, where groundbreaking technologies and
              creative solutions converge. Join us in shaping the next wave of excellence.
            </p>
            <a
              href="/innovation"
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-16 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
            >
              Explore Innovation Hub →
            </a>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 text-white py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Scale Your Electronics Production
            </h2>
            <p className="text-xl md:text-2xl mb-16 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Zero-defect device bodies for global OEMs. Partner with India's precision
              manufacturing leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="/services"
                className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-16 py-7 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
              >
                View Full Capabilities{' '}
                <span className="ml-2 inline-block group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </a>
              <a
                href="/contact"
                className="px-16 py-7 border-2 border-white/30 hover:border-white/70 bg-white/5 backdrop-blur-xl rounded-3xl font-bold text-xl hover:bg-white/10 transition-all duration-500"
              >
                Request Manufacturing Quote
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* People Section */}
      <Section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Our People Power Our Progress
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Behind every innovation, milestone, and solution is a passionate team that makes it
              happen. Meet the people who bring purpose, precision, and heart to everything we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/leadership"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Meet Our Leadership
              </a>
              <a
                href="/careers"
                className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Life at Our Company
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default StoryPage;
