import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Star, BadgeCheck } from 'lucide-react';

const indicators = [
  {
    icon: Award,
    title: 'Top Rated Clinic',
    description: 'Consistently rated 5 stars by our patients'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Your data is safe and secure with us'
  },
  {
    icon: BadgeCheck,
    title: 'Board Certified',
    description: 'All our dentists are board certified'
  },
  {
    icon: Star,
    title: 'Excellence in Care',
    description: 'Award-winning dental services'
  }
];

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <indicator.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{indicator.title}</h3>
                  <p className="text-sm text-gray-600">{indicator.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;