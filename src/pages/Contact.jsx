import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/moqgyqbw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        throw new Error('Network error');
      }
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>Let's Talk | Nexola Tech</title>
        <meta name="description" content="Connect with Nexola Tech to review your infrastructure and application security. We’re ready to help." />
      </Helmet>

      {/* Intro Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">LET’S TALK</h1>
          <p className="text-lg sm:text-xl text-green-100">
            Our team is ready to review your infrastructure or application security and provide actionable tips to increase protection.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <motion.div
  className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.2 }}
>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">How can we help you?</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-green-600 focus:border-green-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition font-medium"
            >
              Send Message
            </button>
          </form>

          {status && status === 'Message sent successfully!' && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="mt-6 flex items-center justify-center gap-2 text-green-700 text-sm font-medium"
  >
    <FaCheckCircle size={20} />
    <span>{status}</span>
  </motion.div>
)}

{status && status !== 'Message sent successfully!' && (
  <p className="text-center mt-6 text-red-600 text-sm">{status}</p>
)}

        </motion.div>
      </section>

      {/* Contact Icons Section */}
      <section className="bg-white py-16 px-6">
  <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
    
    {/* Address */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ rotate: 3 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaMapMarkerAlt size={40} className="text-green-600 mb-2 mx-auto" />
      </motion.div>
      <p className="font-medium text-sm">Remote Worldwide 🌐</p>
    </motion.div>

    {/* Phone */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ rotate: 3 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaPhoneAlt size={40} className="text-green-600 mb-2 mx-auto" />
      </motion.div>
      <p className="font-medium text-sm">+1 (123) 456-7890</p>
    </motion.div>

    {/* Email */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ rotate: -3 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaEnvelope size={40} className="text-green-600 mb-2 mx-auto" />
      </motion.div>
      <p className="font-medium text-sm">support@nexolatech.com</p>
    </motion.div>

  </div>
</section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white text-center py-16 px-6">
        <motion.section
  className="bg-gradient-to-r from-green-600 to-green-800 text-white text-center py-16 px-6"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-bold mb-3">Any questions? Get in touch today.</h2>
  <p className="text-green-100 mb-4">We're here to answer your security concerns.</p>
  <p className="text-white font-semibold text-lg">📞 +1 (123) 456-7890</p>
  <p className="text-white font-semibold text-lg">✉️ support@nexolatech.com</p>
</motion.section>

      </section>

    
    </div>
  );
};

export default Contact;
