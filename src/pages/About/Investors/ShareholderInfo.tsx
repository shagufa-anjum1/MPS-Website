import React from 'react';

const ShareholderInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Shareholder Information
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Dividends &<br />
            Investor Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Comprehensive information and services for our valued shareholders
          </p>
        </div>
      </section>

      {/* Dividend Information */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Dividends
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Dividend History
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Consistent dividend payments reflecting strong financial performance
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl border-2 border-blue-200 mb-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">₹18</div>
                <p className="text-lg font-bold text-gray-800">FY25 Dividend per Share</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">2.8%</div>
                <p className="text-lg font-bold text-gray-800">Dividend Yield</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">35%</div>
                <p className="text-lg font-bold text-gray-800">Payout Ratio</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">8</div>
                <p className="text-lg font-bold text-gray-800">Consecutive Years</p>
              </div>
            </div>
          </div>

          {/* Dividend Payment History */}
          <div className="space-y-4">
            {[
              { fy: 'FY 2025', interim: '₹8', final: '₹10', total: '₹18', yield: '2.8%' },
              { fy: 'FY 2024', interim: '₹7', final: '₹8', total: '₹15', yield: '2.5%' },
              { fy: 'FY 2023', interim: '₹6', final: '₹7', total: '₹13', yield: '2.3%' },
              { fy: 'FY 2022', interim: '₹5', final: '₹6', total: '₹11', yield: '2.1%' },
              { fy: 'FY 2021', interim: '₹4', final: '₹5', total: '₹9', yield: '1.9%' },
            ].map((div, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <div className="bg-blue-100 px-6 py-4 rounded-xl">
                    <p className="text-2xl font-black text-blue-600">{div.fy}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Interim</p>
                      <p className="text-xl font-black text-gray-900">{div.interim}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Final</p>
                      <p className="text-xl font-black text-gray-900">{div.final}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total</p>
                      <p className="text-xl font-black text-emerald-600">{div.total}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Yield</p>
                  <p className="text-xl font-black text-purple-600">{div.yield}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Information */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Stock Details
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Stock Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-black mb-8 text-gray-900">BSE Listing</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Stock Code</span>
                  <span className="text-xl font-black text-blue-600">532500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Current Price</span>
                  <span className="text-xl font-black text-emerald-600">₹642.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">52-Week High</span>
                  <span className="text-xl font-black text-gray-900">₹698.20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">52-Week Low</span>
                  <span className="text-xl font-black text-gray-900">₹485.30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Market Cap</span>
                  <span className="text-xl font-black text-purple-600">₹12,850 Cr</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-black mb-8 text-gray-900">NSE Listing</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Symbol</span>
                  <span className="text-xl font-black text-blue-600">MPSELEC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Current Price</span>
                  <span className="text-xl font-black text-emerald-600">₹643.15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">P/E Ratio</span>
                  <span className="text-xl font-black text-gray-900">28.5x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Book Value</span>
                  <span className="text-xl font-black text-gray-900">₹378.20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">EPS (TTM)</span>
                  <span className="text-xl font-black text-purple-600">₹22.54</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 p-12 rounded-3xl border-2 border-gray-200">
            <h3 className="text-3xl font-black mb-8 text-gray-900 text-center">
              Shareholding Pattern (Q4 FY25)
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl font-black text-blue-600 mb-3">42.5%</div>
                <p className="text-gray-700 font-bold">Promoters</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl font-black text-emerald-600 mb-3">28.3%</div>
                <p className="text-gray-700 font-bold">FIIs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl font-black text-purple-600 mb-3">18.7%</div>
                <p className="text-gray-700 font-bold">DIIs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl font-black text-orange-600 mb-3">10.5%</div>
                <p className="text-gray-700 font-bold">Public</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Services */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Investor Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive support for all your shareholder needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Registrar & Transfer Agent',
                info: 'Link Intime India Pvt. Ltd.',
                contact: '+91-22-49186000',
                email: 'rnt.helpdesk@linkintime.co.in',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                color: 'blue',
              },
              {
                title: 'Demat Account Services',
                info: 'NSDL & CDSL Depository Services',
                contact: 'NSDL: 1800-222-990',
                email: 'info@nsdl.co.in',
                icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
                color: 'emerald',
              },
              {
                title: 'Investor Helpdesk',
                info: 'Dedicated support for queries',
                contact: '+91-120-4567890',
                email: 'investors@mpselectronics.com',
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                color: 'purple',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className={`bg-${service.color}-100 p-4 rounded-2xl inline-block mb-6`}>
                  <svg
                    className={`w-10 h-10 text-${service.color}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 font-bold">{service.info}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {service.contact}
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {service.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Calendar
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Important Dates
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { event: 'Q1 FY26 Results', date: 'July 28, 2026' },
              { event: 'Annual General Meeting', date: 'September 15, 2026' },
              { event: 'Q2 FY26 Results', date: 'October 28, 2026' },
              { event: 'Interim Dividend Record Date', date: 'November 10, 2026' },
              { event: 'Q3 FY26 Results', date: 'January 28, 2027' },
              { event: 'Q4 FY26 Results', date: 'April 28, 2027' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between border-l-4 border-blue-600"
              >
                <span className="text-xl font-black text-gray-900">{item.event}</span>
                <span className="text-lg font-bold text-blue-600">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shareholder Value */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Our Commitment
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Creating Shareholder Value
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "We are committed to delivering sustainable long-term value through consistent
              performance, transparent communication, and prudent capital allocation—making us a
              trusted investment for generations."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— Investor Relations Team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Growth</h4>
              <p className="text-gray-700 text-lg">Consistent revenue expansion</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Returns</h4>
              <p className="text-gray-700 text-lg">Regular dividend payments</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Trust</h4>
              <p className="text-gray-700 text-lg">Transparent communication</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareholderInfo;
