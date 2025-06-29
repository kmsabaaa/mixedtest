
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/3061a73f-367f-425d-a1cd-9c1c1e728217.png" 
            alt="Enhance Training Institute"
            className="h-8 w-auto"
          />
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection('learn')}
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.learn')}
          </button>
          <button 
            onClick={() => scrollToSection('enhance')}
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {t('nav.enhance')}
          </button>
        </div>
        
        {/* CTA and Language Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm border border-slate-600 rounded-md text-slate-300 hover:bg-slate-700 transition-colors"
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>
          <button 
            onClick={() => scrollToSection('register')}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg neon-glow hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
          >
            {t('nav.register')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
