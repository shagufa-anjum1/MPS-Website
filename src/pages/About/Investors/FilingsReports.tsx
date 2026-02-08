import React from 'react';

const FilingsReports: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Filings & Reports
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            SEC Filings &<br />
            Financial Documents
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Complete transparency with comprehensive regulatory filings and investor reports
          </p>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Annual Reports
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Comprehensive Annual Reports
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Detailed financial and operational performance documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: 'FY 2025',
                title: 'Annual Report 2024-25',
                size: '12.8 MB',
                pages: '248 pages',
                date: 'May 15, 2025',
              },
              {
                year: 'FY 2024',
                title: 'Annual Report 2023-24',
                size: '11.5 MB',
                pages: '236 pages',
                date: 'May 18, 2024',
              },
              {
                year: 'FY 2023',
                title: 'Annual Report 2022-23',
                size: '10.2 MB',
                pages: '224 pages',
                date: 'May 20, 2023',
              },
              {
                year: 'FY 2022',
                title: 'Annual Report 2021-22',
                size: '9.8 MB',
                pages: '218 pages',
                date: 'May 22, 2022',
              },
            ].map((report, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-3">
                      {report.year}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-gray-600">{report.date}</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-gray-600 mb-6">
                  <span>{report.size}</span>
                  <span>•</span>
                  <span>{report.pages}</span>
                  <span>•</span>
                  <span>PDF</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly Results */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Quarterly Results
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Quarterly Financial Results
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { quarter: 'Q4 FY25', date: 'Apr 2025', size: '2.4 MB' },
              { quarter: 'Q3 FY25', date: 'Jan 2025', size: '2.2 MB' },
              { quarter: 'Q2 FY25', date: 'Oct 2024', size: '2.1 MB' },
              { quarter: 'Q1 FY25', date: 'Jul 2024', size: '2.3 MB' },
              { quarter: 'Q4 FY24', date: 'Apr 2024', size: '2.0 MB' },
              { quarter: 'Q3 FY24', date: 'Jan 2024', size: '1.9 MB' },
              { quarter: 'Q2 FY24', date: 'Oct 2023', size: '1.8 MB' },
              { quarter: 'Q1 FY24', date: 'Jul 2023', size: '1.9 MB' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <h3 className="text-xl font-black text-gray-900 mb-2">{item.quarter}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.date}</p>
                <p className="text-xs text-gray-500 mb-4">{item.size}</p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Filings */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Regulatory Filings
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              SEC & Exchange Filings
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { type: 'Form 10-K', desc: 'Annual Report', date: 'May 15, 2025' },
              { type: 'Form 10-Q', desc: 'Quarterly Report Q4', date: 'Apr 30, 2025' },
              { type: 'Form 8-K', desc: 'Current Report - Earnings Release', date: 'Apr 28, 2025' },
              { type: 'Form 10-Q', desc: 'Quarterly Report Q3', date: 'Jan 30, 2025' },
              { type: 'Form 8-K', desc: 'Current Report - Board Changes', date: 'Jan 15, 2025' },
              { type: 'Form 10-Q', desc: 'Quarterly Report Q2', date: 'Oct 30, 2024' },
            ].map((filing, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-emerald-100 p-4 rounded-xl">
                    <svg
                      className="w-6 h-6 text-emerald-600"
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
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-1">{filing.type}</h3>
                    <p className="text-gray-600">{filing.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-3">{filing.date}</p>
                  <button className="bg-emerald-600 text-white py-2 px-6 rounded-lg font-bold text-sm hover:bg-emerald-700 transition-colors">
                    View Filing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Presentations */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Presentations
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Investor Presentations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Q4 FY25 Earnings', date: 'Apr 28, 2025', slides: '42 slides' },
              { title: 'Investor Day 2025', date: 'Mar 15, 2025', slides: '68 slides' },
              { title: 'Q3 FY25 Earnings', date: 'Jan 28, 2025', slides: '38 slides' },
            ].map((pres, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className="bg-purple-100 p-4 rounded-2xl inline-block mb-6">
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
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{pres.title}</h3>
                <p className="text-gray-600 mb-4">{pres.date}</p>
                <p className="text-sm text-gray-500 mb-6">{pres.slides}</p>
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-purple-700 transition-colors">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilingsReports;
