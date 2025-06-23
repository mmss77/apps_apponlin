import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleKey: 'certifiedCourses',
      descKey: 'certifiedDesc',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Users,
      titleKey: 'expertInstructors',
      descKey: 'expertDesc',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icon: Clock,
      titleKey: 'lifeTimeAccess',
      descKey: 'lifeTimeDesc',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Smartphone,
      titleKey: 'multiDevice',
      descKey: 'multiDeviceDesc',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t(feature.titleKey)}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;