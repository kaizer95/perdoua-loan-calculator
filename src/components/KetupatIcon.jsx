import React from 'react';

const KetupatIcon = ({ size = 50 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 60 72">
    <defs>
      <linearGradient id="ketupatGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="50%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="ketupatGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="50%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="ketupatGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Main Ketupat Diamond Shape */}
    <path 
      d="M30 8 L52 30 L30 52 L8 30 Z" 
      fill="url(#ketupatGreen)" 
      stroke="url(#ketupatGold)" 
      strokeWidth="2"
      filter="url(#ketupatGlow)"
    />
    
    {/* Inner Diamond */}
    <path 
      d="M30 15 L45 30 L30 45 L15 30 Z" 
      fill="none" 
      stroke="url(#ketupatGold)" 
      strokeWidth="1.5"
      opacity="0.8"
    />
    
    {/* Weaving Pattern Lines - Horizontal */}
    <line x1="12" y1="22" x2="48" y2="22" stroke="url(#ketupatGold)" strokeWidth="1" opacity="0.9" />
    <line x1="12" y1="30" x2="48" y2="30" stroke="url(#ketupatGold)" strokeWidth="1" opacity="0.9" />
    <line x1="12" y1="38" x2="48" y2="38" stroke="url(#ketupatGold)" strokeWidth="1" opacity="0.9" />
    
    {/* Weaving Pattern Lines - Vertical */}
    <line x1="22" y1="12" x2="22" y2="48" stroke="url(#ketupatGold)" strokeWidth="1" opacity="0.9" />
    <line x1="30" y1="12" x2="30" y2="48" stroke="url(#ketupatGold)" strokeWidth="1" opacity="0.9" />
    <line x1="38" y1="12" x2="38" y2="48" stroke="url(#ketupatGold)" strokeWidth="1" opacity="0.9" />
    
    {/* Center Decoration */}
    <circle cx="30" cy="30" r="4" fill="url(#ketupatGold)" opacity="0.9" />
    
    {/* Corner Accents */}
    <circle cx="8" cy="8" r="3" fill="url(#ketupatGold)" />
    <circle cx="52" cy="8" r="3" fill="url(#ketupatGold)" />
    <circle cx="8" cy="52" r="3" fill="url(#ketupatGold)" />
    <circle cx="52" cy="52" r="3" fill="url(#ketupatGold)" />
    
    {/* Hanging String */}
    <line x1="30" y1="52" x2="30" y2="66" stroke="url(#ketupatGold)" strokeWidth="2" />
    <circle cx="30" cy="68" r="3" fill="url(#ketupatGold)" />
  </svg>
);

export default KetupatIcon;
