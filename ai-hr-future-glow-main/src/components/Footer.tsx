
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and branding */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/3061a73f-367f-425d-a1cd-9c1c1e728217.png" 
              alt="Enhance Training Institute"
              className="h-12 w-auto"
            />
            <div>
              <div className="text-slate-400 text-sm">{t('footer.shrm')}</div>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {t('footer.website')}
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {t('footer.privacy')}
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* SHRM Badge */}
        <div className="text-center mt-8 pt-8 border-t border-slate-800">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700">
            <img 
              src="/lovable-uploads/3efac8c9-08df-4af3-976f-d7ed7802d5d5.png" 
              alt="SHRM"
              className="h-8 w-auto"
            />
            <span className="text-slate-400 text-sm">{t('footer.shrm')}</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">
            © 2024 Enhance Training Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
