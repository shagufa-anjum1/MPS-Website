import React from 'react';

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Sustainability
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Environmental
            <br />
            Commitments & Goals
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Building a sustainable future through responsible manufacturing and green initiatives
          </p>
        </div>
      </section>

      {/* Sustainability Vision */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2200&q=85"
                alt="Sustainability initiatives"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                Our Vision
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
                Net Zero by 2045
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-6">
                We're committed to achieving carbon neutrality across all operations through
                renewable energy adoption, waste reduction, and circular economy practices.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our comprehensive sustainability roadmap focuses on reducing environmental impact
                while maintaining operational excellence—proving that profitability and planet care
                can coexist.
              </p>
              <div className="mt-10 w-24 h-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Key Initiatives
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Our Sustainability Pillars
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive environmental programs across all operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Renewable Energy',
                desc: '100% renewable electricity across all manufacturing facilities by 2030',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                color: 'yellow',
                stats: '65% achieved',
              },
              {
                title: 'Water Conservation',
                desc: 'Zero liquid discharge systems and rainwater harvesting at all plants',
                icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
                color: 'blue',
                stats: '40% reduction',
              },
              {
                title: 'Waste Management',
                desc: 'Zero waste to landfill through recycling and circular economy practices',
                icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
                color: 'green',
                stats: '82% recycled',
              },
              {
                title: 'Carbon Footprint',
                desc: 'Science-based targets for Scope 1, 2, and 3 emissions reduction',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                color: 'emerald',
                stats: '28% reduction',
              },
            ].map((initiative, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className={`bg-${initiative.color}-100 p-4 rounded-2xl inline-block mb-6`}>
                  <svg
                    className={`w-10 h-10 text-${initiative.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={initiative.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                  {initiative.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{initiative.desc}</p>
                <div
                  className={`inline-block px-4 py-2 bg-${initiative.color}-100 text-${initiative.color}-700 font-bold rounded-full`}
                >
                  {initiative.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Targets */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              2030 Targets
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Our Environmental Goals
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-green-600 mb-4">50%</div>
              <p className="text-lg font-bold text-gray-800">Carbon Reduction</p>
              <p className="text-sm text-gray-600 mt-2">vs. 2020 baseline</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">100%</div>
              <p className="text-lg font-bold text-gray-800">Renewable Energy</p>
              <p className="text-sm text-gray-600 mt-2">All facilities</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">Zero</div>
              <p className="text-lg font-bold text-gray-800">Waste to Landfill</p>
              <p className="text-sm text-gray-600 mt-2">Complete circularity</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">60%</div>
              <p className="text-lg font-bold text-gray-800">Water Reduction</p>
              <p className="text-sm text-gray-600 mt-2">Per unit production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Green Manufacturing */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                Green Manufacturing
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
                Sustainable Production Practices
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Solar Power Plants',
                    desc: '45 MW installed capacity across facilities generating 25% of energy needs',
                  },
                  {
                    title: 'Energy Efficiency',
                    desc: 'LED lighting, variable frequency drives, and heat recovery systems',
                  },
                  {
                    title: 'Green Buildings',
                    desc: 'LEED-certified facilities with natural ventilation and rainwater harvesting',
                  },
                  {
                    title: 'Eco-Friendly Materials',
                    desc: 'Recycled plastics and biodegradable packaging in product manufacturing',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-600"
                  >
                    <h4 className="text-xl font-black text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
                alt="Green manufacturing facility"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Certifications
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Environmental Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cert: 'ISO 14001:2015', desc: 'Environmental Management Systems' },
              { cert: 'ISO 50001', desc: 'Energy Management Systems' },
              { cert: 'LEED Certification', desc: 'Green Building Standards' },
              { cert: 'Zero Waste to Landfill', desc: 'Waste Management Certification' },
              { cert: 'Carbon Trust Standard', desc: 'Carbon Footprint Verification' },
              { cert: 'Water Stewardship', desc: 'Responsible Water Use Certification' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl hover:border-green-400 hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.cert}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-emerald-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Commitment
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Planet Over Profit
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "Sustainability isn't just a corporate goal—it's our responsibility to future
              generations. Every decision we make considers environmental impact, proving that
              business success and planetary health go hand in hand."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— Sustainability Leadership Team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-green-600 mb-3">Responsibility</h4>
              <p className="text-gray-700 text-lg">Environmental stewardship in all we do</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Innovation</h4>
              <p className="text-gray-700 text-lg">Green technologies for sustainable growth</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Transparency</h4>
              <p className="text-gray-700 text-lg">Honest reporting on progress and challenges</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
