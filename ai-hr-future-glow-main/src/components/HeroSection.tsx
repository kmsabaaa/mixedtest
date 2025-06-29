
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import RiyadhSkyline from './RiyadhSkyline';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToForm = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--neon-blue)_0%,_transparent_50%)] opacity-10" />
      
      {/* Riyadh Skyline */}
      <RiyadhSkyline />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-in-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            {t('hero.title')}
          </h1>
        </div>
        
        <div className="animate-slide-in-right">
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <button 
            onClick={scrollToForm}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-lg font-semibold rounded-lg enhance-glow hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.cta')}
          </button>
        </div>
        
        {/* SHRM Badge */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-600">
            <img 
              src="/lovable-uploads/3efac8c9-08df-4af3-976f-d7ed7802d5d5.png" 
              alt="SHRM"
              className="h-8 w-auto"
            />
            <span className="text-slate-300 font-medium">Officially Accredited by SHRM</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse-neon" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse-neon" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse-neon" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
