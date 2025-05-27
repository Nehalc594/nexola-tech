import { FaFilePdf } from 'react-icons/fa';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo and Summary */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">NEXOLA TECH</h2>
          <p className="text-sm">
            Enterprise-grade cybersecurity services to protect your data, people, and reputation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li>
  <Link to="/trust/nexola-trust-report.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
    <FaFilePdf className="text-red-400" />
    Trust Report
  </Link>
</li>

            <li>
              <Link
                to="/security-compliance"
                className="flex items-center gap-2 hover:text-white"
              >
                <FaShieldAlt className="text-green-500" />
                Security & Compliance
              </Link>
            </li>
            <li>
    <Link to="/trust-center" className="hover:text-white">
      Trust Center
    </Link>
  </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@nexolatech.com</li>
            <li>Phone: (812) 223-1730</li>
            <li>Address: Remote Worldwide 🌐</li>
          </ul>
        </div>
      </div>
<div className="mt-12 flex justify-center space-x-6">
  <a
    href="https://www.linkedin.com/company/nexolatech"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-600 transition"
  >
    <FaLinkedin size={24} />
  </a>
  <a
    href="https://twitter.com/nexolatech"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-600 transition"
  >
    <FaTwitter size={24} />
  </a>
  <a
    href="https://github.com/nexolatech"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-600 transition"
  >
    <FaGithub size={24} />
  </a>
</div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} NEXOLA TECH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
