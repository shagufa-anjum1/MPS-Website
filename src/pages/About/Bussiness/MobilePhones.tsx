// src/pages/Products/MobilePhones.tsx - Complete Mobile Phones Page
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

const MobilePhonesPage: React.FC = () => {
  const heroRef = React.useRef<HTMLElement>(null);
  const categoriesRef = React.useRef<HTMLElement>(null);
  const capabilitiesRef = React.useRef<HTMLElement>(null);
  const statsRef = React.useRef<HTMLElement>(null);
  const awardsRef = React.useRef<HTMLElement>(null);
  const certificationsRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);

  const [heroVisible, setHeroVisible] = React.useState(false);
  const [categoriesVisible, setCategoriesVisible] = React.useState(false);
  const [capabilitiesVisible, setCapabilitiesVisible] = React.useState(false);
  const [statsVisible, setStatsVisible] = React.useState(false);
  const [awardsVisible, setAwardsVisible] = React.useState(false);
  const [certificationsVisible, setCertificationsVisible] = React.useState(false);
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

    const observers = [
      { ref: heroRef, setState: setHeroVisible },
      { ref: categoriesRef, setState: setCategoriesVisible },
      { ref: capabilitiesRef, setState: setCapabilitiesVisible },
      { ref: statsRef, setState: setStatsVisible },
      { ref: awardsRef, setState: setAwardsVisible },
      { ref: certificationsRef, setState: setCertificationsVisible },
      { ref: contactRef, setState: setContactVisible },
    ];

    const observerInstances = observers.map(({ ref, setState }) => {
      const observer = new IntersectionObserver(([entry]) => {
        setState(entry.isIntersecting);
      }, observerOptions);

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observerInstances.forEach((observer) => observer.disconnect());
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
    alert('Thank you! We will get back to you soon.');
  };

  const productCategories = [
    {
      title: 'Smartphones',
      description: 'Premium flagship and mid-range devices with cutting-edge technology',
      icon: '📱',
      gradient: 'from-blue-600 to-cyan-600',
      link: '/products/smartphones',
    },
    {
      title: 'Foldable Phones',
      description: 'Next-generation foldable devices with innovative form factors',
      icon: '📲',
      gradient: 'from-purple-600 to-pink-600',
      link: '/products/foldable-phones',
    },
    {
      title: 'Feature Phones',
      description: 'Reliable, affordable connectivity for mass markets',
      icon: '📞',
      gradient: 'from-green-600 to-teal-600',
      link: '/products/feature-phones',
    },
  ];

  const capabilities = [
    {
      icon: '🤖',
      title: 'AI-powered Precision',
      description: 'Smart automation ensures flawless assembly and quality.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Operations',
      description: 'Eco-friendly processes with optimised resource management.',
    },
    {
      icon: '⚡',
      title: 'Efficient Mass Production',
      description: 'High-volume capacity for fast and reliable smartphone delivery.',
    },
    {
      icon: '✅',
      title: 'Unmatched Quality Assurance',
      description: 'Rigorous testing and ISO-certified standards at every stage.',
    },
    {
      icon: '🤝',
      title: 'Expert Collaboration',
      description: 'In-house teams work closely with brands for tailored solutions.',
    },
  ];

  const scaleStats = [
    { value: '95', label: 'Capacity in Million per Annum', icon: '📊' },
    { value: '66', label: 'Production Lines', icon: '🏭' },
    { value: '43', label: 'SMT Lines', icon: '⚙️' },
  ];

  const whyDixon = [
    {
      icon: '🏢',
      title: 'Smart Factories, Smarter Processes',
      description:
        'Industry 4.0-enabled facilities with AI, automation, and robotics for unmatched precision.',
    },
    {
      icon: '🏆',
      title: 'Certified Quality Assurance',
      description:
        'ISO 9001, ISO 14001, and IATF 16949 certifications ensure superior quality and compliance.',
    },
    {
      icon: '♻️',
      title: 'Scalable and Sustainable',
      description: 'Eco-friendly, high-volume production of flagship and budget smartphones.',
    },
    {
      icon: '👥',
      title: 'Collaborative Expertise',
      description:
        'In-house specialists optimise design and ensure efficient production with brands.',
    },
  ];

  const awards = [
    {
      title: 'National OHS Award AY 23-24',
      description:
        'Recognised for outstanding occupational health and safety practices in the large enterprise electrical consumer durables sector.',
      icon: '🏅',
      year: '2023-24',
    },
    {
      title: 'TPM Award 2024 for Manufacturing Excellence',
      description:
        'Honoured for our dedication to Total Productive Maintenance, driving operational excellence and continuous improvement.',
      icon: '⭐',
      year: '2024',
    },
    {
      title: 'ESC National Export Excellence Award 2024',
      description:
        'Secured 1st position in EMS, showcasing our commitment to delivering world-class manufacturing solutions globally.',
      icon: '🥇',
      year: '2024',
    },
  ];

  const certifications = [
    {
      title: 'ISO 9001 Certified',
      description:
        'Confirms our dedication to consistent quality, customer satisfaction, and continuous improvement in all our processes.',
      icon: '✓',
    },
    {
      title: 'ISO 14001 Certified',
      description:
        'Demonstrates our commitment to sustainable environmental practices and continuous improvement.',
      icon: '✓',
    },
    {
      title: 'ISO 27001 Certified',
      description:
        'Demonstrates our proactive approach to identifying and mitigating information security risks.',
      icon: '✓',
    },
    {
      title: 'ISO 45001 Certified',
      description:
        'Affirms our commitment to providing a safe and healthy work environment for all our employees and partners.',
      icon: '✓',
    },
    {
      title: 'ISO 50001 Certified',
      description:
        'Confirms our commitment to reducing energy costs and minimizing our environmental footprint.',
      icon: '✓',
    },
    {
      title: 'ANSI ESD S20.20',
      description:
        "Demonstrates our adherence to the industry's leading standards for electrostatic discharge control.",
      icon: '✓',
    },
    {
      title: 'VAP RBA Certified',
      description:
        'Underscores our ongoing commitment to improving social responsibility and ethical practices within our organization.',
      icon: '✓',
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
        className={`overflow-hidden transition-all duration-1000 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white ${
          heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <Container>
          <div className="min-h-[80vh] flex items-center justify-center text-center px-4">
            <div className="max-w-5xl">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-sm font-bold tracking-wide mb-6">
                  MOBILE PHONES
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                Powering Mobility, Connecting Lives
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Empowering Lives, Redefining Technology
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="#categories"
                  className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="inline-block border-2 border-white/50 hover:border-white bg-white/10 backdrop-blur-lg hover:bg-white/20 px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Categories */}
      <Section
        id="categories"
        ref={categoriesRef}
        className={`bg-gradient-to-b from-white to-slate-50 py-24 transition-all duration-1000 ${
          categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Empowering Lives, Redefining Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive mobile phone manufacturing solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productCategories.map((category, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="relative p-12 text-white h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className="text-7xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6">{category.title}</h3>
                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                      {category.description}
                    </p>
                  </div>
                  <a
                    href={category.link}
                    className="inline-block bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center group-hover:scale-105"
                  >
                    EXPLORE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engineering Excellence */}
      <Section className="bg-white py-24">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Engineered for a Connected, Smarter World
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Designing and manufacturing cutting-edge mobile solutions with in-house expertise,
              from hardware to software, delivering innovation at every step.
            </p>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section
        ref={capabilitiesRef}
        className={`bg-gradient-to-b from-slate-50 to-white py-24 transition-all duration-1000 ${
          capabilitiesVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="group p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
              >
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{cap.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Built for Scale Stats */}
      <Section
        ref={statsRef}
        className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-32 transition-all duration-1000 ${
          statsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Built for Scale</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              World-class manufacturing infrastructure powering global connectivity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {scaleStats.map((stat, i) => (
              <div
                key={i}
                className="group p-12 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 border border-white/20 hover:border-white/40 hover:bg-white/15 text-center"
              >
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-6 group-hover:scale-105 transition-all">
                  {stat.value}
                </div>
                <div className="text-xl font-bold text-blue-100 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Dixon for Mobile Phones */}
      <Section
        ref={capabilitiesRef}
        className={`bg-white py-24 transition-all duration-1000 ${
          capabilitiesVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Dixon for Mobile Phones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for end-to-end mobile manufacturing excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {whyDixon.map((item, i) => (
              <div
                key={i}
                className="group p-10 bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Honours and Milestones */}
      <Section
        ref={awardsRef}
        className={`bg-gradient-to-b from-slate-50 to-white py-24 transition-all duration-1000 ${
          awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Honours and Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition for our commitment to excellence and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <div
                key={i}
                className="group p-10 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border-2 border-amber-200 hover:border-amber-300"
              >
                <div className="text-center mb-6">
                  <div className="inline-block p-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl shadow-xl group-hover:scale-110 transition-transform">
                    <div className="text-5xl">{award.icon}</div>
                  </div>
                </div>
                <div className="text-sm font-bold text-amber-700 mb-3 text-center">
                  {award.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-amber-700 transition-colors">
                  {award.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">{award.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section
        ref={certificationsRef}
        className={`bg-white py-24 transition-all duration-1000 ${
          certificationsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Certified for Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global certifications that validate our commitment to quality and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-green-200 hover:border-green-300 hover:bg-gradient-to-br hover:from-green-100 hover:to-emerald-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors flex-1">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section
        ref={contactRef}
        id="contact"
        className={`bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 text-white py-32 transition-all duration-1000 ${
          contactVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - CTA Content */}
            <div>
              <div className="inline-block px-6 py-3 bg-blue-500/20 backdrop-blur-lg border border-blue-400/30 rounded-full text-sm font-bold tracking-wide mb-8">
                CONNECT WITH US
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
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
                  <div className="text-3xl mb-3">🏆</div>
                  <div className="text-2xl font-bold text-white mb-2">100+</div>
                  <div className="text-sm text-gray-400">Global Brands</div>
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
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  SEND MESSAGE →
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default MobilePhonesPage;
