import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-blue-900 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Phone Numbers</h3>
                  <p>0226888860 / 01113444234 / 01020054404</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-900 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@nshospital.net</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-900 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Al-Shorouk City, First Entrance from Al-Hurriya Square, 8th District, Cairo</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-900 mr-4" size={24} />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p>Emergency Care and Pharmacy: 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5762034467836!2d31.6276!3d30.1375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA4JzE1LjAiTiAzMcKwMzcnMzkuNCJF!5e0!3m2!1sen!2seg!4v1625641234567!5m2!1sen!2seg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;