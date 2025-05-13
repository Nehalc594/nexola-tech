import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="text-green-600 hover:underline text-lg">
        ← Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
