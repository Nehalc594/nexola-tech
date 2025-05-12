import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiTarget, FiServer, FiCheckCircle, FiAlertCircle, FiCloud } from 'react-icons/fi';
import React from 'react';

const services = [
  {
    title: 'Vulnerability Assessments',
    slug: 'vulnerability-assessments',
    description: 'Identify and prioritize security flaws in your network, systems, and applications.',
    icon: <FiShield size={24} className="text-green-600" />
  },
  {
    title: 'Penetration Testing',
    slug: 'penetration-testing',
    description: 'Simulated cyberattacks to test your defenses and report actionable weaknesses.',
    icon: <FiTarget size={24} className="text-green-600" />
  },
  {
    title: 'Managed IT Security',
    slug: 'managed-it-security',
    description: '24/7 monitoring, patching, and threat prevention tailored for growing businesses.',
    icon: <FiServer size={24} className="text-green-600" />
  },
  {
    title: 'Compliance Consulting',
    slug: 'compliance-consulting',
    description: 'Prepare and align with NIST, ISO27001, SOC 2, HIPAA, and GDPR standards.',
    icon: <FiCheckCircle size={24} className="text-green-600" />
  },
  {
    title: 'Incident Response',
    slug: 'incident-response',
    description: 'Immediate support to identify, contain, and recover from cybersecurity incidents.',
    icon: <FiAlertCircle size={24} className="text-green-600" />
  },
  {
    title: 'Cloud Security',
    slug: 'cloud-security',
    description: 'Protect your AWS, Azure, and Google Cloud infrastructure from advanced threats.',
    icon: <FiCloud size={24} className="text-green-600" />
  },
];

const Services = () => {
  return (
    <div className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Core Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {services.map((service, index) => (
  <Link to={`/services/${service.slug}`} key={index}>
  <motion.div
    key={index}
    className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </motion.div>
</Link>
))}
      </div>
    </div>
  );
};

export default Services;
