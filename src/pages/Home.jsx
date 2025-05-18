import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Helmet>
        <title>Cybersecurity Consulting & Services | Nexola Tech</title>
        <meta name="description" content="Nexola Tech provides expert cybersecurity consulting, penetration testing, compliance, and managed security solutions to protect your business." />
        <meta property="og:title" content="Cybersecurity Consulting & Services | Nexola Tech" />
        <meta property="og:description" content="Expert cybersecurity services tailored to secure your infrastructure, applications, and data. Book a free security audit today." />
        <meta property="og:image" content="/images/wave.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybersecurity Consulting & Services | Nexola Tech" />
        <meta name="twitter:description" content="Nexola Tech offers penetration testing, compliance, and 24/7 managed security. Trusted by businesses worldwide." />
        <meta name="twitter:image" content="/images/wave.svg" />
      </Helmet>

      {/* Hero Section with Full Background */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        {/* Blurred background dots */}
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <div className="absolute top-10 left-10 w-40 h-40 bg-green-400 opacity-20 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute bottom-16 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full filter blur-2xl animate-pulse-slow"></div>
  <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-purple-400 opacity-20 rounded-full filter blur-2xl animate-pulse-slow"></div>
</div>
        <div className="relative z-10 max-w-4xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Secure Your Business. Empower Your Future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg text-gray-200 mb-6"
          >
            Nexola Tech provides enterprise-grade cybersecurity consulting and managed security services to protect your data, people, and reputation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Book a Free Audit
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-700 hover:text-white transition"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Animated Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { value: "99.99%", label: "Uptime Guarantee" },
              { value: "24/7", label: "Monitoring & Response" },
              { value: "50+", label: "Clients Secured" },
              { value: "5+", label: "Compliance Frameworks Aligned" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white shadow rounded-lg py-6"
              >
                <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-8 text-gray-700">Trusted by:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-center">
            <img src="/images/logos/microsoft.png" alt="Microsoft" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
            <img src="/images/logos/cisco.png" alt="Cisco" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
            <img src="/images/logos/crowdstrike.png" alt="CrowdStrike" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
            <img src="/images/logos/splunk.png" alt="Splunk" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
            <img src="/images/logos/amazon.png" alt="Amazon" className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-300" />
          </div>
        </div>
      </section>
      {/* What We Do Section */}
<section className="bg-gradient-to-br from-[#240065] to-[#3b0f91] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
      What We Do at Nexola Tech
    </h2>

    {/* 5-Step Process with Icons */}
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mb-16 text-center">
      {[
        { icon: "📊", title: "Scope Analysis" },
        { icon: "🌐", title: "Reconnaissance" },
        { icon: "🧪", title: "Vulnerability Identification" },
        { icon: "💻", title: "Exploitation & Risk Analysis" },
        { icon: "🔒", title: "Reporting & Remediation" }
      ].map((step, idx) => (
        <div
          key={idx}
          className="bg-white bg-opacity-10 rounded-xl p-6 flex flex-col items-center justify-center shadow hover:bg-opacity-20 transition"
        >
          <div className="text-4xl mb-3">{step.icon}</div>
          <h4 className="text-md font-semibold">{step.title}</h4>
        </div>
      ))}
    </div>

    {/* VAPT Description */}
    <div className="text-center max-w-4xl mx-auto mb-10">
      <p className="text-lg leading-relaxed">
        Vulnerability Assessment and Penetration Testing (VAPT) helps organizations identify and mitigate real-world security risks. At Nexola Tech, we simulate attacker behavior to uncover weaknesses across applications, networks, and APIs — and help you fix them before bad actors find them.
      </p>
    </div>

    {/* Core Service List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-white text-sm sm:text-base font-medium">
      <div className="flex items-start gap-2">
        <span className="text-green-400">✔</span>
        Network / Infrastructure Penetration Testing
      </div>
      <div className="flex items-start gap-2">
        <span className="text-green-400">✔</span>
        Web Application Penetration Testing (WAPT)
      </div>
      <div className="flex items-start gap-2">
        <span className="text-green-400">✔</span>
        Mobile Application Penetration Testing
      </div>
      <div className="flex items-start gap-2">
        <span className="text-green-400">✔</span>
        API Security Assessment & Testing
      </div>
      <div className="flex items-start gap-2">
        <span className="text-green-400">✔</span>
        Source Code Review
      </div>
      <div className="flex items-start gap-2">
        <span className="text-green-400">✔</span>
        Cybersecurity Trainings & Certifications
      </div>
    </div>
  </div>
  {/* OT Security Focus */}
<div className="mt-16 bg-white bg-opacity-10 border-t border-white/10 rounded-xl p-8 shadow-inner">
  <h3 className="text-2xl font-semibold mb-4 text-purple-300 text-center">
    Specialized in OT/ICS Security
  </h3>
  <p className="text-sm text-purple-100 text-center max-w-3xl mx-auto mb-6">
    Nexola Tech brings advanced protection to operational technology environments — such as manufacturing, energy, and critical infrastructure — by identifying threats in Industrial Control Systems (ICS) and SCADA networks.
  </p>
  <ul className="text-sm text-purple-100 space-y-2 list-disc list-inside max-w-xl mx-auto">
    <li>Risk assessments tailored to OT protocols and devices</li>
    <li>Network segmentation and traffic visibility for ICS</li>
    <li>Deployment of purpose-built tools like Claroty and Nozomi</li>
    <li>Incident response planning for plant environments</li>
    <li>Support for NERC CIP, IEC 62443, and sector-specific compliance</li>
  </ul>
</div>

</section>
{/* Features, IT Tools, and OT Tools Section */}
<section className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
      Features & Benefits of VAPT
    </h2>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {[
        "Identify hidden vulnerabilities before attackers do",
        "Comply with security frameworks like NIST, ISO, SOC 2",
        "Protect business reputation and customer trust",
        "Enhance security posture across cloud, apps, networks",
        "Detect misconfigurations and insecure code",
        "Get prioritized remediation recommendations"
      ].map((benefit, i) => (
        <div
          key={i}
          className="bg-green-50 border border-green-100 rounded-lg p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="text-green-600 font-semibold mb-2">✔ Benefit</div>
          <p className="text-sm">{benefit}</p>
        </div>
      ))}
    </div>

    {/* IT & OT Tools Headings */}
    <h3 className="text-2xl font-semibold mb-6 text-center">Cybersecurity Tools We Use</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* IT Tools */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-green-700">IT Security Tools</h4>
        <ul className="space-y-3 text-sm list-disc list-inside">
          <li>Burp Suite – for Web App Testing</li>
          <li>Nmap & Nessus – for network scanning & vulnerability analysis</li>
          <li>Metasploit – for exploitation testing</li>
          <li>OWASP ZAP – open-source security scanner</li>
          <li>Wireshark – network packet analysis</li>
          <li>Splunk – log monitoring and alerting</li>
          <li>Snort – intrusion detection and prevention</li>
        </ul>
      </div>

      {/* OT Tools */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-purple-700">OT Security Tools</h4>
        <ul className="space-y-3 text-sm list-disc list-inside">
          <li>Claroty – industrial control system (ICS) monitoring</li>
          <li>Nozomi Networks – threat detection for OT environments</li>
          <li>OTORIO – industrial security assessments & compliance</li>
          <li>Dragos – OT threat intelligence & response</li>
          <li>Forescout – device visibility and policy enforcement</li>
          <li>Radiflow – SCADA & ICS vulnerability protection</li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* CTA with Tablet and Trust Quotes */}
<section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    {/* Trust Quotes */}
    <div className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
        We Test. We Secure. You Grow.
      </h2>
      <p className="text-green-100 text-lg">
        Trusted by organizations worldwide to harden systems and stop threats.
      </p>
    </div>

    {/* Tablet Image */}
    <div className="flex justify-center mb-8">
      <img
        src="/images/tablet-cta.png"
        alt="Cybersecurity dashboard on tablet"
        className="w-full max-w-md sm:max-w-lg rounded-lg shadow-lg"
      />
    </div>

    {/* CTA Button */}
    <Link
      to="/contact"
      className="inline-block mt-4 px-8 py-3 bg-white text-green-800 font-semibold rounded hover:bg-green-100 transition"
    >
      Contact Us
    </Link>
  </div>
</section>

    </div>

  );
};

export default Home;
