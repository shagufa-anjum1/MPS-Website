import React from 'react';

const JobOpenings: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Job Openings
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Current Opportunities
            <br />& Positions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Find your next career move and join a team that's shaping the future
          </p>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Departments
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Explore Openings by Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              145 open positions across multiple departments and locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { dept: 'Engineering', count: 42, color: 'blue' },
              { dept: 'Product & Design', count: 18, color: 'purple' },
              { dept: 'Sales & Marketing', count: 25, color: 'emerald' },
              { dept: 'Operations', count: 22, color: 'orange' },
              { dept: 'Finance & Legal', count: 15, color: 'indigo' },
              { dept: 'Human Resources', count: 12, color: 'pink' },
              { dept: 'Customer Success', count: 28, color: 'cyan' },
              { dept: 'Supply Chain', count: 19, color: 'amber' },
              { dept: 'Data & Analytics', count: 14, color: 'violet' },
            ].map((category, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-${category.color}-50 to-${category.color}-100/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-${category.color}-200 cursor-pointer group`}
              >
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                  {category.dept}
                </h3>
                <p className={`text-4xl font-black text-${category.color}-600 mb-2`}>
                  {category.count}
                </p>
                <p className="text-gray-600 font-bold">Open Positions</p>
                <div className="mt-6 flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  View Jobs →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Featured Roles
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Hot Opportunities
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Senior Full Stack Developer',
                dept: 'Engineering',
                location: 'Bangalore, India',
                type: 'Full-time',
                experience: '5-8 years',
                skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
              },
              {
                title: 'Product Manager - Consumer Electronics',
                dept: 'Product',
                location: 'Mumbai, India',
                type: 'Full-time',
                experience: '6-10 years',
                skills: ['Product Strategy', 'Roadmap Planning', 'Stakeholder Management', 'Agile'],
              },
              {
                title: 'UX/UI Designer',
                dept: 'Design',
                location: 'Hyderabad, India',
                type: 'Full-time',
                experience: '3-5 years',
                skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
              },
              {
                title: 'Data Scientist',
                dept: 'Analytics',
                location: 'Pune, India',
                type: 'Full-time',
                experience: '4-7 years',
                skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
              },
              {
                title: 'Sales Manager - B2B Solutions',
                dept: 'Sales',
                location: 'Delhi NCR, India',
                type: 'Full-time',
                experience: '5-8 years',
                skills: ['Enterprise Sales', 'Negotiation', 'CRM', 'Team Leadership'],
              },
              {
                title: 'Supply Chain Analyst',
                dept: 'Operations',
                location: 'Chennai, India',
                type: 'Full-time',
                experience: '2-4 years',
                skills: ['Supply Chain', 'Logistics', 'Excel', 'SAP'],
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                        {job.dept}
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gray-900 text-white px-12 py-4 rounded-xl font-black text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              View All 145 Positions
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              How it Works
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Our Hiring Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply Online',
                desc: 'Submit your application through our portal',
              },
              { step: '2', title: 'Initial Screening', desc: 'Our team reviews your profile' },
              { step: '3', title: 'Interviews', desc: 'Technical and behavioral rounds' },
              { step: '4', title: 'Offer', desc: 'Welcome to the team!' },
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{process.title}</h3>
                <p className="text-lg text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobOpenings;
