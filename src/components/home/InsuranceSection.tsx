import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, Shield } from 'lucide-react';

const InsuranceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Insurance & Payment Options</h2>
          <p className="mt-4 text-xl text-gray-600">We make dental care accessible and affordable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Insurance Plans</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Delta Dental</li>
              <li>Cigna</li>
              <li>MetLife</li>
              <li>Aetna</li>
              <li>Guardian</li>
              <li>United Healthcare</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Credit Cards</li>
              <li>Debit Cards</li>
              <li>Cash</li>
              <li>HSA/FSA</li>
              <li>Apple Pay</li>
              <li>Google Pay</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Financing Options</h3>
            <ul className="space-y-2 text-gray-600">
              <li>CareCredit</li>
              <li>In-House Payment Plans</li>
              <li>0% Interest Options</li>
              <li>Flexible Terms</li>
              <li>Easy Application</li>
              <li>Quick Approval</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Don't see your insurance listed? Contact us to verify your coverage.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Verify Insurance
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceSection;