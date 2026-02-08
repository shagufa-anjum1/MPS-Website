import React from 'react';

const FinancialPerformance: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Financial Performance
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Quarterly & Annual
            <br />
            Results
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Transparent financial reporting and consistent growth trajectory
          </p>
        </div>
      </section>

      {/* Latest Results */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Latest Results
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Q4 FY 2025 Financial Highlights
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strong performance across all business segments
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4">₹5,240</div>
              <p className="text-lg font-bold text-gray-800 mb-2">Revenue (Cr)</p>
              <p className="text-sm text-green-600 font-bold">↑ 18% YoY</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-4">₹892</div>
              <p className="text-lg font-bold text-gray-800 mb-2">EBITDA (Cr)</p>
              <p className="text-sm text-green-600 font-bold">↑ 22% YoY</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-purple-600 mb-4">17.2%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">EBITDA Margin</p>
              <p className="text-sm text-green-600 font-bold">↑ 1.8% YoY</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl md:text-6xl font-black text-orange-600 mb-4">₹456</div>
              <p className="text-lg font-bold text-gray-800 mb-2">PAT (Cr)</p>
              <p className="text-sm text-green-600 font-bold">↑ 25% YoY</p>
            </div>
          </div>

          {/* Quarterly Comparison */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-12 rounded-3xl border-2 border-gray-200">
            <h3 className="text-3xl font-black mb-8 text-gray-900">Quarterly Performance Trend</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { quarter: 'Q1 FY25', revenue: '₹4,850 Cr', growth: '+12%' },
                { quarter: 'Q2 FY25', revenue: '₹4,950 Cr', growth: '+14%' },
                { quarter: 'Q3 FY25', revenue: '₹5,100 Cr', growth: '+16%' },
                { quarter: 'Q4 FY25', revenue: '₹5,240 Cr', growth: '+18%' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {item.quarter}
                  </p>
                  <p className="text-2xl font-black text-gray-900 mb-2">{item.revenue}</p>
                  <p className="text-sm text-green-600 font-bold">{item.growth}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Segment Performance */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Segment Analysis
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Business Segment Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-black mb-4 text-gray-900">Consumer Electronics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Revenue</span>
                  <span className="text-xl font-black text-blue-600">₹3,150 Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Growth</span>
                  <span className="text-xl font-black text-green-600">+20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Contribution</span>
                  <span className="text-xl font-black text-purple-600">60%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-black mb-4 text-gray-900">Industrial Tech</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Revenue</span>
                  <span className="text-xl font-black text-blue-600">₹1,310 Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Growth</span>
                  <span className="text-xl font-black text-green-600">+15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Contribution</span>
                  <span className="text-xl font-black text-purple-600">25%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-black mb-4 text-gray-900">B2B Solutions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Revenue</span>
                  <span className="text-xl font-black text-blue-600">₹780 Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Growth</span>
                  <span className="text-xl font-black text-green-600">+18%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Contribution</span>
                  <span className="text-xl font-black text-purple-600">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Performance */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Annual Overview
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              FY 2025 Full Year Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-gray-900">
                Key Financial Metrics
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-700">Total Revenue</span>
                    <span className="text-3xl font-black text-blue-600">₹20,140 Cr</span>
                  </div>
                  <p className="text-sm text-green-600 font-bold mt-2">↑ 16% from FY24</p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-700">Net Profit</span>
                    <span className="text-3xl font-black text-emerald-600">₹1,680 Cr</span>
                  </div>
                  <p className="text-sm text-green-600 font-bold mt-2">↑ 21% from FY24</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-700">EPS</span>
                    <span className="text-3xl font-black text-purple-600">₹84.5</span>
                  </div>
                  <p className="text-sm text-green-600 font-bold mt-2">↑ 20% from FY24</p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-700">ROE</span>
                    <span className="text-3xl font-black text-orange-600">22.4%</span>
                  </div>
                  <p className="text-sm text-green-600 font-bold mt-2">↑ 2.1% from FY24</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=85"
                alt="Financial Growth"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Investment Case
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900">
              Why Invest With Us
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 p-12 md:p-16 rounded-3xl border-2 border-gray-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-700 italic font-light mb-8">
              "Consistent double-digit growth, strong cash flows, and strategic market positioning
              make us a compelling long-term investment opportunity in the manufacturing sector."
            </blockquote>
            <p className="text-xl text-gray-600 font-medium">— Chief Financial Officer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-blue-600 mb-3">Growth</h4>
              <p className="text-gray-700 text-lg">16%+ CAGR over 5 years</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-emerald-600 mb-3">Profitability</h4>
              <p className="text-gray-700 text-lg">Industry-leading margins</p>
            </div>
            <div className="text-center p-8">
              <h4 className="text-3xl font-black text-purple-600 mb-3">Returns</h4>
              <p className="text-gray-700 text-lg">22%+ ROE consistently</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialPerformance;
