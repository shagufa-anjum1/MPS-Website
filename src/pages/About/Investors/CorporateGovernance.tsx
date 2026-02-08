import React from 'react';

const CorporateGovernance: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Corporate Governance
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Board Structure &<br />
            Governance Policies
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Committed to the highest standards of corporate governance and ethical business
            practices
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Board of Directors
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experienced leadership guiding strategic vision and oversight
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Chairman & Independent Director',
                experience: '35+ years in manufacturing',
                img: 'https://picsum.photos/400/500?random=50',
              },
              {
                name: 'Priya Sharma',
                role: 'Managing Director & CEO',
                experience: '28+ years in operations',
                img: 'https://picsum.photos/400/500?random=51',
              },
              {
                name: 'Amit Patel',
                role: 'Executive Director & CFO',
                experience: '22+ years in finance',
                img: 'https://picsum.photos/400/500?random=52',
              },
              {
                name: 'Dr. Meera Reddy',
                role: 'Independent Director',
                experience: '30+ years in technology',
                img: 'https://picsum.photos/400/500?random=53',
              },
              {
                name: 'Vikram Singh',
                role: 'Independent Director',
                experience: '32+ years in corporate law',
                img: 'https://picsum.photos/400/500?random=54',
              },
              {
                name: 'Sunita Desai',
                role: 'Independent Director',
                experience: '25+ years in governance',
                img: 'https://picsum.photos/400/500?random=55',
              },
            ].map((director, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={director.img}
                    alt={director.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{director.name}</h3>
                  <p className="text-lg font-bold text-blue-600 mb-3">{director.role}</p>
                  <p className="text-gray-600">{director.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Committees */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Committees
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Board Committees
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized committees ensuring effective governance and oversight
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Audit Committee',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                members: '4 Independent Directors',
                responsibilities: [
                  'Financial statement oversight',
                  'Internal controls review',
                  'External auditor appointment',
                  'Risk management framework',
                ],
                color: 'blue',
              },
              {
                name: 'Nomination & Remuneration Committee',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                members: '3 Independent Directors',
                responsibilities: [
                  'Director nominations',
                  'Compensation policy',
                  'Performance evaluation',
                  'Succession planning',
                ],
                color: 'emerald',
              },
              {
                name: 'Stakeholder Relationship Committee',
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                members: '3 Directors (2 Independent)',
                responsibilities: [
                  'Shareholder grievance resolution',
                  'Investor relations',
                  'Communication oversight',
                  'Compliance monitoring',
                ],
                color: 'purple',
              },
              {
                name: 'Corporate Social Responsibility Committee',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                members: '3 Directors',
                responsibilities: [
                  'CSR policy formulation',
                  'Budget allocation',
                  'Project monitoring',
                  'Impact assessment',
                ],
                color: 'green',
              },
            ].map((committee, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className={`bg-${committee.color}-100 p-4 rounded-2xl inline-block mb-6`}>
                  <svg
                    className={`w-10 h-10 text-${committee.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={committee.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                  {committee.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6 font-bold">{committee.members}</p>
                <div className="space-y-3">
                  {committee.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className={`text-${committee.color}-600 mr-2 font-bold`}>•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Policies */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Policies
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Governance Framework
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive policies ensuring transparency and accountability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Code of Conduct',
                desc: 'Ethical guidelines for directors and employees',
                size: '1.2 MB',
              },
              {
                title: 'Whistle Blower Policy',
                desc: 'Protected reporting mechanism for concerns',
                size: '850 KB',
              },
              {
                title: 'Related Party Transaction Policy',
                desc: 'Framework for managing conflicts of interest',
                size: '950 KB',
              },
              {
                title: 'Dividend Distribution Policy',
                desc: 'Guidelines for shareholder returns',
                size: '720 KB',
              },
              {
                title: 'Risk Management Policy',
                desc: 'Enterprise-wide risk assessment framework',
                size: '1.5 MB',
              },
              {
                title: 'Insider Trading Policy',
                desc: 'Regulations for securities trading compliance',
                size: '1.1 MB',
              },
            ].map((policy, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-emerald-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-emerald-100 p-4 rounded-2xl inline-block mb-6">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600 mb-4">{policy.desc}</p>
                <p className="text-sm text-gray-500 mb-4">{policy.size} • PDF</p>
                <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                  Download Policy
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Compliance
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Regulatory Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-gray-900">
                Standards & Certifications
              </h3>
              <div className="space-y-6">
                {[
                  { cert: 'Sarbanes-Oxley Act (SOX)', status: 'Compliant' },
                  { cert: 'Securities Exchange Board of India (SEBI)', status: 'Compliant' },
                  { cert: 'Companies Act 2013', status: 'Compliant' },
                  { cert: 'Listing Regulations', status: 'Compliant' },
                  { cert: 'Environmental Regulations', status: 'Certified' },
                  { cert: 'Data Protection & Privacy Laws', status: 'Compliant' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="text-lg font-bold text-gray-900">{item.cert}</span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 font-bold rounded-full text-sm">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
                alt="Corporate Governance"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Commitment to Excellence
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "Our governance framework is built on transparency, accountability, and ethical
              conduct—ensuring we deliver sustainable value to all stakeholders while maintaining
              the highest standards of corporate behavior."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— Board of Directors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Transparency</h4>
              <p className="text-gray-700 text-lg">Open communication with all stakeholders</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Accountability</h4>
              <p className="text-gray-700 text-lg">Responsibility for decisions and actions</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Ethics</h4>
              <p className="text-gray-700 text-lg">Unwavering commitment to integrity</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateGovernance;
