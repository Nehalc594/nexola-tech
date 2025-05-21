import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/nexola-logo.png" alt="Nexola Logo" className="h-9 w-auto" />
          <span className="text-green-600 font-bold text-xl">NEXOLA TECH</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="hover:text-green-600">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <HiMenuAlt3 className="h-7 w-7 text-green-700" />
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sliding Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-64 h-screen bg-white z-50 p-6 shadow-md overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-green-700">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <HiX className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              <ul className="space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-800 hover:text-green-600 font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
