import React from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/useAuthStore';
import AppointmentList from '../components/dashboard/AppointmentList';
import QuickActions from '../components/dashboard/QuickActions';
import Reminders from '../components/dashboard/Reminders';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  // Mock login for demonstration
  React.useEffect(() => {
    if (!user) {
      useAuthStore.getState().login({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        appointments: [
          {
            id: '1',
            date: '2024-03-20',
            time: '10:00 AM',
            dentist: 'Dr. Sarah Johnson',
            reason: 'Regular Checkup',
            status: 'confirmed',
          },
          {
            id: '2',
            date: '2024-03-25',
            time: '2:30 PM',
            dentist: 'Dr. Michael Chen',
            reason: 'Cleaning',
            status: 'pending',
          },
        ],
      });
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Patient Dashboard</h1>
          <p className="mt-4 text-xl">Welcome back, {user.name}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>
              <AppointmentList />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Treatment History</h2>
              <div className="text-center py-8">
                <p className="text-gray-500">No treatment history available</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <QuickActions />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">Upcoming Reminders</h2>
              <Reminders />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;