import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">NEXOLA TECH</div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.36 6.64a1 1 0 0 1 0 1.41L13.41 13l4.95 4.95a1 1 0 0 1-1.41 1.41L12 14.41l-4.95 4.95a1 1 0 0 1-1.41-1.41L10.59 13 5.64 8.05a1 1 0 1 1 1.41-1.41L12 11.59l4.95-4.95a1 1 0 0 1 1.41 0z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/services" className="hover:text-green-400">Services</Link>
          <Link to="/pricing" className="hover:text-green-400">Pricing</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
          <Link to="/case-studies" className="hover:text-green-400">Case Studies</Link>
          <Link to="/blog" className="hover:text-green-400">Blog</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div
    className="lg:hidden mt-4 space-y-3 text-center text-sm font-medium
               transform transition duration-300 ease-out animate-fade-slide"
  >
    <Link to="/" className="block hover:text-green-400">Home</Link>
    <Link to="/about" className="block hover:text-green-400">About</Link>
    <Link to="/services" className="block hover:text-green-400">Services</Link>
    <Link to="/pricing" className="block hover:text-green-400">Pricing</Link>
    <Link to="/contact" className="block hover:text-green-400">Contact</Link>
    <Link to="/case-studies" className="block hover:text-green-400">Case Studies</Link>
    <Link to="/blog" className="block hover:text-green-400">Blog</Link>
  </div>
)}
    </nav>
  );
};

export default Navbar;
