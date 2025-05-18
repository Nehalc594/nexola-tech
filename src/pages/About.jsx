import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const About = () => {
  const [selected, setSelected] = useState(null);

  const values = [
    { title: "Transparency", desc: "We believe in open conversations and full visibility into your risks." },
    { title: "Speed", desc: "We move quickly and deliver fast security insights and response." },
    { title: "Excellence", desc: "We hold ourselves to the highest standards in every audit and every test." },
    { title: "Trust", desc: "Cybersecurity is built on trust — we never take it for granted." },
    { title: "Flexibility", desc: "We tailor our services to your tech stack, team, and risk posture." },
    { title: "Impact", desc: "We don’t just report — we help you fix vulnerabilities." }
  ];

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>About Nexola Tech</title>
        <meta name="description" content="Learn about Nexola Tech's mission, values, and journey to becoming a trusted cybersecurity startup." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Who We Are</h1>
          <p className="text-lg sm:text-xl text-green-100">
            Nexola Tech is a modern cybersecurity startup built to protect businesses from evolving digital threats — with speed, agility, and precision.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We’re on a mission to make enterprise-grade cybersecurity accessible to companies of all sizes. Whether you're a startup or a large enterprise, Nexola delivers scalable protection with deep expertise.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Why We Exist</h3>
          <p className="text-gray-600">
            Because cyber threats don’t wait — and your business deserves defense that’s fast, flexible, and future-ready.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nexola Tech was founded by cybersecurity engineers who believed most businesses were being left behind — relying on outdated tools or overpriced audits.
            </p>
            <p className="text-gray-600">
              So we built Nexola to fix that. A flexible, high-trust cybersecurity partner that blends automation with hands-on expertise.
            </p>
          </div>
          <div className="text-center">
            <img src="/images/hero-bg.png" alt="Cybersecurity Journey" className="rounded-lg shadow-md max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Our Values - Flip Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <FlipCard
                key={idx}
                index={idx}
                title={val.title}
                description={val.desc}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
      </section>
      {/* InfoSec Training & Services */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-4 text-green-800">
        Information Security Training & Services
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        At Nexola Tech, we believe cybersecurity starts with education. That’s why we offer real-world training programs designed to empower students, professionals, and corporate teams with the skills needed to defend digital systems.
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
        <li>Intro to Ethical Hacking & Penetration Testing</li>
        <li>Web & API Security Workshops</li>
        <li>Security Tool Hands-On Labs (Burp, Metasploit, Wireshark)</li>
        <li>CTF Challenges & Capstone Projects</li>
        <li>Industry Certification Preparation (CEH, CompTIA Security+)</li>
      </ul>
    </div>

    <div className="text-center">
      <img
        src="/images/security-training.png"
        alt="Security Training"
        className="rounded-lg shadow-md max-w-full h-auto"
      />
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Work with us to secure your future.</h2>
        <p className="mb-6 text-green-100">We're building the future of proactive cybersecurity for modern businesses.</p>
        <Link to="/contact" className="inline-block px-6 py-3 bg-white text-green-800 font-semibold rounded hover:bg-green-100 transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

const FlipCard = ({ index, title, description, selected, setSelected }) => {
  const isFlipped = selected === index;

  const handleClick = () => {
    setSelected(isFlipped ? null : index);
  };

  return (
    <div className="perspective cursor-pointer" onClick={handleClick}>
      <div className={`relative transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="bg-green-100 text-green-900 font-semibold p-6 rounded-lg shadow h-48 flex items-center justify-center backface-hidden">
          {title}
        </div>
        {/* Back */}
        <div className="bg-green-700 text-white p-6 rounded-lg shadow h-48 flex items-center justify-center rotate-y-180 absolute top-0 left-0 w-full backface-hidden">
          {description}
        </div>
      </div>
    </div>
  );
};

export default About;
