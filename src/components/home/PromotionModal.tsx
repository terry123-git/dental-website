import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Calendar, Copy } from 'lucide-react';
import toast from 'react-hot-toast';

interface PromotionModalProps {
  promotion: {
    title: string;
    description: string;
    validUntil: string;
    details?: string[];
    terms?: string[];
  };
  onClose: () => void;
}

const PromotionModal: React.FC<PromotionModalProps> = ({ promotion, onClose }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: promotion.title,
          text: `Check out this special offer: ${promotion.description}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(
        `${promotion.title}\n${promotion.description}\nValid until: ${promotion.validUntil}`
      );
      toast.success('Copied to clipboard!');
    }
  };

  const handleAddToCalendar = () => {
    const endDate = new Date(promotion.validUntil);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      promotion.title
    )}&details=${encodeURIComponent(promotion.description)}&dates=${new Date().toISOString().replace(
      /[-:]/g,
      ''
    ).split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 touch-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.y) > 100) {
              onClose();
            }
          }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{promotion.title}</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Share promotion"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleAddToCalendar}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Add to calendar"
                >
                  <Calendar className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">{promotion.description}</p>
              
              {promotion.details && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What's Included:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {promotion.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {promotion.terms && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Terms & Conditions:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {promotion.terms.map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Valid until: {promotion.validUntil}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Book Now
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromotionModal;