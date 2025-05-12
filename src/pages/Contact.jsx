import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      setError('All fields are required.');
      return;
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    form.submit(); // ✅ manually submit the form after validation
setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Contact Us
      </h2>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded text-center">
          ✅ Thank you! Your message has been sent.
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 mb-4 rounded text-center">
              {error}
            </div>
          )}
          <form
  action="https://sheetdb.io/api/v1/ora5i7kebobm9"
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-5 bg-white shadow-lg p-8 rounded-lg"
>
  {/* This input tells SheetDB how to parse it */}
  <input type="hidden" name="sheetdb" value="true" />

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
    <input
      type="text"
      name="data[name]"
      required
      className="w-full border border-gray-300 px-4 py-2 rounded"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
    <input
      type="email"
      name="data[email]"
      required
      className="w-full border border-gray-300 px-4 py-2 rounded"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea
      name="data[message]"
      required
      className="w-full border border-gray-300 px-4 py-2 rounded"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded"
  >
    Send Message
  </button>
  </form>
        </>
      )}
    </div>
  );
};

export default Contact;
