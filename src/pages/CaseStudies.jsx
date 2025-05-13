import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'finance-app',
    title: 'Securing a FinTech Startup',
    excerpt: 'Learn how Nexola Tech helped a finance app achieve SOC 2 compliance and reduce vulnerabilities by 85%.',
  },
  {
    id: 'healthcare-network',
    title: 'HIPAA Compliance for a Healthcare Provider',
    excerpt: 'How we improved audit readiness and deployed continuous monitoring for a regional healthcare network.',
  },
  {
    id: 'cloud-security',
    title: 'Cloud Infrastructure Hardening',
    excerpt: 'See how we locked down AWS environments for a SaaS company, preventing lateral movement and privilege escalation.',
  },
];

const CaseStudies = () => {
  return (
    <div className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Case Studies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {caseStudies.map((study) => (
          <Link to={`/case-studies/${study.id}`} key={study.id}>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{study.title}</h3>
              <p className="text-gray-600">{study.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
