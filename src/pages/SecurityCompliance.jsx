import { FaFilePdf } from 'react-icons/fa';
import { FaSearch, FaShieldAlt, FaBrain, FaSyncAlt, FaExclamationTriangle } from 'react-icons/fa';
import React from 'react';
import { Helmet } from 'react-helmet';

const SecurityCompliance = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-20 px-6">
      <Helmet>
        <title>Security & Compliance | Nexola Tech</title>
        <meta name="description" content="Learn how Nexola Tech protects your data through compliance with cybersecurity frameworks like NIST, ISO 27001, and SOC 2." />
      </Helmet>
        {/* Compliance Badge Strip (Single Image) */}
<div className="bg-white border-b py-8 px-4">
  <div className="max-w-5xl mx-auto flex justify-center items-center">
    <img
      src="/images/compliance/compliance-strip.png"
      alt="ISO 27001, NIST, SOC 2, GDPR Logos"
      className="w-full max-w-4xl h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
    />
  </div>
</div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Security & Compliance</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          At Nexola Tech, protecting your data is our top priority. We follow industry-leading cybersecurity standards and frameworks to ensure your systems and information remain secure, resilient, and fully compliant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* NIST */}
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">NIST Cybersecurity Framework</h3>
            <p className="text-gray-600 text-sm">
              We align our security practices with the NIST CSF to identify, protect, detect, respond, and recover from cyber threats in a structured way.
            </p>
          </div>

          {/* ISO 27001 */}
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">ISO/IEC 27001</h3>
            <p className="text-gray-600 text-sm">
              Our policies and risk management are structured in accordance with ISO/IEC 27001 standards to establish a formal Information Security Management System (ISMS).
            </p>
          </div>

          {/* SOC 2 */}
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">SOC 2 Type II (Coming Soon)</h3>
            <p className="text-gray-600 text-sm">
              We are preparing for SOC 2 Type II to formally validate our internal controls around security, availability, and confidentiality.
            </p>
          </div>

          {/* GDPR / HIPAA */}
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Regulatory Readiness</h3>
            <p className="text-gray-600 text-sm">
              We help clients meet compliance with global regulations including GDPR and HIPAA through secure architecture, access control, and encryption practices.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          For compliance documentation or audit inquiries, contact us at{' '}
          <a href="mailto:support@nexolatech.com" className="text-green-600 hover:underline">
            support@nexolatech.com
          </a>.
        </div>
       <div className="mt-6 text-center">
  <a
    href="/trust/nexola-trust-report.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 text-green-600 hover:underline text-sm font-medium"
  >
    <FaFilePdf className="text-red-500" />
    Download Our Trust Report (PDF)
  </a>
</div>
      </div>
      {/* NIST CSF Mapping */}
<div className="mt-16">
  <h2 className="text-2xl font-bold mb-4 text-center">NIST Framework Alignment</h2>
  <p className="text-center text-gray-700 mb-6">
    Nexola Tech aligns its cybersecurity services with the NIST Cybersecurity Framework (CSF), helping clients reduce risk and strengthen cyber resilience.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Identify */}
    <div className="p-5 border rounded shadow-sm bg-white">
      <h4 className="text-green-600 font-bold mb-2 flex items-center gap-2">
  <FaBrain /> Identify
</h4>
      <ul className="text-sm text-gray-600 list-disc list-inside">
        <li>Asset & Risk Assessment</li>
        <li>Security Policy Review</li>
        <li>Threat Modeling</li>
      </ul>
    </div>

    {/* Protect */}
    <div className="p-5 border rounded shadow-sm bg-white">
      <h4 className="text-green-600 font-bold mb-2 flex items-center gap-2">
  <FaShieldAlt /> Protect
</h4>
      <ul className="text-sm text-gray-600 list-disc list-inside">
        <li>Firewall Configuration</li>
        <li>Vulnerability Assessments</li>
        <li>Access Control Review</li>
      </ul>
    </div>

    {/* Detect */}
    <div className="p-5 border rounded shadow-sm bg-white">
      <h4 className="text-green-600 font-bold mb-2 flex items-center gap-2">
  <FaSearch /> Detect
</h4>
      <ul className="text-sm text-gray-600 list-disc list-inside">
        <li>SIEM Integration (Splunk)</li>
        <li>Log Analysis & Monitoring</li>
        <li>Threat Hunting</li>
      </ul>
    </div>

    {/* Respond */}
    <div className="p-5 border rounded shadow-sm bg-white">
      <h4 className="text-green-600 font-bold mb-2 flex items-center gap-2">
  <FaExclamationTriangle /> Respond
</h4>
      <ul className="text-sm text-gray-600 list-disc list-inside">
        <li>Incident Response Plans</li>
        <li>Attack Simulation (Pen Testing)</li>
        <li>Breach Containment</li>
      </ul>
    </div>

    {/* Recover */}
    <div className="p-5 border rounded shadow-sm bg-white">
      <h4 className="text-green-600 font-bold mb-2 flex items-center gap-2">
  <FaSyncAlt /> Recover
</h4>
      <ul className="text-sm text-gray-600 list-disc list-inside">
        <li>Post-incident Review</li>
        <li>Recovery Planning</li>
        <li>Backup & Restore Solutions</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default SecurityCompliance;
