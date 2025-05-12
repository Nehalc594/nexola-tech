import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setError('');
    setEmail('');
    // Later: Hook this to Mailchimp, SheetDB, etc.
  };

  return (
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Ahead of Cyber Threats</h2>
      <p className="mb-8 text-gray-200 max-w-xl mx-auto">
        Subscribe to receive exclusive cybersecurity insights, threat alerts, and service offers from NEXOLA TECH.
      </p>

      {submitted ? (
        <p className="text-green-400 font-medium">✅ Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition"
          >
            Subscribe
          </button>
        </form>
      )}

      {error && <p className="text-red-300 mt-2">{error}</p>}
    </section>
  );
};

export default NewsletterSignup;
