import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left rtl:lg:text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                <span>{t('enrollNow')}</span>
                {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                <span>{t('contactUs')}</span>
                <Play className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Image Placeholder */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-500 rounded-3xl shadow-2xl"
              >
                <div className="absolute inset-4 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Play className="w-12 h-12" />
                    </div>
                    <p className="text-lg font-semibold">Course Preview</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">1000+</p>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">50+</p>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;