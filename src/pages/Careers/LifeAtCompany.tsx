import React from 'react';

const LifeAtCompany: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Life at Company
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Culture, Values &<br />
            Employee Experience
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Join a workplace where innovation meets purpose, and every voice matters
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                Our Culture
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
                Where Innovation Thrives
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-6">
                We foster a culture of collaboration, creativity, and continuous learning where
                every employee is empowered to make a difference.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                From flexible work arrangements to professional development opportunities, we create
                an environment where talent flourishes and careers grow.
              </p>
              <div className="mt-10 w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
                alt="Team collaboration"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our core values guide everything we do and shape our workplace culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: 'Innovation',
                desc: 'Embracing creativity and pushing boundaries',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                color: 'blue',
              },
              {
                value: 'Integrity',
                desc: 'Operating with honesty and transparency',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                color: 'emerald',
              },
              {
                value: 'Collaboration',
                desc: 'Working together to achieve excellence',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                color: 'purple',
              },
              {
                value: 'Excellence',
                desc: 'Delivering quality in everything we do',
                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                color: 'orange',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className={`bg-${item.color}-100 p-4 rounded-2xl inline-block mb-6`}>
                  <svg
                    className={`w-12 h-12 text-${item.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{item.value}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Work Environment
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Where You'll Thrive
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Flexible Work Culture',
                desc: 'Hybrid work model with flexible hours and remote work options',
                features: [
                  'Work from anywhere',
                  'Flexible schedules',
                  'Results-oriented culture',
                  'Work-life balance',
                ],
                color: 'blue',
              },
              {
                title: 'Learning & Development',
                desc: 'Continuous learning opportunities and career growth programs',
                features: [
                  'Skills training',
                  'Leadership programs',
                  'Certifications',
                  'Mentorship',
                ],
                color: 'emerald',
              },
              {
                title: 'Innovation Labs',
                desc: 'State-of-the-art facilities and cutting-edge technology',
                features: [
                  'Modern workspaces',
                  'Latest tech tools',
                  'Collaborative spaces',
                  'Innovation zones',
                ],
                color: 'purple',
              },
              {
                title: 'Inclusive Workplace',
                desc: 'Diverse and inclusive environment celebrating differences',
                features: [
                  'Equal opportunities',
                  'Diversity programs',
                  'Employee resource groups',
                  'Inclusive policies',
                ],
                color: 'orange',
              },
            ].map((env, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">{env.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{env.desc}</p>
                <ul className="space-y-3">
                  {env.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-${env.color}-600 mr-3 font-bold`}>✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stats */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-indigo-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              By the Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">35,000+</div>
              <p className="text-lg font-bold text-gray-800">Employees Worldwide</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">22%</div>
              <p className="text-lg font-bold text-gray-800">Women in Leadership</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">45+</div>
              <p className="text-lg font-bold text-gray-800">Nationalities</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">4.2/5</div>
              <p className="text-lg font-bold text-gray-800">Employee Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Hear From Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Best decision of my career. The growth opportunities and supportive culture are unmatched.',
                name: 'Priya Sharma',
                role: 'Senior Software Engineer',
                img: 'https://picsum.photos/200/200?random=70',
              },
              {
                quote:
                  'A workplace that truly values innovation and gives you the freedom to experiment and learn.',
                name: 'Rahul Verma',
                role: 'Product Manager',
                img: 'https://picsum.photos/200/200?random=71',
              },
              {
                quote:
                  'The work-life balance and inclusive environment make this an exceptional place to work.',
                name: 'Anjali Desai',
                role: 'HR Business Partner',
                img: 'https://picsum.photos/200/200?random=72',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-black text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed">
            Join our team and be part of something extraordinary
          </p>
          <button className="bg-white text-gray-900 px-12 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Explore Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default LifeAtCompany;
