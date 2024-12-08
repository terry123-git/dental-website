import React, { useState } from 'react';
import { Calendar, Clock, User, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/useAuthStore';
import { sendAppointmentNotification } from '../utils/emailService';

interface AppointmentBookingProps {
  onClose: () => void;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    dentist: '',
    reason: '',
    insurance: '',
    notes: ''
  });

  const user = useAuthStore((state) => state.user);
  const updateAppointments = useAuthStore((state) => state.updateAppointments);

  const dentists = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Dentistry' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Orthodontics' },
    { id: 3, name: 'Dr. Emily Rodriguez', specialty: 'Cosmetic Dentistry' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading toast
    const loadingToast = toast.loading('Booking your appointment...');
    
    try {
      // Send email notification
      const emailSent = await sendAppointmentNotification(
        formData.email || user?.email || '',
        {
          name: formData.name || user?.name || '',
          date: formData.date,
          time: formData.time,
          dentist: formData.dentist,
          reason: formData.reason,
        }
      );

      if (emailSent) {
        // Update appointments in store
        if (user) {
          const newAppointment = {
            id: Date.now().toString(),
            date: formData.date,
            time: formData.time,
            dentist: formData.dentist,
            reason: formData.reason,
            status: 'pending' as const,
          };
          
          updateAppointments([...(user.appointments || []), newAppointment]);
        }

        // Show success message
        toast.success('Appointment booked successfully!', { id: loadingToast });
        onClose();
      } else {
        throw new Error('Failed to send email notification');
      }
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.', { id: loadingToast });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-1/3 h-1 rounded ${
                    step >= stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Date</label>
                  <div className="mt-1 relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Time</label>
                  <div className="mt-1 grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          formData.time === time
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Dentist</label>
                  <div className="mt-1 space-y-2">
                    {dentists.map((dentist) => (
                      <button
                        key={dentist.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, dentist: dentist.name })}
                        className={`w-full px-4 py-3 text-left rounded-md border ${
                          formData.dentist === dentist.name
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-500'
                        }`}
                      >
                        <div className="font-medium">{dentist.name}</div>
                        <div className="text-sm text-gray-500">{dentist.specialty}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Reason for Visit</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Select a reason</option>
                    <option value="checkup">Regular Checkup</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="emergency">Emergency</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Insurance Provider (Optional)</label>
                  <input
                    type="text"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Book Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppointmentBooking;