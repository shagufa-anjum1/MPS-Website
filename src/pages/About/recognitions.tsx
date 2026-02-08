// src/pages/About/recognitions.tsx
import React from 'react';

interface AwardCardProps {
  year: string;
  title: string;
  awardedBy: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

const AwardCard: React.FC<AwardCardProps> = ({
  year,
  title,
  awardedBy,
  category,
  description,
  image,
  featured = false,
}) => {
  return (
    <div
      className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
        featured
          ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50'
          : 'border-gray-100 hover:border-blue-300'
      }`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full">
          <p className="text-lg font-black text-blue-600">{year}</p>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <span className="text-xs font-bold uppercase">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase mb-3">
          {category}
        </div>
        <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">{title}</h3>
        <p className="text-sm font-bold text-gray-600 mb-3">Awarded by: {awardedBy}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const RecognitionsPage: React.FC = () => {
  const awards = [
    {
      year: '2025',
      title: 'Manufacturing Excellence Award',
      awardedBy: 'Confederation of Indian Industry (CII)',
      category: 'Manufacturing',
      description:
        'Recognized for operational excellence, quality management, and innovation in electronics manufacturing processes.',
      image:
        'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      featured: true,
    },
    {
      year: '2024',
      title: 'Best Employer of the Year',
      awardedBy: 'Great Place to Work Institute',
      category: 'Workplace',
      description:
        'Honored for creating exceptional workplace culture, employee development programs, and industry-leading retention rates.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      featured: true,
    },
    {
      year: '2024',
      title: 'Sustainability Leadership Award',
      awardedBy: 'Ministry of Environment, Govt. of India',
      category: 'Environment',
      description:
        'Awarded for pioneering green manufacturing initiatives and commitment to net-zero emissions by 2030.',
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
    },
    {
      year: '2023',
      title: 'Export Excellence Award',
      awardedBy: 'Engineering Export Promotion Council (EEPC)',
      category: 'Export',
      description:
        "Recognized as top exporter of electronic components, contributing significantly to India's manufacturing exports.",
      image:
        'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
    },
    {
      year: '2023',
      title: 'Innovation in Manufacturing Award',
      awardedBy: 'National Productivity Council',
      category: 'Innovation',
      description:
        'Commended for breakthrough innovations in injection molding technology and automation integration.',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
    },
    {
      year: '2022',
      title: 'Quality Excellence Award',
      awardedBy: 'Bureau of Indian Standards (BIS)',
      category: 'Quality',
      description:
        'Honored for maintaining zero-defect production standards and world-class quality management systems.',
      image:
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
    },
    {
      year: '2022',
      title: 'Make in India Champion',
      awardedBy: 'Department of Industrial Policy & Promotion',
      category: 'National',
      description:
        "Recognized as a leading contributor to India's self-reliance in electronics manufacturing under Make in India initiative.",
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
    },
    {
      year: '2021',
      title: 'Digital Transformation Award',
      awardedBy: 'NASSCOM',
      category: 'Technology',
      description:
        'Awarded for successfully implementing Industry 4.0 technologies across all manufacturing facilities.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
    },
    {
      year: '2021',
      title: 'Best Supply Chain Partner',
      awardedBy: 'Leading Global Electronics Brand',
      category: 'Partnership',
      description:
        'Recognized by major client for reliability, on-time delivery, and exceptional quality standards.',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
    },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management' },
    { name: 'ISO 14001:2015', desc: 'Environmental Management' },
    { name: 'IATF 16949', desc: 'Automotive Quality' },
    { name: 'ISO 45001', desc: 'Health & Safety' },
    { name: 'RoHS & REACH', desc: 'Material Compliance' },
    { name: 'UL / CE / FCC', desc: 'Product Certifications' },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-6 border border-white/30">
            Our Recognitions
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
            Awards & Achievements
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
            Celebrating excellence, innovation, and industry leadership
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100">
              <div className="text-5xl mb-4">🏆</div>
              <div className="text-4xl md:text-5xl font-black text-yellow-600 mb-3">25+</div>
              <p className="text-sm font-bold text-gray-700">National Awards</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100">
              <div className="text-5xl mb-4">🌟</div>
              <div className="text-4xl md:text-5xl font-black text-blue-600 mb-3">10+</div>
              <p className="text-sm font-bold text-gray-700">Industry Recognitions</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100">
              <div className="text-5xl mb-4">✅</div>
              <div className="text-4xl md:text-5xl font-black text-green-600 mb-3">6</div>
              <p className="text-sm font-bold text-gray-700">Global Certifications</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100">
              <div className="text-5xl mb-4">🎖️</div>
              <div className="text-4xl md:text-5xl font-black text-purple-600 mb-3">15+</div>
              <p className="text-sm font-bold text-gray-700">Client Excellence Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognized for Excellence
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our commitment to quality, innovation, and operational excellence has earned us
              numerous prestigious awards from industry bodies, government institutions, and global
              clients. Each recognition reflects our dedication to setting benchmarks in electronics
              manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Global Certifications
            </h2>
            <p className="text-base text-gray-600">
              Adherence to international quality and compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl hover:border-blue-400 hover:shadow-xl transition-all duration-500 text-center group"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600 font-semibold">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-xl border-2 border-blue-100">
            <blockquote className="text-2xl md:text-3xl leading-relaxed text-gray-700 italic font-light mb-8 text-center">
              "Awards are a reflection of our team's relentless pursuit of excellence. But our true
              measure of success is the trust our clients place in us, day after day, year after
              year."
            </blockquote>
            <p className="text-center text-lg text-gray-600 font-semibold">
              — MPS Electronics Leadership
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecognitionsPage;
