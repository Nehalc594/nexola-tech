import React from 'react';

const team = [
  {
    name: 'Nehal Chowhan.',
    title: 'Founder & CEO',
    image: 'https://via.placeholder.com/150',
    bio: 'Cybersecurity leader with experience in cloud security, compliance, and offensive security operations.',
  },
  {
    name: 'Shiva Nagavaram',
    title: 'Lead Security Consultant',
    image: 'https://via.placeholder.com/150',
    bio: 'Expert in penetration testing and secure SDLC, with a decade of experience across banking and tech.',
  },
  {
    name: 'Pradeep Tirandasu',
    title: 'Cloud Security Architect',
    image: 'https://via.placeholder.com/150',
    bio: 'Focused on AWS/Azure security architecture and DevSecOps automation for scalable cloud defenses.',
  },
];

const About = () => {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Nexola Tech</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
        Nexola Tech is a cybersecurity consulting company dedicated to helping businesses stay secure in an evolving digital world. We combine deep technical expertise with a passion for protecting what matters most — your data, your customers, and your reputation.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-4">🚀 Our Mission</h2>
          <p>
            To empower organizations of all sizes with world-class security services that prevent threats, ensure compliance, and enable confident growth.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">💡 Our Values</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Integrity & transparency</li>
            <li>Security-first thinking</li>
            <li>Client-focused innovation</li>
            <li>Continuous learning</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">👨‍💼 Our Leadership</h2>
          <p>
            Founded by cybersecurity professionals with experience in securing cloud platforms, enterprise networks, and critical systems for financial and healthcare clients. We're on a mission to become the world’s most trusted security consulting brand.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">📜 Certifications & Standards</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>NIST, ISO27001, SOC 2, HIPAA, GDPR</li>
            <li>CEH, CISSP, AWS Certified Security</li>
            <li>Partnerships with top-tier security vendors</li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
  <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet the Team</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {team.map((member, i) => (
      <div
  key={i}
  className="bg-white rounded-lg shadow p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
>
        <img
  src={member.image}
  alt={member.name}
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 hover:scale-110"
/>
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <p className="text-green-600 font-medium">{member.title}</p>
        <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default About;
