import { Link } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Service not found.</h2>
      </div>
    );
  }

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto text-center">
      <div className="flex justify-center mb-4">{service.icon}</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h1>
      <p className="text-gray-600">{service.description}</p>
      {/* Price Section */}
{service.price && (
  <div className="mt-6">
    <p className="text-xl font-semibold text-green-600">Pricing: {service.price}</p>
  </div>
)}

{/* Features List */}
{service.features && (
  <div className="mt-6 text-left max-w-md mx-auto">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">What's Included:</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      {service.features.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)}
      <div className="mt-8">
  <Link
    to="/services"
    className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded transition"
  >
    ← Back to Services
  </Link>
</div>

    </div>
  );
};

export default ServiceDetail;
