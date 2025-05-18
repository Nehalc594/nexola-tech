import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How does Nexola Tech protect client data?',
    answer:
      'We align with frameworks such as NIST CSF, ISO 27001, and SOC 2. All client data is encrypted in transit and at rest, with access control policies enforced.',
  },
  {
    question: 'Where is Nexola’s infrastructure hosted?',
    answer:
      'Our cloud environments are hosted securely via AWS, following regional best practices and isolation principles.',
  },
  {
    question: 'Does Nexola Tech have a SOC 2 report?',
    answer:
      'We are in the process of preparing for SOC 2 Type II. Our internal security policies are documented and audited regularly.',
  },
  {
    question: 'Who can I contact for security questions or incidents?',
    answer:
      'Please email us at support@nexolatech.com for any security inquiries or responsible disclosure.',
  },
];

const TrustCenter = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-20 px-6">
      <Helmet>
        <title>Trust Center | Nexola Tech</title>
        <meta name="description" content="Nexola Tech’s Trust Center: View our compliance documents, uptime status, and data protection practices." />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Nexola Tech Trust Center</h1>
        <p className="text-center text-gray-700 mb-10">
          We believe trust is earned through transparency, security, and continuous compliance.
        </p>

        {/* Compliance Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Compliance Documents</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/trust/nexola-trust-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:underline"
            >
              <FaFilePdf className="text-red-500" />
              Download Trust Report (PDF)
            </a>
            <span className="text-sm text-gray-500">SOC 2: In Progress</span>
          </div>
        </div>

        {/* Uptime Badge (Placeholder) */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">System Status</h2>
          <p className="text-sm text-gray-600 mb-2">
            Our core systems are monitored 24/7. Uptime monitored externally.
          </p>
          <img
  src="/images/status-badge.png"
  alt="All Systems Operational"
  className="h-12 mx-auto rounded"
  loading="lazy"
/>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Security FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="border rounded-md p-4">
                <summary className="cursor-pointer font-medium flex items-center justify-between">
                  {faq.question}
                  <FaChevronDown className="text-sm ml-2" />
                </summary>
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-600 mb-2">Still have questions?</p>
          <Link to="/contact" className="text-green-600 font-medium hover:underline">
            Contact our security team →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrustCenter;
