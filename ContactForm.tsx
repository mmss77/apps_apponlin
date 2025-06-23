import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    'programming',
    'design',
    'marketing',
    'languages'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ fullName: '', email: '', course: '' });
    alert('تم التسجيل بنجاح! / Registration successful!');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('quickRegistration')}
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              انضم إلى آلاف المتدربين واحصل على شهادتك المعتمدة اليوم
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">مدربون خبراء</h3>
                  <p className="text-blue-100">تعلم من أفضل المختصين</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">محتوى محدث</h3>
                  <p className="text-blue-100">مناهج مطورة باستمرار</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fullName')}
                </label>
                <div className="relative">
                  <User className="absolute left-3 rtl:right-3 rtl:left-auto top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder={t('fullName')}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 rtl:right-3 rtl:left-auto top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder={t('email')}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('desiredCourse')}
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3 rtl:right-3 rtl:left-auto top-3 w-5 h-5 text-gray-400" />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 appearance-none bg-white"
                  >
                    <option value="">{t('selectCourse')}</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {t(course)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse hover:from-blue-700 hover:to-teal-700 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{t('register')}</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;