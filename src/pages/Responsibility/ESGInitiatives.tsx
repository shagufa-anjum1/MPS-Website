import React from 'react';

const ESGInitiatives: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            ESG Initiatives
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Environmental, Social &<br />
            Governance Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Integrated ESG framework driving sustainable value creation for all stakeholders
          </p>
        </div>
      </section>

      {/* ESG Framework */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Framework
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Comprehensive ESG Strategy
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Building a sustainable business through environmental stewardship, social
              responsibility, and ethical governance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Environmental */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-green-200">
              <div className="bg-green-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">Environmental</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Climate action, resource efficiency, and circular economy practices
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Carbon neutrality roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Renewable energy adoption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Zero waste initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Water conservation programs</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-200">
              <div className="bg-blue-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">Social</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Employee welfare, community engagement, and human rights protection
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Employee health & safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Diversity & inclusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Community development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Skill development programs</span>
                </li>
              </ul>
            </div>

            {/* Governance */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-purple-200">
              <div className="bg-purple-100 p-4 rounded-2xl inline-block mb-6">
                <svg
                  className="w-12 h-12 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">Governance</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ethical leadership, transparency, and accountability at all levels
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 font-bold">✓</span>
                  <span>Board independence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 font-bold">✓</span>
                  <span>Ethics & compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 font-bold">✓</span>
                  <span>Risk management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 font-bold">✓</span>
                  <span>Stakeholder engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Programs
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Strategic ESG Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Climate Action Plan',
                desc: 'Science-based targets aligned with Paris Agreement for net-zero emissions',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                color: 'green',
                impact: 'Target: 50% reduction by 2030',
              },
              {
                title: 'Diversity & Inclusion',
                desc: 'Equal opportunity workplace with 30% women in leadership by 2028',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                color: 'blue',
                impact: 'Current: 22% women leaders',
              },
              {
                title: 'Supplier Sustainability',
                desc: 'ESG standards for 100% of strategic suppliers with regular audits',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                color: 'emerald',
                impact: '85% suppliers compliant',
              },
              {
                title: 'Community Investment',
                desc: '2% of PAT dedicated to education, healthcare, and skill development',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                color: 'orange',
                impact: '₹35 Cr invested in FY25',
              },
              {
                title: 'Ethics & Compliance',
                desc: 'Zero-tolerance policy for corruption with whistle-blower protection',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                color: 'purple',
                impact: '100% employee training',
              },
              {
                title: 'Workplace Safety',
                desc: 'Zero harm culture with industry-leading safety protocols and training',
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                color: 'red',
                impact: '0.12 LTIFR (best-in-class)',
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className={`bg-${program.color}-100 p-4 rounded-2xl inline-block mb-6`}>
                  <svg
                    className={`w-10 h-10 text-${program.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={program.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{program.desc}</p>
                <div
                  className={`inline-block px-4 py-2 bg-${program.color}-100 text-${program.color}-700 font-bold rounded-full text-sm`}
                >
                  {program.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Performance Metrics */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Performance
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              FY 2025 ESG Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-green-600 mb-4">28%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Carbon Reduction</p>
              <p className="text-sm text-gray-600">vs. 2020 baseline</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">35K+</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Employees</p>
              <p className="text-sm text-gray-600">22% women workforce</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">100%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Board Independence</p>
              <p className="text-sm text-gray-600">4 independent directors</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">50K+</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Lives Impacted</p>
              <p className="text-sm text-gray-600">Through CSR programs</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl border-2 border-gray-200">
            <h3 className="text-3xl font-black mb-8 text-gray-900 text-center">
              ESG Ratings & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { rating: 'MSCI ESG Rating', score: 'AA', desc: 'Industry Leader' },
                { rating: 'CDP Climate Score', score: 'B', desc: 'Management Level' },
                { rating: 'S&P Global ESG', score: '72/100', desc: 'Top Quartile' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                    {item.rating}
                  </p>
                  <p className="text-4xl font-black text-blue-600 mb-2">{item.score}</p>
                  <p className="text-gray-700 font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESG Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-indigo-50 to-purple-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Integrated Value Creation
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "ESG isn't a separate initiative—it's embedded in our business strategy. Every
              decision balances financial performance with environmental stewardship, social
              responsibility, and ethical governance."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— ESG Leadership Committee</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-green-600 mb-3">Environmental</h4>
              <p className="text-gray-700 text-lg">Planet-positive operations</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Social</h4>
              <p className="text-gray-700 text-lg">People-centric culture</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Governance</h4>
              <p className="text-gray-700 text-lg">Ethical leadership</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESGInitiatives;
