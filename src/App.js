import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './components/Services';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CaseStudies from './pages/CaseStudies';
import SecurityCompliance from './pages/SecurityCompliance';
import TrustCenter from './pages/TrustCenter';

// ✅ Initialize Google Analytics once
ReactGA.initialize("G-9TTL35NQ7G"); // Replace with your GA4 Measurement ID

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // ✅ Track page view on every route change
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="security-compliance" element={<SecurityCompliance />} />
        <Route path="trust-center" element={<TrustCenter />} />
      </Route>
    </Routes>
  );
};

export default App;
