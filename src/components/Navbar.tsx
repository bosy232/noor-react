import React, { useState, useEffect, useRef } from 'react';
    import { useTranslation } from 'react-i18next';
    import { Menu, Phone, User, X } from 'lucide-react';
    import LanguageToggle from './LanguageToggle';

    const Navbar = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const [activeSection, setActiveSection] = useState('');
      const navRef = useRef<HTMLElement>(null);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        const handleScroll = () => {
          const sections = ['services', 'departments', 'doctors', 'testimonials', 'about', 'contact'];
          let current = '';
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element && element.offsetTop <= window.scrollY + 100) {
              current = section;
            }
          }
          setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      // Close the mobile menu when a link is clicked
      const handleNavLinkClick = (section: string) => {
        setIsMenuOpen(false);
        setActiveSection(section);
      };

      return (
        <nav ref={navRef} className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className={`flex items-center ${isArabic ? 'space-x-reverse' : ''} space-x-6`}>
                <div className="flex-shrink-0">
                  <h1 className={`text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent ${
                    isArabic ? 'font-arabic' : ''
                  }`}>
                    {isArabic ? 'نور الشروق' : 'Noor Al-Shorouk'}
                  </h1>
                </div>
                <div className={`hidden md:flex items-center ${isArabic ? 'space-x-reverse' : ''} space-x-6`}>
                  <a href="#services" className={`text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 rounded-md ${activeSection === 'services' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('services')}>
                    {t('nav.services')}
                  </a>
                  <a href="#departments" className={`text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 rounded-md ${activeSection === 'departments' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('departments')}>
                    {t('nav.departments')}
                  </a>
                  <a href="#doctors" className={`text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 rounded-md ${activeSection === 'doctors' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('doctors')}>
                    {t('nav.doctors')}
                  </a>
                  <a href="#testimonials" className={`text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 rounded-md ${activeSection === 'testimonials' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('testimonials')}>
                    {isArabic ? 'آراء مرضانا' : 'Testimonials'}
                  </a>
                  <a href="#about" className={`text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 rounded-md ${activeSection === 'about' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('about')}>
                    {isArabic ? 'عن المستشفى' : 'About Us'}
                  </a>
                  <a href="#contact" className={`text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 rounded-md ${activeSection === 'contact' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('contact')}>
                    {t('nav.contact')}
                  </a>
                </div>
              </div>
              <div className={`hidden md:flex items-center ${isArabic ? 'space-x-reverse' : ''} space-x-4`}>
                <a 
                  href="tel:0226888860" 
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone className={`w-5 h-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                  <span>02-26888860</span>
                </a>
                <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-full hover:from-primary-700 hover:to-primary-800 transition-all shadow-md hover:shadow-lg flex items-center text-sm">
                  <User className={`w-4 h-4 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                  <span>{t('nav.patientPortal')}</span>
                </button>
                <LanguageToggle />
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-700" aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t">
                <div className={`flex flex-col ${isArabic ? 'items-end' : 'items-start'} space-y-4`}>
                  <a href="#services" className={`text-gray-700 hover:text-primary-600 transition-colors py-2 px-4 rounded-md ${activeSection === 'services' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('services')}>
                    {t('nav.services')}
                  </a>
                  <a href="#departments" className={`text-gray-700 hover:text-primary-600 transition-colors py-2 px-4 rounded-md ${activeSection === 'departments' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('departments')}>
                    {t('nav.departments')}
                  </a>
                  <a href="#doctors" className={`text-gray-700 hover:text-primary-600 transition-colors py-2 px-4 rounded-md ${activeSection === 'doctors' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('doctors')}>
                    {t('nav.doctors')}
                  </a>
                  <a href="#testimonials" className={`text-gray-700 hover:text-primary-600 transition-colors py-2 px-4 rounded-md ${activeSection === 'testimonials' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('testimonials')}>
                    {isArabic ? 'آراء مرضانا' : 'Testimonials'}
                  </a>
                  <a href="#about" className={`text-gray-700 hover:text-primary-600 transition-colors py-2 px-4 rounded-md ${activeSection === 'about' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('about')}>
                    {isArabic ? 'عن المستشفى' : 'About Us'}
                  </a>
                  <a href="#contact" className={`text-gray-700 hover:text-primary-600 transition-colors py-2 px-4 rounded-md ${activeSection === 'contact' ? 'text-primary-600' : ''}`} onClick={() => handleNavLinkClick('contact')}>
                    {t('nav.contact')}
                  </a>
                  <div className="pt-4 border-t w-full">
                    <div className={`flex ${isArabic ? 'justify-end' : 'justify-start'}`}>
                      <LanguageToggle />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    };

    export default Navbar;
