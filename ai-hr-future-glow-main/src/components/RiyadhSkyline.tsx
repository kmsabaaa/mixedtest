
import React from 'react';

const RiyadhSkyline: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent" />
      
      {/* Buildings */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
        {/* Kingdom Tower (tallest) */}
        <div className="skyline-building w-8 h-40 bg-slate-700 mx-1 relative">
          <div className="absolute top-2 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-60" />
          <div className="absolute top-6 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-40" />
          <div className="absolute top-10 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-60" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-red-500 animate-pulse-neon" />
        </div>
        
        {/* Al Faisaliah Tower */}
        <div className="skyline-building w-6 h-32 bg-slate-600 mx-1 relative">
          <div className="absolute top-3 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-50" />
          <div className="absolute top-8 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-40" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-cyan-400 animate-pulse-neon" />
        </div>
        
        {/* Generic buildings */}
        <div className="skyline-building w-5 h-24 bg-slate-700 mx-1 relative">
          <div className="absolute top-4 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-30" />
          <div className="absolute top-10 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-40" />
        </div>
        
        <div className="skyline-building w-7 h-28 bg-slate-600 mx-1 relative">
          <div className="absolute top-2 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-50" />
          <div className="absolute top-7 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-40" />
          <div className="absolute top-12 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-30" />
        </div>
        
        {/* Burj Rafal */}
        <div className="skyline-building w-6 h-36 bg-slate-700 mx-1 relative">
          <div className="absolute top-3 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-60" />
          <div className="absolute top-8 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-50" />
          <div className="absolute top-13 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-40" />
        </div>
        
        <div className="skyline-building w-4 h-20 bg-slate-600 mx-1 relative">
          <div className="absolute top-3 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-40" />
          <div className="absolute top-8 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-30" />
        </div>
        
        <div className="skyline-building w-8 h-30 bg-slate-700 mx-1 relative">
          <div className="absolute top-2 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-50" />
          <div className="absolute top-6 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-60" />
          <div className="absolute top-10 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-40" />
        </div>
        
        <div className="skyline-building w-5 h-26 bg-slate-600 mx-1 relative">
          <div className="absolute top-4 left-1 right-1 h-1 bg-cyan-400 neon-glow opacity-50" />
          <div className="absolute top-9 left-1 right-1 h-1 bg-blue-400 neon-glow opacity-40" />
        </div>
      </div>
      
      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
    </div>
  );
};

export default RiyadhSkyline;
