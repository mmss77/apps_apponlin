import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'courses', href: '#courses' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              {t('learningPlatform')}
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {t(item.key)}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'EN' : 'عربي'}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;