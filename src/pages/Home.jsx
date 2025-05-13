import posts from '../utils/getPosts';
import { Link } from 'react-router-dom';
import NewsletterSignup from '../components/NewsletterSignup';
import FAQSection from '../components/FAQSection';
import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Nexola Tech</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          Your trusted cybersecurity consulting and IT solutions partner.
          We help businesses stay secure, compliant, and ahead of cyber threats.
        </p>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Vulnerability Assessments</h3>
            <p className="text-gray-600">Identify and resolve critical threats before attackers do.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Managed IT Support</h3>
            <p className="text-gray-600">End-to-end support tailored for security-first organizations.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Compliance Consulting</h3>
            <p className="text-gray-600">Meet NIST, ISO27001, HIPAA, and SOC2 standards with confidence.</p>
          </div>
        </div>
      </section>
      <section className="mt-16 max-w-4xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h2>
  
  <div className="space-y-6">
    {posts.slice(0, 3).map((post) => (
      <Link
        key={post.slug}
        to={`/blog/${post.slug}`}
        className="block bg-white p-6 rounded shadow hover:shadow-md transition"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <p className="text-gray-600">{post.excerpt}</p>
      </Link>
    ))}
  </div>

  <div className="text-center mt-6">
    <Link
      to="/blog"
      className="inline-block text-green-600 hover:text-green-800 font-semibold mt-4"
    >
      View All Blog Posts →
    </Link>
  </div>
</section>
      <NewsletterSignup />
      <FAQSection />
    </div>
  );
};

export default Home;
