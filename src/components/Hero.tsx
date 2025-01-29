import React from 'react';
import { Calendar, Users, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
          alt="Modern hospital building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/75"></div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Excellence in Healthcare
              <br />
              Since 1996
            </h1>
            <p className="text-xl mb-8">
              Part of Cleopatra Hospitals Group (CHG), delivering integrated, high-quality medical services
              with compassion and sensitivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/patient-portal')}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-3 gap-6 -mb-24">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex items-center mb-4">
                <Calendar className="text-blue-900 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Book Appointment</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Schedule your visit with our expert medical team
              </p>
              <button 
                onClick={() => navigate('/patient-portal')}
                className="text-blue-900 font-semibold hover:text-blue-700"
              >
                Book Now →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex items-center mb-4">
                <Users className="text-blue-900 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Our Doctors</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Meet our team of over 45 specialized medical professionals
              </p>
              <button 
                onClick={() => navigate('/doctors')}
                className="text-blue-900 font-semibold hover:text-blue-700"
              >
                Find a Doctor →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex items-center mb-4">
                <Phone className="text-blue-900 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Emergency Care</h3>
              </div>
              <p className="text-gray-600 mb-4">
                24/7 emergency services and pharmacy available
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="text-blue-900 font-semibold hover:text-blue-700"
              >
                Contact Emergency →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
