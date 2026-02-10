import React from 'react';

const CornerAccents = () => {
  return (
    <>
      {/* Top Left - Islamic 8-Pointed Star */}
      <svg className="corner-accent top-left" viewBox="0 0 60 60">
        <defs>
          <linearGradient id="islamicGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        
        {/* 8-pointed star */}
        <path 
          d="M30 5 L35 20 L50 15 L40 30 L50 45 L35 40 L30 55 L25 40 L10 45 L20 30 L10 15 L25 20 Z" 
          fill="none" 
          stroke="url(#islamicGold)" 
          strokeWidth="1.5"
          opacity="0.8"
        />
        
        {/* Center circle */}
        <circle cx="30" cy="30" r="5" fill="none" stroke="url(#islamicGold)" strokeWidth="1.5" opacity="0.9" />
        
        {/* Corner circles */}
        <circle cx="5" cy="5" r="3" fill="url(#islamicGold)" opacity="0.7" />
        <circle cx="30" cy="5" r="2" fill="url(#islamicGold)" opacity="0.6" />
        <circle cx="5" cy="30" r="2" fill="url(#islamicGold)" opacity="0.6" />
        
        {/* Decorative lines */}
        <path d="M15 15 L25 25" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M15 45 L25 35" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M45 15 L35 25" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M45 45 L35 35" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
      </svg>
      
      {/* Top Right - Islamic 8-Pointed Star */}
      <svg className="corner-accent top-right" viewBox="0 0 60 60">
        <path 
          d="M30 5 L35 20 L50 15 L40 30 L50 45 L35 40 L30 55 L25 40 L10 45 L20 30 L10 15 L25 20 Z" 
          fill="none" 
          stroke="url(#islamicGold)" 
          strokeWidth="1.5"
          opacity="0.8"
        />
        <circle cx="30" cy="30" r="5" fill="none" stroke="url(#islamicGold)" strokeWidth="1.5" opacity="0.9" />
        <circle cx="55" cy="5" r="3" fill="url(#islamicGold)" opacity="0.7" />
        <circle cx="30" cy="5" r="2" fill="url(#islamicGold)" opacity="0.6" />
        <circle cx="55" cy="30" r="2" fill="url(#islamicGold)" opacity="0.6" />
        <path d="M45 15 L35 25" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M45 45 L35 35" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M15 15 L25 25" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M15 45 L25 35" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
      </svg>
      
      {/* Bottom Left - Islamic 8-Pointed Star */}
      <svg className="corner-accent bottom-left" viewBox="0 0 60 60">
        <path 
          d="M30 5 L35 20 L50 15 L40 30 L50 45 L35 40 L30 55 L25 40 L10 45 L20 30 L10 15 L25 20 Z" 
          fill="none" 
          stroke="url(#islamicGold)" 
          strokeWidth="1.5"
          opacity="0.8"
        />
        <circle cx="30" cy="30" r="5" fill="none" stroke="url(#islamicGold)" strokeWidth="1.5" opacity="0.9" />
        <circle cx="5" cy="55" r="3" fill="url(#islamicGold)" opacity="0.7" />
        <circle cx="30" cy="55" r="2" fill="url(#islamicGold)" opacity="0.6" />
        <circle cx="5" cy="30" r="2" fill="url(#islamicGold)" opacity="0.6" />
        <path d="M15 45 L25 35" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M15 15 L25 25" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M45 45 L35 35" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
        <path d="M45 15 L35 25" stroke="url(#islamicGold)" strokeWidth="1" opacity="0.5" />
      </svg>
    </>
  );
};

export default CornerAccents;
