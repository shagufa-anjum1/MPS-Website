// src/pages/About/leadership.tsx
import React from 'react';

interface LeaderCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ name, position, image, bio, linkedin }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300">
      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-black text-gray-900 mb-2">{name}</h3>
        <p className="text-base font-bold text-blue-600 mb-4">{position}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{bio}</p>

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

const LeadershipPage: React.FC = () => {
  const leaders = [
    {
      name: 'Rajesh Kumar',
      position: 'Chief Executive Officer',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      bio: '20+ years of experience in electronics manufacturing. Led company through 3x revenue growth and global expansion across 15 countries.',
      linkedin: '#',
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Operating Officer',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      bio: 'Operations expert with 18 years in supply chain optimization. Spearheaded Industry 4.0 transformation across all facilities.',
      linkedin: '#',
    },
    {
      name: 'Amit Patel',
      position: 'Chief Technology Officer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      bio: 'Engineering leader with 15 years in advanced manufacturing. Pioneered R&D initiatives in sustainable materials and automation.',
      linkedin: '#',
    },
    {
      name: 'Meera Iyer',
      position: 'Chief Financial Officer',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      bio: 'Finance veteran with 22 years experience. Led successful IPO and strategic acquisitions driving company valuation growth.',
      linkedin: '#',
    },
    {
      name: 'Vikram Singh',
      position: 'VP - Manufacturing',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      bio: 'Manufacturing excellence champion. Implemented lean practices reducing waste by 40% while improving quality metrics.',
      linkedin: '#',
    },
    {
      name: 'Ananya Reddy',
      position: 'VP - Human Resources',
      image:
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
      bio: 'People-first leader with 16 years experience. Built diverse workforce of 35K+ employees with industry-leading retention rates.',
      linkedin: '#',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-6 border border-white/30">
            Our Leadership
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
            Guided by experience, driven by excellence
          </p>
        </div>
      </section>

      {/* Leadership Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experienced Leaders Driving Innovation
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our leadership team brings decades of combined experience in electronics
              manufacturing, operational excellence, and strategic growth. Together, they guide MPS
              Electronics toward continued innovation and global leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 md:p-16 rounded-3xl border-2 border-blue-100">
            <blockquote className="text-2xl md:text-3xl leading-relaxed text-gray-700 italic font-light mb-8 text-center">
              "Our strength lies in our people. We lead with integrity, innovate with purpose, and
              build partnerships that last generations."
            </blockquote>
            <p className="text-center text-lg text-gray-600 font-semibold">
              — MPS Electronics Leadership Team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
