import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../utils/getPosts';

const Blog = () => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">From the Nexola Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block p-6 rounded shadow bg-white hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
