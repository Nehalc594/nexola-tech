import React from 'react';
import { useParams, Link } from 'react-router-dom';
import serviceData from '../data/services';
import Footer from '../components/Footer';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Service not found.</h2>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <div className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <Icon size={36} className="text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{service.title}</h1>
          <p className="text-gray-600 text-lg">{service.description}</p>
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-lg h-auto object-contain mx-auto mt-8 rounded shadow"
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded transition"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;