import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import AppointmentBooking from './AppointmentBooking';

const FloatingAppointment = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {isOpen && <AppointmentBooking onClose={() => setIsOpen(false)} />}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <Calendar className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default FloatingAppointment;