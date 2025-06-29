
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LearnSection: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    { key: 'learn.item1', icon: '🎯' },
    { key: 'learn.item2', icon: '🧪' },
    { key: 'learn.item3', icon: '⚖️' },
    { key: 'learn.item4', icon: '🚀' },
    { key: 'learn.item5', icon: '🌐' },
    { key: 'learn.item6', icon: '🏆' },
  ];
  
  return (
    <section id="learn" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('learn.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.key}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {t(feature.key)}
              </p>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {/* Bottom highlight */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-blue-300 font-medium">SHRM Specialty Credential</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
