import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import blogPosts from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Helmet>
        <title>Cybersecurity Blog | Nexola Tech</title>
        <meta
          name="description"
          content="Read the latest insights from Nexola Tech's cybersecurity experts. Stay informed on penetration testing, threat intelligence, and secure development best practices."
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cybersecurity Blog",
            "url": "https://nexolatech.com/blog"
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Nexola Tech Blog",
            "description": "Expert insights on cybersecurity trends, penetration testing, and threat mitigation strategies.",
            "url": "https://nexolatech.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Nexola Tech",
              "url": "https://nexolatech.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nexolatech.com/logo.png"
              }
            }
          }
        `}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Cybersecurity Blog</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.slug} className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-green-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
   </div>
  );
};

export default Blog;
