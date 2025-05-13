import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex flex-wrap items-center justify-between max-w-full overflow-x-hidden">
    <Link to="/" className="flex items-center gap-2">
  <img
  src="/images/nexola-logo.png"
  alt="Nexola Tech Logo"
  className="h-12 w-auto bg-white rounded-lg p-1 shadow-md transform transition-transform duration-300 hover:scale-105"
/>
  <span className="text-lg font-bold text-white hidden sm:inline transition-transform duration-300 hover:scale-105">
  NEXOLA TECH
</span>
</Link>
    <div className="flex flex-wrap gap-4 justify-center w-full md:w-auto mt-4 md:mt-0">
      <Link to="/" className="hover:text-green-400">Home</Link>
      <Link to="/about" className="hover:text-green-400">About</Link>
      <Link to="/services" className="hover:text-green-400">Services</Link>
      <Link to="/pricing" className="hover:text-green-400">Pricing</Link>
      <Link to="/contact" className="hover:text-green-400">Contact</Link>
      <Link to="/case-studies" className="hover:text-green-400">Case Studies</Link>
    </div>
  </nav>
);

export default Navbar;
