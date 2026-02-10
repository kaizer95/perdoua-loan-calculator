import React from 'react';

const CrescentMoon = ({ className = "", size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
  >
    <defs>
      <linearGradient id="moonGradientGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#FBBF24" />
      </linearGradient>
      <filter id="moonGlowGold">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path 
      d="M 30 20 
           A 25 25 0 1 1 30 80
           A 20 20 0 1 0 30 20"
      fill="url(#moonGradientGold)" 
      filter="url(#moonGlowGold)"
      opacity="0.9"
    />
  </svg>
);

const Star = ({ className = "", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
  >
    <defs>
      <linearGradient id="starGradientGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#FBBF24" />
      </linearGradient>
      <filter id="starGlowGold">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path 
      d="M 50 10
           L 61 35
           L 88 35
           L 67 52
           L 78 78
           L 50 60
           L 22 78
           L 33 52
           L 12 35
           L 39 35
           Z"
      fill="url(#starGradientGold)" 
      filter="url(#starGlowGold)"
      opacity="0.95"
    />
  </svg>
);

export { CrescentMoon, Star };
