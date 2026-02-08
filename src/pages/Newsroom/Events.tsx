import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Events
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Upcoming & Past
            <br />
            Events
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Join us at conferences, webinars, and industry events worldwide
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Upcoming Events
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                date: 'March 15-17, 2026',
                title: 'Mobile World Congress 2026',
                location: 'Barcelona, Spain',
                type: 'Conference',
                description: 'Showcasing our latest mobile innovations and 5G solutions',
                attendees: '100,000+',
                status: 'Registration Open',
              },
              {
                date: 'March 28, 2026',
                title: 'Innovation Webinar: AI in Manufacturing',
                location: 'Virtual Event',
                type: 'Webinar',
                description: 'Live discussion on implementing AI for operational excellence',
                attendees: '5,000+',
                status: 'Register Now',
              },
              {
                date: 'April 10-12, 2026',
                title: 'Consumer Electronics Show Asia',
                location: 'Shanghai, China',
                type: 'Exhibition',
                description: 'Presenting our smart home ecosystem and IoT products',
                attendees: '80,000+',
                status: 'Registration Open',
              },
              {
                date: 'April 25, 2026',
                title: 'Sustainability Summit 2026',
                location: 'Mumbai, India',
                type: 'Conference',
                description: 'Sharing our net-zero journey and green manufacturing practices',
                attendees: '2,000+',
                status: 'Early Bird',
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-6 rounded-2xl text-center h-full flex flex-col justify-center">
                      <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-2">
                        {event.date.split(',')[0]}
                      </p>
                      <p className="text-4xl font-black text-emerald-600 mb-2">
                        {event.date.split(' ')[1].replace(',', '')}
                      </p>
                      <p className="text-emerald-600 font-bold">{event.date.split(',')[1]}</p>
                    </div>
                  </div>

                  <div className="lg:w-3/4">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">
                        {event.type}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                        {event.status}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {event.attendees}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 flex items-center mb-4">
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
                      {event.location}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Highlights
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Past Events
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: 'January 2026',
                title: 'CES 2026 Las Vegas',
                img: 'https://picsum.photos/800/600?random=100',
                highlights: 'Unveiled 5 new product lines',
              },
              {
                date: 'December 2025',
                title: 'Tech Innovation Summit',
                img: 'https://picsum.photos/800/600?random=101',
                highlights: 'Keynote by CEO on AI trends',
              },
              {
                date: 'November 2025',
                title: 'Sustainability Conference',
                img: 'https://picsum.photos/800/600?random=102',
                highlights: 'Shared carbon reduction roadmap',
              },
              {
                date: 'October 2025',
                title: 'Annual Investor Day',
                img: 'https://picsum.photos/800/600?random=103',
                highlights: '500+ investors attended',
              },
              {
                date: 'September 2025',
                title: 'Manufacturing Excellence Expo',
                img: 'https://picsum.photos/800/600?random=104',
                highlights: 'Won "Innovation Award"',
              },
              {
                date: 'August 2025',
                title: 'Smart Home Technology Forum',
                img: 'https://picsum.photos/800/600?random=105',
                highlights: 'Live product demonstrations',
              },
            ].map((past, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={past.img}
                    alt={past.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-3">
                    {past.date}
                  </p>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{past.title}</h3>
                  <p className="text-gray-600 mb-4">{past.highlights}</p>
                  <button className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center">
                    View Highlights
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
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Event Types
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              How We Connect
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                type: 'Trade Shows',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                desc: 'Major industry exhibitions',
              },
              {
                type: 'Webinars',
                icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                desc: 'Virtual learning sessions',
              },
              {
                type: 'Conferences',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                desc: 'Industry summits & forums',
              },
              {
                type: 'Workshops',
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                desc: 'Hands-on training programs',
              },
            ].map((eventType, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-blue-100 p-4 rounded-2xl inline-block mb-6">
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
                      d={eventType.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{eventType.type}</h3>
                <p className="text-gray-600">{eventType.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
