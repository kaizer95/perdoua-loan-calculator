import React from 'react';

const TechOrb = () => (
  <div className="tech-orb">
    <svg viewBox="0 0 60 60" width="50" height="50">
      <defs>
        <linearGradient id="orbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="50%" stopColor="#8338ec" />
          <stop offset="100%" stopColor="#ff006e" />
        </linearGradient>
        <filter id="orbGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer ring */}
      <circle 
        cx="30" 
        cy="30" 
        r="25" 
        fill="none" 
        stroke="url(#orbGradient)" 
        strokeWidth="1"
        opacity="0.5"
        filter="url(#orbGlow)"
      />
      
      {/* Rotating segments */}
      <g className="tech-orb-inner">
        <circle 
          cx="30" 
          cy="30" 
          r="20" 
          fill="none" 
          stroke="#00f0ff" 
          strokeWidth="2"
          strokeDasharray="30 10"
          opacity="0.8"
          filter="url(#orbGlow)"
        />
        
        <circle 
          cx="30" 
          cy="30" 
          r="15" 
          fill="none" 
          stroke="#8338ec" 
          strokeWidth="2"
          strokeDasharray="20 15"
          opacity="0.7"
          filter="url(#orbGlow)"
          style={{ animationDirection: 'reverse' }}
        />
      </g>
      
      {/* Center core */}
      <circle 
        cx="30" 
        cy="30" 
        r="8" 
        fill="url(#orbGradient)"
        opacity="0.9"
        filter="url(#orbGlow)"
      />
      
      {/* Inner glow */}
      <circle 
        cx="30" 
        cy="30" 
        r="4" 
        fill="#ffffff"
        opacity="0.8"
      />
      
      {/* Tech lines */}
      <line x1="30" y1="5" x2="30" y2="15" stroke="#00f0ff" strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="45" x2="30" y2="55" stroke="#00f0ff" strokeWidth="1" opacity="0.6" />
      <line x1="5" y1="30" x2="15" y2="30" stroke="#ff006e" strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="30" x2="55" y2="30" stroke="#ff006e" strokeWidth="1" opacity="0.6" />
    </svg>
  </div>
);

export default TechOrb;
