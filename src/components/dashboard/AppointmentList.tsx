import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

const AppointmentList = () => {
  const user = useAuthStore((state) => state.user);

  if (!user?.appointments?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No appointments scheduled</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {user.appointments.map((appointment) => (
        <motion.div
          key={appointment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Calendar className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-medium">{appointment.dentist}</p>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
                <p className="text-sm text-gray-500">{appointment.reason}</p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'confirmed'
                  ? 'bg-green-100 text-green-800'
                  : appointment.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {appointment.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AppointmentList;