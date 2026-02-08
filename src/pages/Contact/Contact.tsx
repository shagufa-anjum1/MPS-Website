import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Get in Touch
            <br />
            With Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Have a question or want to work with us? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                Send Message
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 font-medium transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 font-medium transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 font-medium transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 font-medium transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 font-medium transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Partnership</option>
                    <option value="support">Customer Support</option>
                    <option value="media">Media & Press</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 font-medium transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-5 rounded-xl font-black text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <div className="sticky top-8">
                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                  Contact Info
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-8">
                  {/* Headquarters */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border-2 border-blue-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 p-4 rounded-2xl">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-gray-900 mb-2">Corporate Office</h3>
                        <p className="text-gray-700 leading-relaxed">
                          MPS Electronics Ltd.
                          <br />
                          Tower A, Business Park
                          <br />
                          Sector 62, Noida
                          <br />
                          Uttar Pradesh 201301, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl border-2 border-emerald-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-600 p-4 rounded-2xl">
                        <svg
                          className="w-8 h-8 text-white"
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
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-700 mb-1">
                          <strong>General:</strong> +91-120-4567890
                        </p>
                        <p className="text-gray-700 mb-1">
                          <strong>Sales:</strong> +91-120-4567891
                        </p>
                        <p className="text-gray-700">
                          <strong>Support:</strong> 1800-123-4567 (Toll Free)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border-2 border-purple-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 p-4 rounded-2xl">
                        <svg
                          className="w-8 h-8 text-white"
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
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-700 mb-1">
                          <strong>General:</strong> info@mpselectronics.com
                        </p>
                        <p className="text-gray-700 mb-1">
                          <strong>Sales:</strong> sales@mpselectronics.com
                        </p>
                        <p className="text-gray-700 mb-1">
                          <strong>Support:</strong> support@mpselectronics.com
                        </p>
                        <p className="text-gray-700">
                          <strong>Press:</strong> press@mpselectronics.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl border-2 border-orange-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-600 p-4 rounded-2xl">
                        <svg
                          className="w-8 h-8 text-white"
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
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-gray-900 mb-4">Follow Us</h3>
                        <div className="flex gap-3">
                          {[
                            { name: 'LinkedIn', color: 'blue' },
                            { name: 'Twitter', color: 'sky' },
                            { name: 'Facebook', color: 'indigo' },
                            { name: 'Instagram', color: 'pink' },
                          ].map((social, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className={`w-12 h-12 bg-${social.color}-600 rounded-xl flex items-center justify-center hover:bg-${social.color}-700 transition-colors`}
                            >
                              <span className="text-white font-bold">{social.name[0]}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Global Presence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Our Office Locations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'New Delhi',
                type: 'Head Office',
                address: 'Connaught Place, New Delhi 110001',
                phone: '+91-11-2345-6789',
              },
              {
                city: 'Bangalore',
                type: 'Tech Hub',
                address: 'Whitefield, Bangalore 560066',
                phone: '+91-80-2345-6789',
              },
              {
                city: 'Mumbai',
                type: 'Regional Office',
                address: 'BKC, Mumbai 400051',
                phone: '+91-22-2345-6789',
              },
              {
                city: 'Pune',
                type: 'Manufacturing',
                address: 'Hinjewadi, Pune 411057',
                phone: '+91-20-2345-6789',
              },
              {
                city: 'Hyderabad',
                type: 'R&D Center',
                address: 'HITEC City, Hyderabad 500081',
                phone: '+91-40-2345-6789',
              },
              {
                city: 'Chennai',
                type: 'Regional Office',
                address: 'OMR, Chennai 600096',
                phone: '+91-44-2345-6789',
              },
            ].map((office, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">{office.city}</h3>
                    <span className="text-sm text-blue-600 font-bold">{office.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{office.address}</p>
                <p className="text-gray-900 font-bold">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-12 md:p-16 rounded-3xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-black mb-4">Office Hours</h3>
                <p className="text-xl opacity-90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-xl opacity-90">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-xl opacity-90">Sunday: Closed</p>
              </div>
              <div>
                <h3 className="text-2xl font-black mb-4">Customer Support</h3>
                <p className="text-xl opacity-90">24/7 Online Support</p>
                <p className="text-xl opacity-90">Emergency Hotline Available</p>
                <p className="text-xl opacity-90">Live Chat: 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
