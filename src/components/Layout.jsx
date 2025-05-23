import { AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Global Header */}
      <header className="bg-[#0c1b3a] shadow-md sticky top-0 z-50 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/nexola-logo.png"
              alt="Nexola Tech"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-green-600 group-hover:text-green-700 font-[Inter]">
              NEXOLA TECH
            </span>
          </Link>

          {/* Hamburger button */}
          <motion.button
            className="sm:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9, rotate: 15 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex space-x-4 text-sm font-medium text-white">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/security-compliance">Security & Compliance</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden bg-[#0c1b3a] px-6 pb-6 space-y-4 text-sm font-medium text-white overflow-visible"
            >
              <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2">Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="block py-2">About</Link>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="block py-2">Services</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
