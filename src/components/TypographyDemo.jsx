import React from 'react';

const TypographyDemo = () => {
  return (
    <section className="p-10 max-w-4xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-gray-800">Heading Level 1</h1>
      <h2 className="text-3xl font-bold text-gray-800">Heading Level 2</h2>
      <h3 className="text-2xl font-semibold text-gray-800">Heading Level 3</h3>
      <p className="text-lg text-gray-600">
        This is a paragraph with standard body text. It uses consistent gray color and spacing for readability.
      </p>

      <div className="flex gap-4 flex-wrap">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition">
          Primary CTA
        </button>
        <button className="border border-white hover:border-green-400 text-white hover:text-green-400 px-6 py-2 rounded transition bg-transparent">
          Secondary CTA
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h3>
          <p className="text-gray-600">Reusable card layout for services, pricing, or testimonials.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h3>
          <p className="text-gray-600">Hover, spacing, and text follow brand consistency.</p>
        </div>
      </div>
    </section>
  );
};

export default TypographyDemo;
