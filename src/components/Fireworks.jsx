import React, { useEffect, useRef, useCallback } from 'react';

const Fireworks = ({ trigger, position = 'left' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const lastAmbientTime = useRef(Date.now());

  const colors = [
    '#FBBF24', // Gold
    '#F59E0B', // Deep gold
    '#FDE68A', // Light gold
    '#10B981', // Emerald
    '#34D399', // Light emerald
    '#FFFFFF', // White
    '#D97706', // Dark gold
  ];

  const createParticle = (x, y, angle, speed, color) => {
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color,
      size: 2 + Math.random() * 3,
      decay: 0.015 + Math.random() * 0.01,
      gravity: 0.1,
    };
  };

  const createBurst = useCallback((x, y, intensity = 'normal') => {
    const particleCount = intensity === 'high' ? 40 : 25;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
      const speed = 2 + Math.random() * 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      newParticles.push(createParticle(x, y, angle, speed, color));
    }
    
    particlesRef.current = [...particlesRef.current, ...newParticles];
  }, []);

  const triggerFirework = useCallback((pos) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const x = pos === 'left' 
      ? 50 + Math.random() * 100 
      : canvas.width - 150 + Math.random() * 100;
    const y = 50 + Math.random() * 100;
    
    createBurst(x, y, 'high');
  }, [createBurst]);

  useEffect(() => {
    if (trigger) {
      triggerFirework(position);
    }
  }, [trigger, position, triggerFirework]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Ambient fireworks
      const now = Date.now();
      if (now - lastAmbientTime.current > 8000 + Math.random() * 4000) {
        const ambientPos = Math.random() > 0.5 ? 'left' : 'right';
        const x = ambientPos === 'left' 
          ? 80 + Math.random() * 120 
          : canvas.width - 200 + Math.random() * 120;
        const y = 60 + Math.random() * 80;
        createBurst(x, y, 'low');
        lastAmbientTime.current = now;
      }
      
      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.vx *= 0.98; // Air resistance
        particle.alpha -= particle.decay;
        
        if (particle.alpha <= 0) return false;
        
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        return true;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createBurst]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  );
};

export default Fireworks;
