import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Info } from 'lucide-react';

const tourSpots = [
  {
    id: 'reception',
    title: 'Reception Area',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80',
    description: 'Our modern and welcoming reception area where our friendly staff will greet you.',
    features: [
      'Comfortable seating area',
      'Check-in kiosk',
      'Coffee and refreshments',
      'Kids play corner'
    ]
  },
  {
    id: 'treatment',
    title: 'Treatment Room',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
    description: 'State-of-the-art treatment room equipped with the latest dental technology.',
    features: [
      'Advanced dental chair',
      'Digital X-ray system',
      'Intraoral camera',
      'Entertainment system'
    ]
  },
  {
    id: 'xray',
    title: 'X-Ray Room',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80',
    description: 'Advanced imaging center for precise diagnostics and treatment planning.',
    features: [
      'Digital panoramic X-ray',
      'CBCT scanner',
      'Lead-lined walls',
      'Digital imaging displays'
    ]
  }
];

const VirtualTour = () => {
  const [currentSpot, setCurrentSpot] = React.useState(0);

  const handleNext = () => {
    setCurrentSpot((prev) => (prev + 1) % tourSpots.length);
  };

  const handlePrev = () => {
    setCurrentSpot((prev) => (prev - 1 + tourSpots.length) % tourSpots.length);
  };

  return (
    <section className="py-16 bg-gray-50" id="virtual-tour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Virtual Office Tour</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our state-of-the-art dental facility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
              style={{ height: '500px' }}
            >
              <img
                src={tourSpots[currentSpot].image}
                alt={tourSpots[currentSpot].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-gradient-to-t from-black/75 to-transparent">
                <button
                  onClick={handlePrev}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {tourSpots[currentSpot].title}
              </h3>
              <p className="text-gray-600 mb-6">{tourSpots[currentSpot].description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {tourSpots[currentSpot].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="flex justify-center space-x-2">
                  {tourSpots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSpot(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSpot === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;