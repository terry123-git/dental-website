import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import AnimatedSection from '../components/AnimatedSection';
import TrustIndicators from '../components/home/TrustIndicators';
import PromotionsSection from '../components/home/PromotionsSection';
import InsuranceSection from '../components/home/InsuranceSection';
import VirtualTour from '../components/VirtualTour';
import { services } from '../data/services';
import { Star, Clock, Phone, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <TrustIndicators />

      {/* Features Section */}
      <AnimatedSection className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Extended Hours', desc: 'Open 7 days a week' },
              { icon: Phone, title: 'Emergency Care', desc: '24/7 Support' },
              { icon: Star, title: 'Top Rated', desc: '5-star service' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <VirtualTour />

      {/* Services Section */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive dental care for your entire family
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <motion.a
              href="/services"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              whileHover={{ x: 10 }}
            >
              <span>View all services</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </AnimatedSection>

      <PromotionsSection />

      <InsuranceSection />

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Smile?
          </h2>
          <motion.a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Appointment Today
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;