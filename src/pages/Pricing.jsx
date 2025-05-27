import React from 'react';


const Pricing = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Choose the plan that suits your business size and security needs. All packages include 24/7 support and access to our certified security consultants.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Basic Plan */}
          <div className="border rounded-lg shadow p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Starter</h2>
            <p className="text-4xl font-extrabold text-green-600 mb-2">$499</p>
            <p className="text-sm text-gray-500 mb-6">per month</p>
            <ul className="space-y-3 text-sm text-left mb-6">
              <li>✔ Vulnerability Scans</li>
              <li>✔ Monthly Report</li>
              <li>✔ Email Support</li>
            </ul>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Get Started</button>
          </div>

          {/* Growth Plan */}
          <div className="border-2 border-green-600 rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Professional</h2>
            <p className="text-4xl font-extrabold text-green-600 mb-2">$1,499</p>
            <p className="text-sm text-gray-500 mb-6">per month</p>
            <ul className="space-y-3 text-sm text-left mb-6">
              <li>✔ Penetration Testing</li>
              <li>✔ Weekly Reports</li>
              <li>✔ Phone & Email Support</li>
              <li>✔ Compliance Consulting</li>
            </ul>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Choose Plan</button>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-lg shadow p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
            <p className="text-4xl font-extrabold text-green-600 mb-2">Custom</p>
            <p className="text-sm text-gray-500 mb-6">Tailored pricing</p>
            <ul className="space-y-3 text-sm text-left mb-6">
              <li>✔ Dedicated Security Engineer</li>
              <li>✔ 24/7 Monitoring & Response</li>
              <li>✔ SLA-Backed Uptime</li>
              <li>✔ Full Compliance & Audit Prep</li>
            </ul>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Contact Sales</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Pricing;
