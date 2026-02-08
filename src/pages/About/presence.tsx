// src/pages/About/presence.tsx
import React from 'react';

interface LocationCardProps {
  city: string;
  state: string;
  facilities: number;
  employees: string;
  specialization: string;
  image: string;
  isHeadquarters?: boolean;
}

const LocationCard: React.FC<LocationCardProps> = ({
  city,
  state,
  facilities,
  employees,
  specialization,
  image,
  isHeadquarters = false,
}) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300 relative">
      {isHeadquarters && (
        <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase">
          Headquarters
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <img
          src={image}
          alt={`${city} facility`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <h3 className="text-2xl font-black text-white drop-shadow-lg">{city}</h3>
          <p className="text-sm text-white/90 font-semibold">{state}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <p className="text-3xl font-black text-blue-600">{facilities}</p>
            <p className="text-xs text-gray-600 font-semibold">Facilities</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl">
            <p className="text-3xl font-black text-emerald-600">{employees}</p>
            <p className="text-xs text-gray-600 font-semibold">Employees</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm font-bold text-gray-900 mb-2">Specialization</p>
          <p className="text-sm text-gray-600 leading-relaxed">{specialization}</p>
        </div>
      </div>
    </div>
  );
};

const PresencePage: React.FC = () => {
  const locations = [
    {
      city: 'Noida',
      state: 'Uttar Pradesh',
      facilities: 6,
      employees: '12K+',
      specialization: 'Injection molding, CNC machining, LED TV panels, mobile manufacturing',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=85',
      isHeadquarters: true,
    },
    {
      city: 'Chennai',
      state: 'Tamil Nadu',
      facilities: 4,
      employees: '8K+',
      specialization: 'IT hardware, telecom equipment, automotive electronics, R&D center',
      image:
        'https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=85',
    },
    {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      facilities: 3,
      employees: '5K+',
      specialization: 'LED TV panel production (LCM), largest facility of its kind in India',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee67e7d149e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=85',
    },
    {
      city: 'Dehradun',
      state: 'Uttarakhand',
      facilities: 2,
      employees: '3K+',
      specialization: 'Washing machines, refrigerators, white goods manufacturing',
      image:
        'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=85',
    },
    {
      city: 'Jammu',
      state: 'Jammu & Kashmir',
      facilities: 2,
      employees: '2.5K+',
      specialization: 'Set-top boxes, smart electronics, IoT devices',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=85',
    },
    {
      city: 'Pune',
      state: 'Maharashtra',
      facilities: 3,
      employees: '4.5K+',
      specialization: 'Die casting, metal stamping, automotive components',
      image:
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=85',
    },
  ];

  const globalStats = [
    { number: '24', label: 'Manufacturing Facilities', icon: '🏭' },
    { number: '35K+', label: 'Skilled Employees', icon: '👥' },
    { number: '8', label: 'States Across India', icon: '📍' },
    { number: '6', label: 'Dedicated R&D Centers', icon: '🔬' },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-6 border border-white/30">
            Our Presence
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-2xl">
            Global Footprint
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-95">
            State-of-the-art manufacturing facilities across India
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-3">
                  {stat.number}
                </div>
                <p className="text-sm font-bold text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence Across India
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our strategically located facilities across India enable us to serve global clients
              with speed, precision, and scale. Each location is equipped with advanced technology
              and staffed by skilled professionals committed to operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be replaced with actual map) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Pan-India Network
            </h2>
            <p className="text-base text-gray-600">
              Strategic locations ensuring nationwide coverage and efficient logistics
            </p>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden border-2 border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=85"
              alt="India map showing MPS Electronics locations"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-md text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Expanding Every Year</h3>
                <p className="text-sm text-gray-600 mb-4">
                  New facilities in Southeast Asia and Europe planned for 2027
                </p>
                <div className="flex gap-4 justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-black text-blue-600">8</p>
                    <p className="text-xs text-gray-600">States</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-black text-emerald-600">24</p>
                    <p className="text-xs text-gray-600">Plants</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-black text-purple-600">35K+</p>
                    <p className="text-xs text-gray-600">People</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-xl border-2 border-blue-100">
            <blockquote className="text-2xl md:text-3xl leading-relaxed text-gray-700 italic font-light mb-8 text-center">
              "Every facility represents our commitment to quality, innovation, and the communities
              we serve. We don't just build plants—we build partnerships that drive local economic
              growth."
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

export default PresencePage;
