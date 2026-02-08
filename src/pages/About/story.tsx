import React from 'react';

const OurStoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 1. Page Hero */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Three Decades of
            <br />
            Manufacturing Excellence
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            From humble beginnings in 1993 to India's trusted partner for global electronics brands
          </p>
        </div>
      </section>

      {/* 2. Origins / Foundation */}
      <section className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2200&q=85"
              alt="MPS Electronics founding facility - 1993"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              1993 - Where It All Began
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
              Built on Engineering Excellence
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-6">
              Established by industry veterans with 20+ years expertise, MPS Electronics started
              with a clear mission: deliver precision-engineered electronic enclosures that meet the
              stringent demands of global manufacturers.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              What began as a single facility focused on injection molding has evolved into India's
              leading electronics body manufacturing enterprise—built deliberately, one quality
              component at a time.
            </p>
            <div className="mt-10 w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 3. Growth Timeline */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Three Decades of Deliberate Growth
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Not built overnight—scaled responsibly through operational excellence
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                year: '1993',
                title: 'Foundation',
                desc: 'Started with precision injection molding for domestic electronics brands',
              },
              {
                year: '2005',
                title: 'Global Partnerships',
                desc: 'Secured first international clients, proving India-scale capability',
              },
              {
                year: '2015',
                title: 'Multi-Facility Expansion',
                desc: 'Scaled to 12+ state-of-the-art plants with advanced automation',
              },
              {
                year: '2026',
                title: 'Industry Leadership',
                desc: '150+ global clients, 35K+ employees, unmatched manufacturing scale',
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                  {milestone.year}
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Manufacturing Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                Our Approach
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
                Engineering-First Manufacturing
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                We don't just manufacture—we engineer solutions. Every enclosure is designed with
                precision tolerances, thermal management, and real-world durability in mind.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Zero-Defect Culture</h4>
                    <p className="text-gray-700">
                      100% inspection protocols at every production stage
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-emerald-300 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Process Optimization</h4>
                    <p className="text-gray-700">
                      Continuous improvement driven by data and lean principles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-300 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">People-Centric</h4>
                    <p className="text-gray-700">
                      35K+ skilled workforce empowered with continuous training
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2200&q=85"
                alt="MPS Electronics quality control and precision engineering"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-3xl -z-10 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Capabilities - Horizontal Scroll */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-bold uppercase tracking-wider rounded-full mb-6 border border-blue-400/30">
              Our Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
              20+ Advanced Manufacturing Processes
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Injection molding to final inspection—complete in-house capabilities
            </p>
          </div>

          <div className="relative">
            <div
              className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Capability Cards */}
              {[
                {
                  img: 'photo-1565120130276-dfbd9a7a3ad7',
                  title: 'Injection Molding',
                  desc: 'High-precision plastic enclosure production',
                },
                {
                  img: 'photo-1565098772267-60af42b81ef2',
                  title: 'CNC Machining',
                  desc: 'Precision metal component fabrication',
                },
                {
                  img: 'photo-1581092160607-ee67e7d149e7',
                  title: 'Die Casting',
                  desc: 'Aluminum & zinc alloy body manufacturing',
                },
                {
                  img: 'photo-1581091226825-a6a2a5aee158',
                  title: 'Assembly Lines',
                  desc: 'Automated production workflows',
                },
                {
                  img: 'photo-1532094349884-543bc11b234d',
                  title: 'Quality Testing',
                  desc: 'Rigorous inspection & validation',
                },
                {
                  img: 'photo-1588415025481-17d6c4f50c4d',
                  title: 'Laser Cutting',
                  desc: 'Precision metal sheet fabrication',
                },
                {
                  img: 'photo-1621905251918-48416bd8575a',
                  title: 'Surface Treatment',
                  desc: 'Coating, plating & finishing',
                },
                {
                  img: 'photo-1581092160562-40aa08e78837',
                  title: 'Robotic Welding',
                  desc: 'Automated high-precision joining',
                },
                {
                  img: 'photo-1584448062084-75ad6a5aa8b3',
                  title: 'Tool & Die Making',
                  desc: 'Custom mold design & fabrication',
                },
                {
                  img: 'photo-1513828583688-c52646db42da',
                  title: 'Powder Coating',
                  desc: 'Durable & eco-friendly finish',
                },
                {
                  img: 'photo-1581092921461-eab62e97a780',
                  title: 'Metal Stamping',
                  desc: 'High-volume component production',
                },
                {
                  img: 'photo-1606085831792-6f56b0c87e2e',
                  title: '3D Prototyping',
                  desc: 'Rapid design validation & testing',
                },
                {
                  img: 'photo-1518770660439-4636190af475',
                  title: 'PCB Assembly',
                  desc: 'Electronic component integration',
                },
                {
                  img: 'photo-1586528116311-ad8dd3c8310d',
                  title: 'Smart Warehouse',
                  desc: 'Automated storage & logistics',
                },
                {
                  img: 'photo-1581091870621-191a66d463d3',
                  title: 'Extrusion Molding',
                  desc: 'Continuous profile manufacturing',
                },
                {
                  img: 'photo-1581093458791-9d42e2370e3b',
                  title: 'Paint Booth',
                  desc: 'Precision spray painting facility',
                },
                {
                  img: 'photo-1587293852726-70cdb56c2866',
                  title: 'Material Handling',
                  desc: 'Automated conveyor systems',
                },
                {
                  img: 'photo-1581092582537-48e08cce1e7b',
                  title: 'Vacuum Forming',
                  desc: 'Thermoforming for complex shapes',
                },
                {
                  img: 'photo-1581092918056-0c4c3acd3789',
                  title: 'Ultrasonic Welding',
                  desc: 'Precision plastic bonding technology',
                },
                {
                  img: 'photo-1581092160497-a5a5b2e3e5c3',
                  title: 'Final Inspection',
                  desc: '100% quality verification',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 md:w-96 snap-start group">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={`https://images.unsplash.com/${item.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85`}
                      alt={item.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-black text-white drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-200 mt-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Scroll to explore all capabilities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* 6. R&D Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Innovation Hub
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
              Research & Development
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Engineering precision enclosures for tomorrow's electronics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-gray-900 leading-tight">
                Designing Next-Generation Electronic Enclosures
              </h3>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our R&D centers specialize in developing innovative plastic and metal enclosures for
                consumer electronics, telecommunications devices, and industrial equipment. We
                engineer precision body components that combine durability, aesthetics, and
                functionality.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                From injection molding to die-casting, our dedicated R&D teams continuously innovate
                in materials science, thermal management, and ergonomic design—delivering enclosure
                solutions that protect and enhance electronic devices across industries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Advanced Material Engineering
                    </h4>
                    <p className="text-gray-700">
                      High-grade plastics, aluminum alloys, and composite materials for durability
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Precision Tooling & Molding
                    </h4>
                    <p className="text-gray-700">
                      Custom tool design for complex geometries and tight tolerances
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Thermal & Impact Resistance
                    </h4>
                    <p className="text-gray-700">
                      Enclosures engineered for heat dissipation and rugged protection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
                alt="Electronics enclosure manufacturing - injection molding"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl -z-10 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">6</div>
              <p className="text-lg font-bold text-gray-800">Dedicated R&D Centers</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">150+</div>
              <p className="text-lg font-bold text-gray-800">Design Engineers</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">800+</div>
              <p className="text-lg font-bold text-gray-800">Enclosure Designs</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">50+</div>
              <p className="text-lg font-bold text-gray-800">Material Variants</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quality Certifications */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Quality Assurance
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Globally Certified Manufacturing
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Adherence to international standards across all facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cert: 'ISO 9001:2015', desc: 'Quality Management Systems' },
              { cert: 'ISO 14001:2015', desc: 'Environmental Management' },
              { cert: 'IATF 16949', desc: 'Automotive Quality Standards' },
              { cert: 'ISO 45001', desc: 'Occupational Health & Safety' },
              { cert: 'RoHS & REACH', desc: 'Material Compliance' },
              { cert: 'UL / CE / FCC', desc: 'Product Certifications' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl hover:border-green-400 hover:shadow-xl transition-all duration-500 text-center"
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

      {/* 8. Long-term Partnerships */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
            Our Commitment
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
            Built for Long-Term Partnerships
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-12 font-semibold">
            "We don't chase short-term wins. Our focus has always been building enduring
            relationships through operational excellence, consistent quality, and unwavering
            reliability."
          </p>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            This philosophy has helped us retain clients for 15+ years on average—a testament to
            trust earned through three decades of delivering on promises, batch after batch.
          </p>
        </div>
      </section>

      {/* 9. Leadership Philosophy */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Leadership Perspective
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Guided by Experience, Driven by Excellence
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "Our focus has always been building long-term partnerships through operational
              excellence and trust—leveraging 30+ years of hard-earned industry expertise to deliver
              at global scale."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— MPS Electronics Leadership Team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Experience</h4>
              <p className="text-gray-700 text-lg">
                Decades of manufacturing wisdom guiding every decision
              </p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Reliability</h4>
              <p className="text-gray-700 text-lg">
                Consistent delivery, batch after batch, year after year
              </p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Innovation</h4>
              <p className="text-gray-700 text-lg">
                Continuous improvement without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default OurStoryPage;
