
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            {t('about.title')}
          </h2>
          
          <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {t('about.description')}
            </p>
            
            {/* AI + HI Badge */}
            <div className="mt-8 inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-xs">AI</span>
                </div>
                <span className="text-cyan-400 font-semibold">+</span>
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-xs">HI</span>
                </div>
              </div>
              <span className="text-slate-300 font-medium">Artificial Intelligence + Human Ingenuity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
