import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative text-white overflow-hidden max-w-[100vw]">
      {/* Background SVG Wave */}
      <div className="absolute inset-0">
        <img
  src="https://www.svgrepo.com/show/353655/wave-top.svg"
  alt="Wave"
  className="w-full h-full object-cover opacity-20 max-w-none"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-90" />
      </div>

      <div className="relative z-10 py-28 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold leading-tight mb-6"
        >
          Secure Your Business. Empower Your Future.
        </motion.h1>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Nexola Tech provides enterprise-grade cybersecurity consulting and managed security services to protect your data, people, and reputation.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-full">
          <Link
            to="/contact"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Book a Free Audit
          </Link>
          <Link
            to="/services"
            className="border border-white hover:border-green-400 hover:text-green-400 px-8 py-3 rounded-lg font-semibold transition"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Client Logos / Trust Badges */}
<div className="relative z-10 mt-12 px-6 max-w-6xl mx-auto">
  <h3 className="text-white text-center mb-4 text-lg font-medium">Trusted by:</h3>
  <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 w-auto object-contain" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 w-auto object-contain" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Google_2015_logo.svg" alt="Google" className="h-8 w-auto object-contain" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/IBM_logo.svg" alt="IBM" className="h-8 w-auto object-contain" />
  </div>
</div>
    </section>
  );
};

export default HeroSection;
