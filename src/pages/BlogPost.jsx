import React from 'react';
import { useParams } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Import your markdown string (exported from .md.js)
import howToHardenAws from '../posts/how-to-harden-aws.md.js';

const postMap = {
  'how-to-harden-aws': howToHardenAws,
};

const BlogPost = () => {
  const { slug } = useParams();
  const raw = postMap[slug];

  if (!raw) {
    return <div className="text-center py-20 text-red-600">⚠️ Post not found.</div>;
  }

  const { content, data } = matter(raw);

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{data.date}</p>
      <ReactMarkdown className="prose prose-lg text-gray-700" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;
