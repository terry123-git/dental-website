import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Bell, Calendar } from 'lucide-react';

const reminders = [
  {
    id: 1,
    title: 'Regular Checkup Due',
    date: 'In 2 weeks',
    icon: Clock,
  },
  {
    id: 2,
    title: 'Cleaning Appointment',
    date: 'March 25, 2024',
    icon: Calendar,
  },
  {
    id: 3,
    title: 'Medication Reminder',
    date: 'Daily at 9:00 AM',
    icon: Bell,
  },
];

const Reminders = () => {
  return (
    <div className="space-y-4">
      {reminders.map((reminder) => (
        <motion.div
          key={reminder.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 text-sm"
        >
          <reminder.icon className="w-5 h-5 text-blue-600" />
          <div>
            <p className="font-medium">{reminder.title}</p>
            <p className="text-gray-500">{reminder.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Reminders;