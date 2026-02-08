import React from 'react';

const InnovationHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Innovation Hub
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Pioneering Tomorrow's
            <br />
            Technology
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Cutting-edge research and development driving the future of innovation
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Research
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Innovation Research Areas
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Exploring breakthrough technologies that shape the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 p-4 rounded-2xl mr-6 group-hover:bg-purple-200 transition-colors">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                    AI & Machine Learning
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Developing intelligent systems that learn and adapt to enhance user experiences
                    across all our products
                  </p>
                </div>
              </div>
            </div>

            {/* Sustainable Technology */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-4 rounded-2xl mr-6 group-hover:bg-green-200 transition-colors">
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                    Sustainable Technology
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Creating eco-friendly solutions that reduce environmental impact while
                    maintaining performance
                  </p>
                </div>
              </div>
            </div>

            {/* 5G & Connectivity */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-4 rounded-2xl mr-6 group-hover:bg-blue-200 transition-colors">
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
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                    5G & Connectivity
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Advancing next-generation wireless technologies for faster, more reliable
                    connections
                  </p>
                </div>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-4 rounded-2xl mr-6 group-hover:bg-indigo-200 transition-colors">
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                    Quantum Computing
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Exploring quantum technologies to solve complex problems beyond classical
                    computing capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Innovation Labs */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Global Presence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Innovation Labs Worldwide
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategic research centers across the globe driving breakthrough innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://picsum.photos/400/300?random=40"
                  alt="Silicon Valley Lab"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">Silicon Valley, USA</h3>
              <p className="text-lg text-gray-600">AI & Software Innovation</p>
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://picsum.photos/400/300?random=41"
                  alt="Seoul Lab"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">Seoul, South Korea</h3>
              <p className="text-lg text-gray-600">Hardware & Semiconductors</p>
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://picsum.photos/400/300?random=42"
                  alt="Bangalore Lab"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">Bangalore, India</h3>
              <p className="text-lg text-gray-600">Software & Cloud Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Stats */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Innovation by Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">6</div>
              <p className="text-lg font-bold text-gray-800">R&D Centers</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">150+</div>
              <p className="text-lg font-bold text-gray-800">Design Engineers</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">800+</div>
              <p className="text-lg font-bold text-gray-800">Innovations</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">50+</div>
              <p className="text-lg font-bold text-gray-800">Patents Filed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Innovation Through Collaboration
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-purple-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "True innovation emerges at the intersection of brilliant minds, cutting-edge
              technology, and a relentless pursuit of excellence. We create the future by empowering
              our teams to think beyond boundaries."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— Chief Innovation Officer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Research</h4>
              <p className="text-gray-700 text-lg">Deep exploration of emerging technologies</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-indigo-600 mb-3">Development</h4>
              <p className="text-gray-700 text-lg">Rapid prototyping and iterative testing</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Implementation</h4>
              <p className="text-gray-700 text-lg">Seamless integration into products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 px-4 md:px-8 lg:px-16 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-6 border border-white/30">
            Join Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 drop-shadow-2xl">
            Join Our Innovation Journey
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented researchers and engineers to push the boundaries of
            technology
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-xl text-lg font-black hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
            Explore Careers
          </button>
        </div>
      </section>
    </div>
  );
};

export default InnovationHub;
