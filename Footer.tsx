import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <h3 className="text-xl font-bold">{t('learningPlatform')}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              منصة تعليمية متخصصة في تقديم دورات تدريبية عالية الجودة في مختلف المجالات التقنية والإبداعية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {['home', 'courses', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('courses')}</h3>
            <ul className="space-y-3">
              {['programming', 'design', 'marketing', 'languages'].map((course) => (
                <li key={course}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t(course)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">{t('contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@learningplatform.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-400">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 {t('learningPlatform')}. {t('allRightsReserved')}.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;