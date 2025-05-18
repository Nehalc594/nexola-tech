import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import serviceData from '../data/services';
import Footer from './Footer';
import ServiceModal from './ServiceModal';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <Helmet>
        <title>Our Cybersecurity Services | Nexola Tech</title>
        <meta
          name="description"
          content="Explore Nexola Tech’s professional cybersecurity services including vulnerability assessments, penetration testing, incident response, and more."
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cybersecurity Services",
            "provider": {
              "@type": "Organization",
              "name": "Nexola Tech",
              "url": "https://nexolatech.com"
            },
            "serviceType": "Cybersecurity",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "description": "Explore Nexola Tech’s professional cybersecurity services including vulnerability assessments, penetration testing, incident response, and more."
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nexola Tech",
            "url": "https://nexolatech.com",
            "logo": "https://nexolatech.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/nexolatech",
              "https://twitter.com/nexolatech"
            ]
          }
        `}</script>
      </Helmet>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-20">
            What We Offer
          </h1>

          {serviceData.map((service, index) => (
            <motion.div
              key={service.slug}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } w-full mb-20`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-[500px] h-auto object-contain rounded-lg shadow"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 px-6 flex flex-col justify-center">
                <div className="max-w-xl mx-auto">
                  {service.icon && (
                    <div className="text-green-600 mb-2">
                      {React.createElement(service.icon, { size: 28 })}
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-green-600 hover:underline font-medium"
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      <Footer />
    </>
  );
};

export default Services;
