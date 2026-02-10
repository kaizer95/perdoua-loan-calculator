import React from 'react';

const Pelita = () => (
  <div className="pelita-container">
    <svg viewBox="0 0 40 50" width="40" height="50">
      <defs>
        <linearGradient id="pelitaBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B4A52" />
          <stop offset="50%" stopColor="#B76E79" />
          <stop offset="100%" stopColor="#8B4A52" />
        </linearGradient>
        <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
        <filter id="flameGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Lamp Base */}
      <path 
        d="M8,35 L32,35 L28,48 L12,48 Z" 
        fill="url(#pelitaBase)" 
        opacity="0.9"
      />
      <ellipse 
        cx="20" 
        cy="35" 
        rx="12" 
        ry="3" 
        fill="#D4A5AC" 
        opacity="0.6"
      />
      
      {/* Oil Pool */}
      <ellipse 
        cx="20" 
        cy="36" 
        rx="8" 
        ry="2" 
        fill="#FFD700" 
        opacity="0.3"
      />
      
      {/* Wick */}
      <rect 
        x="19" 
        y="28" 
        width="2" 
        height="8" 
        fill="#4A3728" 
      />
      
      {/* Flame */}
      <path 
        className="pelita-flame"
        d="M20,28 Q16,22 18,16 Q20,8 20,8 Q20,8 22,16 Q24,22 20,28" 
        fill="url(#flameGradient)" 
        filter="url(#flameGlow)"
        opacity="0.95"
      />
      
      {/* Inner Flame Core */}
      <path 
        className="pelita-flame"
        d="M20,26 Q18,22 19,18 Q20,14 20,14 Q20,14 21,18 Q22,22 20,26" 
        fill="#FFF8DC" 
        opacity="0.8"
        style={{ animationDelay: '0.1s' }}
      />
    </svg>
  </div>
);

export default Pelita;
