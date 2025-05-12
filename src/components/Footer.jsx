import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-green-400">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-green-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-green-400" />
            </a>
            <a href="mailto:contact@nexolatech.com">
              <FaEnvelope className="hover:text-green-400" />
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">NEXOLA TECH</h4>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} NEXOLA TECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
