import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-xl">Comprehensive dental care tailored to your needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Insurance & Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Accepted Insurance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Delta Dental</li>
                <li>Cigna</li>
                <li>MetLife</li>
                <li>Aetna</li>
                <li>Guardian</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Credit Cards</li>
                <li>Cash</li>
                <li>Payment Plans</li>
                <li>CareCredit</li>
                <li>FSA/HSA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;