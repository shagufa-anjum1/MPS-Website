import React from 'react';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Our Products
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Complete Product
            <br />
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Innovative solutions across mobile devices, displays, appliances, and smart home
            technology
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Product Categories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Explore Our Innovation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From consumer electronics to industrial solutions—engineered for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Phones */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=30"
                  alt="Mobile Phones"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                  Mobile Phones
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Next-generation smartphones with cutting-edge technology and innovative features
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Displays */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=31"
                  alt="Displays"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Displays</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Premium displays with stunning visuals, from TVs to professional monitors
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Appliances */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=32"
                  alt="Appliances"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Appliances</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Smart home appliances that make everyday life easier and more efficient
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Smart Home */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=33"
                  alt="Smart Home"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Smart Home</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Connected devices and IoT solutions for intelligent home automation
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Industrial Tech */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=34"
                  alt="Industrial Tech"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                  Industrial Tech
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Advanced industrial solutions for manufacturing and automation
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Computing */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=35"
                  alt="Computing"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">Computing</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Laptops, tablets, and computing devices for work and entertainment
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Advantage
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Why Choose Our Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Innovation</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cutting-edge technology and continuous innovation in every product
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-emerald-600"
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
              <h3 className="text-2xl font-black mb-4 text-gray-900">Quality</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Premium materials and rigorous testing ensure lasting performance
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Support</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive warranty and dedicated customer support worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">500+</div>
              <p className="text-lg font-bold text-gray-800">Product Models</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">150+</div>
              <p className="text-lg font-bold text-gray-800">Global Clients</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">30+</div>
              <p className="text-lg font-bold text-gray-800">Years Experience</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">99.9%</div>
              <p className="text-lg font-bold text-gray-800">Quality Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
