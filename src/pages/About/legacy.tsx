// src/pages/About/legacy.tsx - Complete Legacy Page
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

const LegacyPage: React.FC = () => {
  const heroRef = React.useRef<HTMLElement>(null);
  const timelineRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);

  const [heroVisible, setHeroVisible] = React.useState(false);
  const [timelineVisible, setTimelineVisible] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);

  const [formData, setFormData] = React.useState({
    enquiryType: '',
    country: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // Intersection Observer Setup
  React.useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const heroObserver = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.isIntersecting);
    }, observerOptions);

    const timelineObserver = new IntersectionObserver(([entry]) => {
      setTimelineVisible(entry.isIntersecting);
    }, observerOptions);

    const contactObserver = new IntersectionObserver(([entry]) => {
      setContactVisible(entry.isIntersecting);
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (timelineRef.current) timelineObserver.observe(timelineRef.current);
    if (contactRef.current) contactObserver.observe(contactRef.current);

    return () => {
      heroObserver.disconnect();
      timelineObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you! We will get back to you soon.');
  };

  const timelineMilestones = [
    {
      year: '1993-94',
      title: 'The Beginning',
      description: 'Entered the consumer electronics space with color television manufacturing',
      icon: '📺',
      highlight: true,
    },
    {
      year: '1996',
      title: 'First Major Hub',
      description: 'Set up our first major production hub – Noida Facility 1, Uttar Pradesh',
      icon: '🏭',
      highlight: false,
    },
    {
      year: '2008',
      title: 'Lighting Innovation',
      description:
        'Diversified into lighting with CFLs and initiated our reverse logistics operations',
      icon: '💡',
      highlight: false,
    },
    {
      year: '2010',
      title: 'Appliances Launch',
      description:
        'Incorporated Dixon Appliances; began production of washing machines, LED TVs, sheet metal & plastic moulded components',
      icon: '🔧',
      highlight: false,
    },
    {
      year: '2014',
      title: 'Revenue Milestone',
      description: 'Surpassed ₹1,000 Cr in standalone revenue, marking a major growth milestone',
      icon: '📈',
      highlight: true,
    },
    {
      year: '2016',
      title: 'Mobile Manufacturing',
      description: 'Expanded into mobile manufacturing under Padget Electronics',
      icon: '📱',
      highlight: false,
    },
    {
      year: '2017',
      title: 'Public Listing',
      description:
        'Listed on BSE & NSE; partnered with Aditya Infotech to launch CCTV & DVR manufacturing through All India Limited',
      icon: '🏢',
      highlight: true,
    },
    {
      year: '2018',
      title: 'LED Panel Leader',
      description:
        "Started LED TV panel production (LCM) at Tirupati, becoming India's largest facility of its kind",
      icon: '🖥️',
      highlight: false,
    },
    {
      year: '2020',
      title: 'Set-Top Box Entry',
      description: 'Ventured into set-top box manufacturing, further diversifying our portfolio',
      icon: '📦',
      highlight: false,
    },
    {
      year: '2021-2023',
      title: 'Rapid Expansion',
      description:
        'Added fully automatic top load washing machines, hearables & wearables, telecom & IT hardware, and inverter AC control boards',
      icon: '🚀',
      highlight: true,
    },
    {
      year: '2024',
      title: 'South India Growth',
      description:
        'Started refrigerator production, expanding our white goods presence; Established Chennai IT plant, our biggest presence in South India',
      icon: '🌟',
      highlight: true,
    },
  ];

  const countries = [
    'India',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Singapore',
    'UAE',
    'Japan',
    'Other',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section
        ref={heroRef}
        className={`overflow-hidden transition-all duration-1000 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 ${
          heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <Container>
          <div className="min-h-[75vh] flex items-center justify-center text-center px-4">
            <div className="max-w-5xl">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-purple-100 text-purple-800 rounded-full text-sm font-bold tracking-wide mb-6">
                  OUR LEGACY
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
                A Legacy of Excellence, Innovation, and Lasting Impact
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                From a single product line to a diversified industry leader, our journey is built on
                innovation, excellence, and trust. Explore the milestones that have shaped our
                legacy and continue to drive us toward a smarter, more connected future.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Journey Introduction */}
      <Section className="bg-white py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block p-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl mb-8">
              <div className="text-6xl">🏆</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              A Journey of Innovation and Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every milestone represents our commitment to pushing boundaries, embracing change, and
              delivering exceptional value. This is the story of how we transformed from a vision
              into India's trusted manufacturing partner.
            </p>
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section
        ref={timelineRef}
        className={`bg-gradient-to-b from-slate-50 to-white py-24 transition-all duration-1000 ${
          timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent">
              Milestones That Define Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of relentless innovation and growth
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-indigo-300 to-blue-200"></div>

            <div className="space-y-12">
              {timelineMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Card */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                    } mb-8 lg:mb-0`}
                  >
                    <div
                      className={`group p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border overflow-hidden ${
                        milestone.highlight
                          ? 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 border-purple-400 text-white'
                          : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50'
                      }`}
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform ${
                            milestone.highlight
                              ? 'bg-white/20 backdrop-blur-lg'
                              : 'bg-gradient-to-br from-purple-100 to-indigo-100'
                          }`}
                        >
                          {milestone.icon}
                        </div>
                        <div className="flex-1">
                          <div
                            className={`text-sm font-bold mb-2 tracking-wider ${
                              milestone.highlight ? 'text-purple-100' : 'text-purple-600'
                            }`}
                          >
                            {milestone.year}
                          </div>
                          <h3
                            className={`text-2xl font-bold mb-3 ${
                              milestone.highlight
                                ? 'text-white'
                                : 'text-gray-900 group-hover:text-purple-600'
                            } transition-colors`}
                          >
                            {milestone.title}
                          </h3>
                          <p
                            className={`text-base leading-relaxed ${
                              milestone.highlight
                                ? 'text-purple-100'
                                : 'text-gray-600 group-hover:text-gray-800'
                            }`}
                          >
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 border-4 border-white shadow-xl z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section
        ref={contactRef}
        className={`bg-gradient-to-br from-gray-900 via-slate-900 to-purple-950 text-white py-32 transition-all duration-1000 ${
          contactVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - CTA Content */}
            <div>
              <div className="inline-block px-6 py-3 bg-purple-500/20 backdrop-blur-lg border border-purple-400/30 rounded-full text-sm font-bold tracking-wide mb-8">
                CONNECT WITH US
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Let's Build Together!
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                We work closely with leading global and domestic brands to deliver reliable,
                cost-effective, and scalable manufacturing solutions. If you're looking for
                end-to-end support, from product design to mass production, fill out the form and
                we'll reach out to get started.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                  <div className="text-3xl mb-3">⚡</div>
                  <div className="text-2xl font-bold text-white mb-2">24-48 hrs</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                  <div className="text-3xl mb-3">🤝</div>
                  <div className="text-2xl font-bold text-white mb-2">100+</div>
                  <div className="text-sm text-gray-400">Global Partners</div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Enquiry Type */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    Enquiry Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="text-gray-900">
                      Select Enquiry Type
                    </option>
                    <option value="manufacturing" className="text-gray-900">
                      Manufacturing Partnerships
                    </option>
                    <option value="vendor" className="text-gray-900">
                      Vendor/Supply Chain
                    </option>
                    <option value="export" className="text-gray-900">
                      Export Enquiry
                    </option>
                    <option value="hr" className="text-gray-900">
                      HR & Careers
                    </option>
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    Country <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="text-gray-900">
                      Select Country
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country} className="text-gray-900">
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional CTA Section */}
      <Section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Be Part of Our Legacy?
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Join the brands that trust us to power their innovation. Let's create the next chapter
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/services"
                className="inline-block bg-white text-purple-700 hover:bg-purple-50 px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Our Capabilities
              </a>
              <a
                href="/story"
                className="inline-block border-2 border-white/50 hover:border-white bg-white/10 backdrop-blur-lg hover:bg-white/20 px-12 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Read Our Story
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default LegacyPage;
