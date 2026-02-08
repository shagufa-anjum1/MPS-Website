// src/pages/About/legacy.tsx - Clean Legacy Page with Image + Contact Form Layout
import React from 'react';

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
  const [formData, setFormData] = React.useState({
    enquiryType: '',
    country: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });

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

  const timelineMilestones = [
    {
      year: '1993',
      title: 'Foundation',
      description:
        'Established with a vision to deliver precision-engineered electronic enclosures',
    },
    {
      year: '2000',
      title: 'Capacity Expansion',
      description: 'Scaled production capabilities with advanced injection molding technology',
    },
    {
      year: '2005',
      title: 'Global Partnerships',
      description: 'Secured first international clients from Europe and Asia',
    },
    {
      year: '2012',
      title: 'R&D Centers',
      description: 'Launched dedicated R&D facilities for material science and design innovation',
    },
    {
      year: '2015',
      title: 'Multi-Facility Network',
      description: 'Scaled to 12+ state-of-the-art manufacturing plants across India',
    },
    {
      year: '2020',
      title: 'Sustainability Initiative',
      description: 'Launched green manufacturing program targeting net-zero operations by 2030',
    },
    {
      year: '2024',
      title: 'South India Expansion',
      description: 'Opened largest facility in Chennai serving automotive and telecom sectors',
    },
    {
      year: '2026',
      title: 'Industry Leadership',
      description: 'Serving 150+ global clients with 35K+ employees across 24 facilities',
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
    'China',
    'South Korea',
    'Other',
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-6 border border-white/30">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
            A Legacy of Excellence, Innovation, and Lasting Impact
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
            From a single facility to India's trusted manufacturing partner
          </p>
        </div>
      </section>

      {/* Journey Introduction */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A journey of innovation and excellence
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              From a single product line to a diversified industry leader, our journey is built on
              innovation, excellence, and trust. Explore the milestones that have shaped our legacy
              and continue to drive us toward a smarter, more connected future.
            </p>
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {timelineMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group hover:bg-white p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-blue-200 hover:shadow-lg"
                >
                  {/* Year */}
                  <div className="flex-shrink-0 w-20">
                    <div className="text-xl font-black text-blue-600">{milestone.year}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 border-l-2 border-gray-200 pl-6 group-hover:border-blue-400 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Section - Left Form + Right Image */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-lg text-gray-700 font-semibold mb-3">Let's build together!</p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work closely with leading global and domestic brands to deliver reliable,
              cost-effective, and scalable manufacturing solutions.
            </p>
          </div>

          {/* Two Column Layout - Form Left + Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 md:p-10 rounded-3xl border-2 border-gray-200 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Enquiry Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Enquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Enquiry Type</option>
                    <option value="manufacturing">Manufacturing Partnerships</option>
                    <option value="vendor">Vendor/Supply Chain</option>
                    <option value="export">Export Enquiry</option>
                    <option value="hr">HR & Careers</option>
                  </select>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-base uppercase tracking-wider"
                >
                  SEND
                </button>
              </form>
            </div>

            {/* Right Column - Image */}
            <div className="relative group hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=85"
                alt="Contact MPS Electronics - Manufacturing Partnership"
                className="w-full h-[700px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Optional: Add info cards overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-black text-gray-900 mb-3">Quick Response</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">24-48 Hours</p>
                      <p className="text-xs text-gray-600">Response Time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">150+ Partners</p>
                      <p className="text-xs text-gray-600">Global Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default LegacyPage;
