import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-xl mb-6">
          Noor Al-Shorouk Hospital, established in 1996, is a leading healthcare provider in Cairo and a proud member of the Cleopatra Hospitals Group (CHG).
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver integrated, high-quality medical services while improving community health and addressing the needs of patients and their families with compassion and sensitivity.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading healthcare provider in Egypt, known for excellence in patient care, medical innovation, and community service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
