import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } }
};

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative"
        variants={modal}
        onClick={(e) => e.stopPropagation()} // prevents closing on click inside modal
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>

        <div className="text-green-600 mb-2">
          {React.createElement(service.icon, { size: 32 })}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
        <p className="text-gray-700 text-sm mb-6">{service.description}</p>

        <Link
          to={`/services/${service.slug}`}
          className="text-green-600 font-medium hover:underline"
          onClick={onClose}
        >
          View full service →
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceModal;
