import React from 'react';

const services = [
  {
    title: ' ',
    description:
      'We scan your systems to uncover critical vulnerabilities before attackers do. Our detailed reports help you prioritize and fix issues fast.',
    image: '/images/services/vulnerability.png',
  },
  {
    title: ' ',
    description:
      'We simulate real-world attacks to find weak spots in your applications, APIs, and infrastructure. Includes exploit evidence and remediation steps.',
    image: '/images/services/penetration.png',
  },
  {
    title: ' ',
    description:
      'End-to-end support with 24/7 monitoring, patch management, antivirus, and response — all managed by our expert security team.',
    image: '/images/services/managed-security.png',
  },
  {
    title: ' ',
    description:
      'We help you prepare for audits, close gaps, and align with NIST, ISO27001, SOC 2, HIPAA, and GDPR without the stress.',
    image: '/images/services/compliance.png',
  },
  {
    title: ' ',
    description:
      'Our experts respond rapidly to security breaches, isolate threats, and help your business recover securely with full forensics.',
    image: '/images/services/incident-response.png',
  },
  {
    title: ' ',
    description:
      'Secure your cloud with identity hardening, segmentation, logging, and detection for AWS, Azure, or Google Cloud.',
    image: '/images/services/cloud-security.png',
  },
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-20">
          What We Offer
        </h1>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            } w-full min-h-[400px] mb-20`}
          >
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
  <img
    src={service.image}
    alt={service.title}
    className="w-full max-w-[480px] h-auto object-contain"
  />
</div>
            <div className="w-full lg:w-1/2 px-4 py-6 lg:py-0 flex flex-col justify-center">
  <div className="max-w-[600px] mx-auto">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-snug">
      {service.title}
    </h2>
    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
      {service.description}
    </p>
  </div>
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
