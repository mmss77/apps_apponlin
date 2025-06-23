import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatWeOffer: React.FC = () => {
  const { t } = useLanguage();

  const courses = [
    {
      icon: Code,
      titleKey: 'programming',
      descKey: 'programmingDesc',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Palette,
      titleKey: 'design',
      descKey: 'designDesc',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      titleKey: 'marketing',
      descKey: 'marketingDesc',
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Globe,
      titleKey: 'languages',
      descKey: 'languagesDesc',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whatWeOffer')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.titleKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className={`${course.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl border border-gray-100`}>
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <course.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(course.titleKey)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(course.descKey)}
                </p>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${course.gradient} mt-6 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;