import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Noor Al-Shorouk Hospital</h3>
            <p className="text-blue-100 mb-4">
              A member of Cleopatra Hospitals Group (CHG), delivering excellence in healthcare since 1996.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">Facebook</a>
              <a href="#" className="hover:text-blue-200">Twitter</a>
              <a href="#" className="hover:text-blue-200">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-blue-100 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white">Our Services</Link></li>
              <li><Link to="/doctors" className="text-blue-100 hover:text-white">Find a Doctor</Link></li>
              <li><Link to="/international" className="text-blue-100 hover:text-white">International Patients</Link></li>
              <li><Link to="/insurance" className="text-blue-100 hover:text-white">Insurance Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>0226888860 / 01113444234</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@nshospital.net</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Al-Shorouk City, First Entrance from Al-Hurriya Square, 8th District, Cairo</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>24/7 Emergency Care</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Insurance Partners</h4>
            <p className="text-blue-100 mb-4">
              We work with leading insurance providers including Allianz and Next Care.
            </p>
            <h4 className="text-lg font-semibold mt-6 mb-4">International Patients</h4>
            <p className="text-blue-100">
              Comprehensive services including visa coordination and personalized care during your stay.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100">
              © 2024 Noor Al-Shorouk Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-blue-100 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-blue-100 hover:text-white">Terms of Service</Link>
              <Link to="/sitemap" className="text-blue-100 hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
