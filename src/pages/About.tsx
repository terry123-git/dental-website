import React from 'react';
import { Award, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-xl">Leading the way in modern dentistry</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, DentalCare has been at the forefront of providing exceptional
              dental care to our community. Our mission is to deliver the highest quality
              dental services while ensuring patient comfort and satisfaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Excellence</h3>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Care</h3>
              </div>
              <div className="text-center">
                <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Expertise</h3>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80"
              alt="Modern dental office"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Lead Dentist',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80'
              },
              {
                name: 'Dr. Michael Chen',
                role: 'Orthodontist',
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80'
              },
              {
                name: 'Dr. Emily Rodriguez',
                role: 'Cosmetic Specialist',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80'
              }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;