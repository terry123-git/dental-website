import React from 'react';
import { motion } from 'framer-motion';
import { 
  StethoscopeIcon, 
  SparklesIcon, 
  ArrowRightLeftIcon, 
  SirenIcon 
} from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  Tooth: StethoscopeIcon,
  Sparkles: SparklesIcon,
  ArrowRightLeft: ArrowRightLeftIcon,
  Siren: SirenIcon
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
      <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <motion.button
          whileHover={{ x: 5 }}
          className="text-blue-600 font-medium flex items-center"
        >
          Learn More
          <ArrowRightLeftIcon className="w-4 h-4 ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;