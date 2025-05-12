import { motion } from 'framer-motion';
import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$499',
      features: ['Basic Security Audit', 'Email Support', 'Report in 5 Days'],
      cta: 'Get Started',
    },
    {
      title: 'Professional',
      price: '$1,299',
      features: ['Full Vulnerability Scan', '24/7 Monitoring', 'Detailed Remediation Plan'],
      cta: 'Book Now',
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      features: ['Custom Security Solutions', 'Dedicated Team', 'On-Site Audit & Compliance'],
      cta: 'Schedule a Call',
    },
  ];

  return (
    <div className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg p-8 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-green-600 mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>✔️ {feature}</li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;