import React from 'react';

const CommunityImpact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Community Impact
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Social Responsibility
            <br />& Outreach
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Empowering communities through education, healthcare, and sustainable livelihood
            programs
          </p>
        </div>
      </section>

      {/* CSR Focus Areas */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Focus Areas
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Our CSR Pillars
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategic programs creating lasting impact in communities where we operate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Education',
                desc: 'Quality education access for underprivileged children',
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                color: 'blue',
                stat: '12,500 students',
              },
              {
                title: 'Healthcare',
                desc: 'Primary healthcare and medical camps in rural areas',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                color: 'red',
                stat: '45,000 beneficiaries',
              },
              {
                title: 'Skill Development',
                desc: 'Vocational training for employment and entrepreneurship',
                icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                color: 'emerald',
                stat: '8,200 trained',
              },
              {
                title: 'Women Empowerment',
                desc: 'Self-help groups and economic independence programs',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                color: 'purple',
                stat: '3,800 women',
              },
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 text-center"
              >
                <div className={`bg-${area.color}-100 p-4 rounded-2xl inline-block mb-6`}>
                  <svg
                    className={`w-12 h-12 text-${area.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={area.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{area.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{area.desc}</p>
                <div
                  className={`inline-block px-4 py-2 bg-${area.color}-100 text-${area.color}-700 font-bold rounded-full`}
                >
                  {area.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Impact Stories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Transforming Lives
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Learning Centers',
                location: 'Uttar Pradesh Villages',
                desc: 'Established 25 digital learning centers providing computer education to 5,000+ rural students',
                img: 'https://picsum.photos/600/400?random=60',
              },
              {
                title: 'Mobile Health Clinics',
                location: 'Rural Maharashtra',
                desc: 'Monthly medical camps reaching 12,000 patients annually with free diagnostics and medicines',
                img: 'https://picsum.photos/600/400?random=61',
              },
              {
                title: 'Skill Training Institutes',
                location: 'Tamil Nadu & Karnataka',
                desc: '6 vocational training centers enabling 2,500+ youth to secure employment annually',
                img: 'https://picsum.photos/600/400?random=62',
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-full mb-4">
                    {story.location}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{story.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{story.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                Our Programs
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
                Sustainable Community Development
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8">
                Long-term programs creating self-sufficient communities with improved quality of
                life
              </p>
              <div className="space-y-6">
                {[
                  { program: 'Scholarship Programs', count: '1,200 annual scholarships' },
                  { program: 'Sanitation Projects', count: '150 villages covered' },
                  { program: 'Water Conservation', count: '80 rainwater harvesting systems' },
                  { program: 'Solar Electrification', count: '45 villages powered' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg"
                  >
                    <span className="text-xl font-black text-gray-900">{item.program}</span>
                    <span className="text-lg font-bold text-blue-600">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
                alt="Community development"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Investment */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Investment
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              CSR Spending FY 2025
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">₹35 Cr</div>
              <p className="text-lg font-bold text-gray-800">Total CSR Spend</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">2.1%</div>
              <p className="text-lg font-bold text-gray-800">% of PAT</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">50K+</div>
              <p className="text-lg font-bold text-gray-800">Lives Impacted</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">180+</div>
              <p className="text-lg font-bold text-gray-800">Villages Reached</p>
            </div>
          </div>

          <div className="bg-white p-12 rounded-3xl border-2 border-gray-200">
            <h3 className="text-3xl font-black mb-8 text-gray-900 text-center">
              Spending Allocation
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { category: 'Education', percent: '40%', amount: '₹14 Cr' },
                { category: 'Healthcare', percent: '30%', amount: '₹10.5 Cr' },
                { category: 'Skill Development', percent: '20%', amount: '₹7 Cr' },
                { category: 'Others', percent: '10%', amount: '₹3.5 Cr' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl"
                >
                  <p className="text-4xl font-black text-orange-600 mb-2">{item.percent}</p>
                  <p className="text-lg font-bold text-gray-900 mb-2">{item.category}</p>
                  <p className="text-sm text-gray-600">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Community-First Philosophy
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-orange-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "Our success is inseparable from the prosperity of communities around us. We invest
              not just in infrastructure, but in people—empowering them with education, skills, and
              opportunities for a better future."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— CSR & Community Relations Team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-orange-600 mb-3">Education</h4>
              <p className="text-gray-700 text-lg">Foundation for lasting change</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Healthcare</h4>
              <p className="text-gray-700 text-lg">Access to quality medical care</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Livelihoods</h4>
              <p className="text-gray-700 text-lg">Economic self-sufficiency</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityImpact;
