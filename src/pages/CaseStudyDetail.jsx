import React from 'react';
import { useParams, Link } from 'react-router-dom';

const caseStudyData = {
  'finance-app': {
    title: 'Securing a FinTech Startup',
    challenge: 'The client needed to meet SOC 2 compliance in 6 weeks while securing user transaction data.',
    solution: 'Nexola Tech conducted a full application security review, implemented SAST/SCA scans, and hardened APIs.',
    impact: 'Reduced vulnerabilities by 85%, passed SOC 2 audit with zero findings.',
  },
  'healthcare-network': {
    title: 'HIPAA Compliance for a Healthcare Provider',
    challenge: 'Lack of centralized logging, weak access controls, and audit trail gaps.',
    solution: 'Deployed SIEM, role-based access, and automated audit reporting.',
    impact: 'Achieved HIPAA readiness in 3 months with 24/7 visibility.',
  },
  'cloud-security': {
    title: 'Cloud Infrastructure Hardening',
    challenge: 'Risk of privilege escalation and poor IAM practices in AWS environments.',
    solution: 'Applied least-privilege IAM, security groups tuning, and GuardDuty alerts.',
    impact: 'No successful intrusion attempts in 9+ months post-hardening.',
  },
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const data = caseStudyData[id];

  if (!data) {
    return (
      <div className="py-20 px-6 text-center text-red-600">
        <h1 className="text-3xl font-bold">404 – Case Study Not Found</h1>
        <Link to="/case-studies" className="text-green-600 hover:underline">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{data.title}</h1>
      <div className="space-y-6 text-gray-700 text-lg">
        <p><strong>🧩 Challenge:</strong> {data.challenge}</p>
        <p><strong>🔧 Solution:</strong> {data.solution}</p>
        <p><strong>📈 Impact:</strong> {data.impact}</p>
      </div>
      <div className="mt-10">
        <Link to="/case-studies" className="text-green-600 hover:underline text-sm">
          ← Back to all Case Studies
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
