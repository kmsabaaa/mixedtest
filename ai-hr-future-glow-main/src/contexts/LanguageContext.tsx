
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.register': 'Register Your Interest',
    'nav.about': 'About',
    'nav.learn': 'What You\'ll Learn',
    'nav.enhance': 'Why Enhance',
    
    // Hero Section
    'hero.title': 'Lead the Future of HR with AI',
    'hero.subtitle': 'Earn the globally recognized SHRM AI + HI Specialty Credential with Enhance Training Institute',
    'hero.cta': 'Register Your Interest',
    
    // About Section
    'about.title': 'About the Certificate',
    'about.description': '"AI + HI" is the future of Human Resources. Developed by SHRM, this hands-on certificate program equips HR professionals with the tools to implement artificial intelligence ethically, practically, and strategically across the employee lifecycle. You\'ll combine AI literacy with human ingenuity to become a future-ready HR leader.',
    
    // What You'll Learn
    'learn.title': 'What You\'ll Learn',
    'learn.item1': 'How to apply AI in recruitment, L&D, talent management, and engagement',
    'learn.item2': 'Real-world labs and simulations with generative AI tools',
    'learn.item3': 'Ethics, legal aspects, and bias mitigation in AI systems',
    'learn.item4': 'Capstone project: create your own AI implementation plan',
    'learn.item5': 'Access to SHRM experts, live sessions, and a global HR community',
    'learn.item6': 'Earn an official SHRM-issued certificate',
    
    // Why Enhance
    'enhance.title': 'Why Enhance?',
    'enhance.description': 'Enhance Training Institute is an internationally recognized training center dedicated to high-quality, accredited programs that align with market needs and Vision 2030. With a proven track record in training excellence, a blended learning model, and global certifications, Enhance empowers learners to succeed in today\'s digital economy.',
    
    // Form
    'form.title': 'Register Your Interest',
    'form.fullName': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.company': 'Company',
    'form.jobTitle': 'Job Title',
    'form.webinar': 'Are you interested in the upcoming webinar?',
    'form.submit': 'Submit',
    'form.yes': 'Yes',
    'form.no': 'No',
    'form.confirmation': 'Thank you. We\'ll be in touch shortly via email.',
    
    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.website': 'Main ETI Website',
    'footer.shrm': 'Certificate issued by SHRM',
  },
  ar: {
    // Navigation
    'nav.register': 'سجل اهتمامك الآن',
    'nav.about': 'حول الشهادة',
    'nav.learn': 'ما ستتعلمه',
    'nav.enhance': 'لماذا إنهانس',
    
    // Hero Section
    'hero.title': 'قد المستقبل في الموارد البشرية بالذكاء الاصطناعي',
    'hero.subtitle': 'احصل على شهادة SHRM العالمية في الذكاء الاصطناعي + الذكاء البشري مع معهد إنهانس للتدريب',
    'hero.cta': 'سجل اهتمامك الآن',
    
    // About Section
    'about.title': 'حول الشهادة',
    'about.description': 'برنامج "الذكاء الاصطناعي + الذكاء البشري" هو مستقبل الموارد البشرية. تم تطويره من قبل SHRM لتزويد المتخصصين في الموارد البشرية بالأدوات اللازمة لتطبيق الذكاء الاصطناعي بشكل أخلاقي وعملي واستراتيجي عبر دورة حياة الموظف. ستجمع بين معرفة الذكاء الاصطناعي والإبداع البشري لتصبح قائدًا مستعدًا للمستقبل.',
    
    // What You'll Learn
    'learn.title': 'ما ستتعلمه',
    'learn.item1': 'كيفية استخدام الذكاء الاصطناعي في التوظيف، وتطوير المهارات، وإدارة الأداء',
    'learn.item2': 'تجارب عملية باستخدام أدوات الذكاء الاصطناعي التوليدي',
    'learn.item3': 'القضايا الأخلاقية والقانونية ومعالجة التحيّز في الأنظمة الذكية',
    'learn.item4': 'مشروع تطبيقي: خطة متكاملة لتطبيق الذكاء الاصطناعي في مؤسستك',
    'learn.item5': 'الوصول إلى خبراء SHRM ومجتمع تفاعلي عالمي',
    'learn.item6': 'الحصول على شهادة رسمية معتمدة من SHRM',
    
    // Why Enhance
    'enhance.title': 'لماذا إنهانس؟',
    'enhance.description': 'يُعد معهد إنهانس للتدريب مركزًا تدريبيًا معتمدًا يقدم برامج عالية الجودة ومعترف بها عالميًا، ومتوافقة مع رؤية المملكة 2030. من خلال نموذج التعلم المدمج، وشراكات مع هيئات اعتماد دولية، يقدم إنهانس برامج تعزز من قدرات المتدربين وتمكنهم من النجاح في الاقتصاد الرقمي الحديث.',
    
    // Form
    'form.title': 'سجل اهتمامك',
    'form.fullName': 'الاسم الكامل',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'رقم الهاتف',
    'form.company': 'الشركة',
    'form.jobTitle': 'المسمى الوظيفي',
    'form.webinar': 'هل أنت مهتم بالندوة القادمة؟',
    'form.submit': 'إرسال',
    'form.yes': 'نعم',
    'form.no': 'لا',
    'form.confirmation': 'شكرًا لك. سيتم التواصل معك قريبًا عبر البريد الإلكتروني.',
    
    // Footer
    'footer.privacy': 'سياسة الخصوصية',
    'footer.website': 'الموقع الرئيسي لمعهد إنهانس',
    'footer.shrm': 'شهادة صادرة من SHRM',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
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
