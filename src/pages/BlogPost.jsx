import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import blogPosts from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Post not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Helmet>
        <title>{post.title} | Nexola Tech</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />

        {/* Structured Data: Article */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": "${post.image}",
            "author": {
              "@type": "Organization",
              "name": "Nexola Tech"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nexola Tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nexolatech.com/logo.png"
              }
            },
            "datePublished": "${post.date}"
          }
        `}</script>
      </Helmet>

      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <img src={post.image} alt={post.title} className="w-full h-auto rounded mb-8" />
        <p className="text-gray-600 mb-4 text-sm">Published on {post.date}</p>
        <div className="prose max-w-none">{post.content}</div>
      </div>

      
    </div>
  );
};

export default BlogPost;
