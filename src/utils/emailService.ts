import emailjs from '@emailjs/browser';

export const sendAppointmentNotification = async (
  email: string,
  appointmentDetails: {
    name: string;
    date: string;
    time: string;
    dentist: string;
    reason: string;
  }
) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: email,
        to_name: appointmentDetails.name,
        appointment_date: appointmentDetails.date,
        appointment_time: appointmentDetails.time,
        dentist: appointmentDetails.dentist,
        reason: appointmentDetails.reason,
      },
      'YOUR_PUBLIC_KEY'
    );
    return true;
  } catch (error) {
    console.error('Email notification failed:', error);
    return false;
  }
};