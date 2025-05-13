import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: '#111', padding: '1rem', color: 'white' }}>
    <h2 style={{ display: 'inline', marginRight: '2rem' }}>NEXOLA TECH</h2>
    <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
    <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
    <Link to="/services" style={{ margin: '0 1rem' }}>Services</Link>
    <Link to="/pricing" style={{ margin: '0 1rem' }}>Pricing</Link>
    <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
    <Link to="/case-studies" className="hover:text-green-400">Case Studies</Link>
  </nav>
);

export default Navbar;
