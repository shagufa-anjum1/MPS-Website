import React from 'react';

const BenefitsPerks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Benefits & Perks
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Compensation, Wellness
            <br />& Perks
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Comprehensive benefits package designed to support your health, wealth, and happiness
          </p>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Benefits Package
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Total Rewards Program
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We invest in our people with industry-leading compensation and comprehensive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Health & Wellness',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                benefits: [
                  'Comprehensive medical insurance',
                  'Dental and vision coverage',
                  'Mental health support',
                  'Annual health checkups',
                  'Gym membership',
                ],
                color: 'red',
              },
              {
                category: 'Financial Security',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                benefits: [
                  'Competitive salary',
                  'Performance bonuses',
                  'Stock options (RSUs)',
                  'Retirement benefits (PF, Gratuity)',
                  'Life & disability insurance',
                ],
                color: 'emerald',
              },
              {
                category: 'Work-Life Balance',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                benefits: [
                  '25 days paid time off',
                  'Flexible work hours',
                  'Remote work options',
                  'Parental leave (6 months)',
                  'Sabbatical program',
                ],
                color: 'blue',
              },
              {
                category: 'Learning & Growth',
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                benefits: [
                  'Learning & development budget',
                  'Conference attendance',
                  'Certification programs',
                  'Leadership training',
                  'Mentorship opportunities',
                ],
                color: 'purple',
              },
              {
                category: 'Family Support',
                icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
                benefits: [
                  'Childcare assistance',
                  'Education support for children',
                  'Family health coverage',
                  'Adoption assistance',
                  'Elder care support',
                ],
                color: 'orange',
              },
              {
                category: 'Perks & Amenities',
                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                benefits: [
                  'Free meals & snacks',
                  'Transportation allowance',
                  'Relocation assistance',
                  'Employee discounts',
                  'Team outings & events',
                ],
                color: 'indigo',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className={`bg-${benefit.color}-100 p-4 rounded-2xl inline-block mb-6`}>
                  <svg
                    className={`w-10 h-10 text-${benefit.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-gray-900">
                  {benefit.category}
                </h3>
                <ul className="space-y-3">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-${benefit.color}-600 mr-3 font-bold`}>✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Programs */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Wellness
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Health & Wellness Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                program: 'Mental Health Support',
                desc: '24/7 counseling services, stress management workshops, and meditation sessions',
                img: 'https://picsum.photos/600/400?random=80',
              },
              {
                program: 'Fitness & Nutrition',
                desc: 'On-site gym, yoga classes, nutritionist consultations, and wellness challenges',
                img: 'https://picsum.photos/600/400?random=81',
              },
              {
                program: 'Preventive Healthcare',
                desc: 'Annual health screenings, vaccination drives, and health education programs',
                img: 'https://picsum.photos/600/400?random=82',
              },
              {
                program: 'Work-Life Balance',
                desc: 'Flexible schedules, remote work, and wellness days for personal time',
                img: 'https://picsum.photos/600/400?random=83',
              },
            ].map((wellness, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={wellness.img}
                    alt={wellness.program}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{wellness.program}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{wellness.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Perks */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Perks
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Additional Perks
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { perk: 'Free Meals', icon: '🍽️' },
              { perk: 'Transportation', icon: '🚗' },
              { perk: 'Team Events', icon: '🎉' },
              { perk: 'Learning Budget', icon: '📚' },
              { perk: 'Tech Allowance', icon: '💻' },
              { perk: 'Travel Perks', icon: '✈️' },
              { perk: 'Pet-Friendly Office', icon: '🐕' },
              { perk: 'Game Rooms', icon: '🎮' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <p className="text-xl font-black text-gray-900">{item.perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-indigo-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Investing in Our People
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-purple-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "Our employees are our greatest asset. We provide competitive compensation and
              comprehensive benefits because we believe in rewarding excellence and supporting
              personal and professional growth."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— Human Resources Team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Competitive</h4>
              <p className="text-gray-700 text-lg">Market-leading compensation</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Comprehensive</h4>
              <p className="text-gray-700 text-lg">Full benefits coverage</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Supportive</h4>
              <p className="text-gray-700 text-lg">Employee wellness focus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPerks;
