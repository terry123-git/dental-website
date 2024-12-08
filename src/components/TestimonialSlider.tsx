import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    text: "The best dental experience I've ever had! The staff is incredibly professional and caring.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Michael Roberts",
    text: "State-of-the-art facility with a team that truly cares about your comfort and well-being.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Emily Chen",
    text: "Transformed my smile completely! Couldn't be happier with the results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
  }
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="py-8"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;