import React from 'react';

const B2BSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            B2B Solutions
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Enterprise-Grade
            <br />
            Business Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Tailored solutions to transform your business operations and drive growth
          </p>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Solutions
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology and strategic insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Services */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="bg-blue-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Cloud Services</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Scalable cloud infrastructure and services to power your digital transformation
              </p>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>Cloud Storage & Computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>SaaS Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>Data Analytics</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Mobility */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="bg-green-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                Enterprise Mobility
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mobile device management and enterprise mobility solutions for your workforce
              </p>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>Device Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>Security Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>Mobile App Development</span>
                </li>
              </ul>
            </div>

            {/* IoT Solutions */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="bg-purple-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-10 h-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">IoT Solutions</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Connect and manage your devices with our comprehensive IoT platform
              </p>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 font-bold">•</span>
                  <span>Smart Building Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 font-bold">•</span>
                  <span>Industrial IoT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 font-bold">•</span>
                  <span>Asset Tracking</span>
                </li>
              </ul>
            </div>

            {/* Digital Signage */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="bg-red-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                Digital Signage
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Professional display solutions for retail, corporate, and public spaces
              </p>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Commercial Displays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Content Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Interactive Kiosks</span>
                </li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="bg-yellow-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-10 h-10 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Cybersecurity</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Comprehensive security solutions to protect your business assets
              </p>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">•</span>
                  <span>Threat Detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">•</span>
                  <span>Data Protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">•</span>
                  <span>Compliance Management</span>
                </li>
              </ul>
            </div>

            {/* AI & Analytics */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="bg-indigo-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-10 h-10 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">AI & Analytics</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Harness the power of AI and data analytics for business intelligence
              </p>
              <ul className="text-gray-600 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Predictive Analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Business Intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 font-bold">•</span>
                  <span>Machine Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Reach
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Delivering tailored solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Healthcare',
              'Retail',
              'Manufacturing',
              'Finance',
              'Education',
              'Hospitality',
              'Transportation',
              'Government',
            ].map((industry, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-white border-2 border-gray-200 rounded-3xl hover:border-blue-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <h3 className="font-black text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stats */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Driving Business Success
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">500+</div>
              <p className="text-lg font-bold text-gray-800">Enterprise Clients</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">98%</div>
              <p className="text-lg font-bold text-gray-800">Client Satisfaction</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">24/7</div>
              <p className="text-lg font-bold text-gray-800">Support Available</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">50+</div>
              <p className="text-lg font-bold text-gray-800">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Commitment
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Partnership-Driven Success
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "We don't just provide solutions—we build lasting partnerships. Our enterprise
              approach combines deep industry expertise with innovative technology to deliver
              measurable business outcomes."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— Enterprise Solutions Team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Consultation</h4>
              <p className="text-gray-700 text-lg">Understanding your unique business challenges</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Implementation</h4>
              <p className="text-gray-700 text-lg">Seamless deployment with minimal disruption</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Support</h4>
              <p className="text-gray-700 text-lg">Ongoing optimization and expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 px-4 md:px-8 lg:px-16 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-6 border border-white/30">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 drop-shadow-2xl">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our enterprise solutions team to discuss your specific needs and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-10 py-4 rounded-xl text-lg font-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
              Request Demo
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-xl text-lg font-black hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2BSolutions;
