import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Timer } from 'lucide-react';
import PromotionModal from './PromotionModal';
import { useInView } from 'react-intersection-observer';

const promotions = [
  {
    title: 'New Patient Special',
    description: 'Comprehensive exam, X-rays, and cleaning for $99',
    validUntil: 'March 31, 2024',
    details: [
      'Complete oral examination',
      'Full set of digital X-rays',
      'Professional teeth cleaning',
      'Personalized treatment plan',
      'Oral cancer screening'
    ],
    terms: [
      'Valid for new patients only',
      'Cannot be combined with other offers',
      'Insurance may cover portion of costs',
      'Appointment must be scheduled before expiration date'
    ]
  },
  {
    title: 'Free Teeth Whitening',
    description: 'With any Invisalign® treatment started this month',
    validUntil: 'Limited time offer',
    details: [
      'Professional-grade whitening treatment',
      'Custom-fitted whitening trays',
      'Take-home whitening kit',
      'Follow-up care instructions'
    ],
    terms: [
      'Must start Invisalign® treatment to qualify',
      'Full payment or financing must be arranged',
      'Not valid with insurance coverage for whitening',
      'Results may vary'
    ]
  },
  {
    title: 'Senior Discount',
    description: '15% off all treatments for patients 65+',
    validUntil: 'Ongoing',
    details: [
      'Applies to all dental procedures',
      'Includes cosmetic treatments',
      'Valid for routine cleanings',
      'Covers emergency services'
    ],
    terms: [
      'Must present valid ID showing age 65 or older',
      'Cannot be combined with insurance or other offers',
      'Excludes products and medications',
      'Subject to change without notice'
    ]
  }
];

const PromotionsSection = () => {
  const [selectedPromo, setSelectedPromo] = React.useState<typeof promotions[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Special Offers</h2>
          <p className="mt-4 text-xl text-gray-600">Take advantage of our limited-time promotions</p>
          <div className="mt-4 inline-flex items-center text-sm text-blue-600">
            <Timer className="w-4 h-4 mr-1" />
            <span>Limited time offers - Don't miss out!</span>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{promo.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{promo.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">Valid until: {promo.validUntil}</span>
                  <motion.button
                    onClick={() => setSelectedPromo(promo)}
                    whileHover={{ x: 5 }}
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-3 py-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedPromo && (
        <PromotionModal
          promotion={selectedPromo}
          onClose={() => setSelectedPromo(null)}
        />
      )}
    </section>
  );
};

export default PromotionsSection;