import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    courses: 'الدورات',
    testimonials: 'آراء المتدربين',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'ابدأ رحلتك التعليمية الآن',
    heroSubtitle: 'انضم إلى آلاف المتدربين واكتسب مهارات جديدة مع خبراء في المجال',
    enrollNow: 'سجّل الآن',
    contactUs: 'تواصل معنا',
    
    // What We Offer
    whatWeOffer: 'ماذا نقدم',
    programming: 'البرمجة',
    design: 'التصميم',
    marketing: 'التسويق',
    languages: 'اللغات',
    programmingDesc: 'تعلم أحدث لغات البرمجة وتقنيات التطوير',
    designDesc: 'احترف التصميم الجرافيكي وتصميم واجهات المستخدم',
    marketingDesc: 'تعلم استراتيجيات التسويق الرقمي والإلكتروني',
    languagesDesc: 'تطوير مهاراتك في اللغات الأجنبية المختلفة',
    
    // Features
    features: 'مميزاتنا',
    certifiedCourses: 'شهادات معتمدة',
    expertInstructors: 'مدرسون خبراء',
    lifeTimeAccess: 'وصول مدى الحياة',
    multiDevice: 'الوصول من أي جهاز',
    certifiedDesc: 'احصل على شهادات معتمدة عند إتمام الدورات',
    expertDesc: 'تعلم من خبراء في المجال مع خبرة عملية واسعة',
    lifeTimeDesc: 'وصول غير محدود للمحتوى مع التحديثات المستمرة',
    multiDeviceDesc: 'تعلم في أي وقت ومن أي مكان على جميع الأجهزة',
    
    // Testimonials
    testimonialsTitle: 'آراء المتدربين',
    testimonial1: 'دورة البرمجة غيرت مساري المهني تماماً. المحتوى ممتاز والمدربون محترفون جداً.',
    testimonial2: 'تعلمت التصميم من الصفر وأصبحت قادراً على العمل كمصمم مستقل. شكراً لهذه المنصة الرائعة.',
    testimonial3: 'الدورات التسويقية ساعدتني في تطوير عملي بشكل كبير. النتائج واضحة ومذهلة.',
    student1Name: 'أحمد محمد',
    student2Name: 'فاطمة الزهراء',
    student3Name: 'خالد العلي',
    student1Role: 'مطور ويب',
    student2Role: 'مصممة جرافيك',
    student3Role: 'مسوق رقمي',
    
    // Contact Form
    quickRegistration: 'التسجيل السريع',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    desiredCourse: 'الدورة المطلوبة',
    selectCourse: 'اختر الدورة',
    register: 'سجّل الآن',
    
    // Footer
    followUs: 'تابعنا على',
    contactInfo: 'معلومات التواصل',
    emailAddress: 'البريد الإلكتروني',
    phone: 'الهاتف',
    allRightsReserved: 'جميع الحقوق محفوظة',
    learningPlatform: 'منصة التعلم'
  },
  en: {
    // Navigation
    home: 'Home',
    courses: 'Courses',
    testimonials: 'Testimonials',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Start Your Learning Journey Today',
    heroSubtitle: 'Join thousands of learners and gain new skills with industry experts',
    enrollNow: 'Enroll Now',
    contactUs: 'Contact Us',
    
    // What We Offer
    whatWeOffer: 'What We Offer',
    programming: 'Programming',
    design: 'Design',
    marketing: 'Marketing',
    languages: 'Languages',
    programmingDesc: 'Learn the latest programming languages and development techniques',
    designDesc: 'Master graphic design and user interface design',
    marketingDesc: 'Learn digital marketing and e-commerce strategies',
    languagesDesc: 'Develop your skills in various foreign languages',
    
    // Features
    features: 'Our Features',
    certifiedCourses: 'Certified Courses',
    expertInstructors: 'Expert Instructors',
    lifeTimeAccess: 'Lifetime Access',
    multiDevice: 'Multi-Device Access',
    certifiedDesc: 'Get certified credentials upon course completion',
    expertDesc: 'Learn from industry experts with extensive practical experience',
    lifeTimeDesc: 'Unlimited access to content with continuous updates',
    multiDeviceDesc: 'Learn anytime, anywhere on all your devices',
    
    // Testimonials
    testimonialsTitle: 'Student Testimonials',
    testimonial1: 'The programming course completely changed my career path. Excellent content and very professional instructors.',
    testimonial2: 'I learned design from scratch and became able to work as a freelance designer. Thanks to this amazing platform.',
    testimonial3: 'The marketing courses helped me develop my business significantly. The results are clear and amazing.',
    student1Name: 'Ahmed Mohammed',
    student2Name: 'Fatima Al-Zahra',
    student3Name: 'Khalid Al-Ali',
    student1Role: 'Web Developer',
    student2Role: 'Graphic Designer',
    student3Role: 'Digital Marketer',
    
    // Contact Form
    quickRegistration: 'Quick Registration',
    fullName: 'Full Name',
    email: 'Email Address',
    desiredCourse: 'Desired Course',
    selectCourse: 'Select Course',
    register: 'Register Now',
    
    // Footer
    followUs: 'Follow Us',
    contactInfo: 'Contact Information',
    emailAddress: 'Email',
    phone: 'Phone',
    allRightsReserved: 'All Rights Reserved',
    learningPlatform: 'Learning Platform'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};