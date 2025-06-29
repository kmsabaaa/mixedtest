
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EnhanceSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="enhance" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              {t('enhance.title')}
            </h2>
          </div>
          
          <div className="bg-slate-900/70 rounded-2xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-32 h-32 border border-red-500 rounded-full" />
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-cyan-400 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-400 rounded-full" />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                {t('enhance.description')}
              </p>
              
              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 enhance-glow">
                    <span className="text-red-400 text-2xl">🏅</span>
                  </div>
                  <p className="text-slate-300 font-medium">Internationally Recognized</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                    <span className="text-cyan-400 text-2xl">📚</span>
                  </div>
                  <p className="text-slate-300 font-medium">Blended Learning Model</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                    <span className="text-blue-400 text-2xl">🚀</span>
                  </div>
                  <p className="text-slate-300 font-medium">Vision 2030 Aligned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhanceSection;
