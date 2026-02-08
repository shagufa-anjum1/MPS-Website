import React from 'react';

const PressReleases: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Press Releases
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Latest Company
            <br />
            Announcements
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Stay updated with our official news, milestones, and corporate updates
          </p>
        </div>
      </section>

      {/* Recent Press Releases */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Latest News
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Recent Press Releases
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                date: 'February 5, 2026',
                category: 'Financial Results',
                title: 'MPS Electronics Reports Record Q4 FY25 Results with 18% Revenue Growth',
                excerpt:
                  'Company achieves ₹5,240 Cr revenue with strong performance across all business segments',
                readTime: '5 min read',
              },
              {
                date: 'January 28, 2026',
                category: 'Product Launch',
                title: 'Introducing Next-Gen Smart Home Solutions with AI Integration',
                excerpt:
                  'New product line featuring advanced IoT capabilities and seamless home automation',
                readTime: '4 min read',
              },
              {
                date: 'January 15, 2026',
                category: 'Partnership',
                title: 'Strategic Partnership with Global Tech Leader for Innovation Hub',
                excerpt:
                  'Collaboration aims to accelerate R&D and bring cutting-edge products to market faster',
                readTime: '6 min read',
              },
              {
                date: 'December 20, 2025',
                category: 'Sustainability',
                title: 'MPS Electronics Achieves 65% Renewable Energy Target Ahead of Schedule',
                excerpt:
                  'Company advances sustainability goals with major solar installations across facilities',
                readTime: '4 min read',
              },
              {
                date: 'December 10, 2025',
                category: 'Awards',
                title: 'Recognized as "Manufacturer of the Year" at Industry Excellence Awards',
                excerpt:
                  'Company honored for innovation, quality excellence, and sustainability initiatives',
                readTime: '3 min read',
              },
              {
                date: 'November 28, 2025',
                category: 'Expansion',
                title: 'New Manufacturing Facility in Tamil Nadu to Create 5,000 Jobs',
                excerpt:
                  'State-of-the-art plant will enhance production capacity and strengthen supply chain',
                readTime: '5 min read',
              },
            ].map((release, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-6 rounded-2xl text-center min-w-[120px]">
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
                        {release.date.split(' ')[0]}
                      </p>
                      <p className="text-3xl font-black text-blue-600">
                        {release.date.split(' ')[1].replace(',', '')}
                      </p>
                      <p className="text-sm font-bold text-blue-600">
                        {release.date.split(' ')[2]}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                        {release.category}
                      </span>
                      <span className="text-gray-500 text-sm">{release.readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{release.excerpt}</p>
                    <button className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center group-hover:translate-x-2 transition-transform">
                      Read Full Release
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gray-900 text-white px-12 py-4 rounded-xl font-black text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              View All Press Releases
            </button>
          </div>
        </div>
      </section>

      {/* Press Release Categories */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Categories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Browse by Category
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: 'Financial Results', count: 12, color: 'blue' },
              { category: 'Product Launches', count: 24, color: 'emerald' },
              { category: 'Partnerships', count: 18, color: 'purple' },
              { category: 'Awards & Recognition', count: 15, color: 'orange' },
              { category: 'Sustainability', count: 10, color: 'green' },
              { category: 'Expansion & Growth', count: 14, color: 'indigo' },
            ].map((cat, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center cursor-pointer group`}
              >
                <div
                  className={`w-16 h-16 bg-${cat.color}-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <svg
                    className={`w-8 h-8 text-${cat.color}-600`}
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
                <h3 className="text-2xl font-black text-gray-900 mb-3">{cat.category}</h3>
                <p className={`text-4xl font-black text-${cat.color}-600`}>{cat.count}</p>
                <p className="text-gray-600 font-bold mt-2">Releases</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 md:p-16 rounded-3xl border-2 border-blue-200 text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Media Relations
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              For Press Inquiries
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact our media relations team for interviews, additional information, or press kit
              access
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:press@mpselectronics.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                press@mpselectronics.com
              </a>
              <a
                href="tel:+911204567890"
                className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors border-2 border-gray-300"
              >
                +91-120-4567890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressReleases;
