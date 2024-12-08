import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, AlertCircle, Settings } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="space-y-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Calendar className="w-5 h-5" />
        <span>Book Appointment</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <FileText className="w-5 h-5" />
        <span>Medical Records</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <AlertCircle className="w-5 h-5" />
        <span>Report Issue</span>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <Settings className="w-5 h-5" />
        <span>Account Settings</span>
      </motion.button>
    </div>
  );
};

export default QuickActions;