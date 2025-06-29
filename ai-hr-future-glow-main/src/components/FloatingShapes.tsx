
import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating shape - top right */}
      <div 
        className="absolute top-20 right-10 w-32 h-32 bg-red-500 opacity-20 floating-shape"
        style={{
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animationDelay: '0s'
        }}
      />
      
      {/* Medium floating shape - left center */}
      <div 
        className="absolute top-1/3 left-20 w-24 h-24 bg-red-400 opacity-15 floating-shape"
        style={{
          borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          animationDelay: '-2s'
        }}
      />
      
      {/* Small floating shape - bottom right */}
      <div 
        className="absolute bottom-32 right-32 w-16 h-16 bg-red-600 opacity-25 floating-shape"
        style={{
          borderRadius: '47% 53% 68% 32% / 71% 39% 61% 29%',
          animationDelay: '-4s'
        }}
      />
      
      {/* Extra small floating shape - top left */}
      <div 
        className="absolute top-1/4 left-1/4 w-12 h-12 bg-red-500 opacity-10 floating-shape"
        style={{
          borderRadius: '74% 26% 47% 53% / 68% 46% 54% 32%',
          animationDelay: '-1s'
        }}
      />
      
      {/* Medium floating shape - bottom left */}
      <div 
        className="absolute bottom-1/4 left-10 w-20 h-20 bg-red-400 opacity-20 floating-shape"
        style={{
          borderRadius: '25% 75% 32% 68% / 57% 28% 72% 43%',
          animationDelay: '-3.5s'
        }}
      />
      
      {/* Large floating shape - center right */}
      <div 
        className="absolute top-1/2 right-0 w-28 h-28 bg-red-500 opacity-15 floating-shape"
        style={{
          borderRadius: '42% 58% 70% 30% / 45% 67% 33% 55%',
          animationDelay: '-5s'
        }}
      />
    </div>
  );
};

export default FloatingShapes;
