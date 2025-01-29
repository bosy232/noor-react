import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>Emergency: 0226888860</span>
            </div>
            <div className="hidden md:flex items-center">
              <Clock size={16} className="mr-2" />
              <span>24/7 Care Available</span>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/patient-portal" className="hover:text-blue-200">Patient Portal</Link>
          </div>
        </div>
      </div>
      
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-900">
                Noor Al-Shorouk Hospital
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-900">Services</Link>
              <Link to="/doctors" className="text-gray-700 hover:text-blue-900">Doctors</Link>
              <Link to="/international" className="text-gray-700 hover:text-blue-900">International</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
              <button 
                onClick={() => navigate('/patient-portal')}
                className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800"
              >
                Book Appointment
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700">Services</Link>
              <Link to="/doctors" className="block px-3 py-2 text-gray-700">Doctors</Link>
              <Link to="/international" className="block px-3 py-2 text-gray-700">International</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700">Contact</Link>
              <Link to="/patient-portal" className="block px-3 py-2 text-gray-700">Patient Portal</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;