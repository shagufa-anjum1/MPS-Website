import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-sm uppercase tracking-widest font-semibold rounded-full mb-8 border border-white/30">
            Blog
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            Insights &<br />
            Thought Leadership
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-95">
            Expert perspectives on technology, innovation, and industry trends
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Featured Posts
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Latest from Our Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'The Future of AI in Consumer Electronics',
                excerpt:
                  'Exploring how artificial intelligence is transforming everyday devices and user experiences',
                author: 'Dr. Rajesh Kumar',
                role: 'Chief Technology Officer',
                date: 'Feb 3, 2026',
                readTime: '8 min read',
                category: 'Technology',
                img: 'https://picsum.photos/800/600?random=90',
              },
              {
                title: 'Sustainable Manufacturing: Our Journey to Net Zero',
                excerpt:
                  'Behind-the-scenes look at our environmental initiatives and green manufacturing practices',
                author: 'Priya Sharma',
                role: 'Sustainability Head',
                date: 'Jan 28, 2026',
                readTime: '6 min read',
                category: 'Sustainability',
                img: 'https://picsum.photos/800/600?random=91',
              },
              {
                title: '5G and IoT: Enabling the Connected Future',
                excerpt:
                  'How next-gen connectivity is revolutionizing smart homes and industrial applications',
                author: 'Amit Patel',
                role: 'Product Strategy Lead',
                date: 'Jan 22, 2026',
                readTime: '7 min read',
                category: 'Innovation',
                img: 'https://picsum.photos/800/600?random=92',
              },
              {
                title: 'Building a Culture of Innovation at MPS',
                excerpt:
                  'Our approach to fostering creativity, experimentation, and breakthrough thinking',
                author: 'Sunita Desai',
                role: 'Chief People Officer',
                date: 'Jan 15, 2026',
                readTime: '5 min read',
                category: 'Culture',
                img: 'https://picsum.photos/800/600?random=93',
              },
              {
                title: 'Supply Chain Resilience in a Global Economy',
                excerpt: 'Strategies for managing disruptions and ensuring business continuity',
                author: 'Vikram Singh',
                role: 'Supply Chain Director',
                date: 'Jan 8, 2026',
                readTime: '6 min read',
                category: 'Operations',
                img: 'https://picsum.photos/800/600?random=94',
              },
              {
                title: 'Data Privacy and Security in Smart Devices',
                excerpt:
                  'Our commitment to protecting user data while delivering intelligent experiences',
                author: 'Anjali Reddy',
                role: 'Security Architect',
                date: 'Dec 30, 2025',
                readTime: '7 min read',
                category: 'Security',
                img: 'https://picsum.photos/800/600?random=95',
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-sm font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-black text-lg">
                        {post.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-black text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-600">{post.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-purple-600 text-white px-12 py-4 rounded-xl font-black text-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Topics
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Explore by Topic
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { topic: 'Technology', count: 42 },
              { topic: 'Innovation', count: 35 },
              { topic: 'Sustainability', count: 28 },
              { topic: 'Culture', count: 24 },
              { topic: 'Industry Trends', count: 31 },
              { topic: 'Product Updates', count: 26 },
              { topic: 'Leadership', count: 19 },
              { topic: 'Operations', count: 22 },
            ].map((topic, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center cursor-pointer group"
              >
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {topic.topic}
                </h3>
                <p className="text-3xl font-black text-purple-600">{topic.count}</p>
                <p className="text-sm text-gray-600 font-bold mt-1">Articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-12 md:p-16 rounded-3xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8">
              Get the latest insights delivered to your inbox every week
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-bold focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-black hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
