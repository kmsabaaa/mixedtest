
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import LearnSection from '../components/LearnSection';
import EnhanceSection from '../components/EnhanceSection';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';
import FloatingShapes from '../components/FloatingShapes';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        {/* Floating red shapes */}
        <FloatingShapes />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main>
          <HeroSection />
          <AboutSection />
          <LearnSection />
          <EnhanceSection />
          <RegistrationForm />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
