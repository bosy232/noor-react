import React from 'react';
import { Heart, Brain, Stethoscope, Baby, Bone, TestTubes, Eye, Microscope, Syringe } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Cardiac Care',
    description: 'State-of-the-art cardiac and vascular surgery with latest Philips catheter devices.',
  },
  {
    icon: Brain,
    title: 'Neurosurgery',
    description: 'Expert treatment of complex neurological conditions by specialized surgeons.',
  },
  {
    icon: Baby,
    title: 'Obstetrics & Pediatrics',
    description: 'Comprehensive care for mothers, newborns, and children of all ages.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Advanced treatment for bone and joint injuries with robotic surgery options.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services and treatment of all eye diseases.',
  },
  {
    icon: Microscope,
    title: 'Oncology Center',
    description: 'Comprehensive cancer diagnosis and treatment services.',
  },
  {
    icon: Stethoscope,
    title: 'Urology Center',
    description: 'Specialized center for treating urinary tract diseases.',
  },
  {
    icon: TestTubes,
    title: 'Laboratory Services',
    description: 'Advanced diagnostic testing with state-of-the-art equipment.',
  },
  {
    icon: Syringe,
    title: 'General Surgery',
    description: 'Expert surgical care including appendectomy and hernia treatment.',
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Centers of Excellence</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Equipped with the latest technologies and staffed by expert medical professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="text-blue-900 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-900 font-semibold hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;