` 1/**
 * TRZEZO Cyber Particle System
 * Lightweight canvas particle background with glowing points and subtle motion
 */
(function() {
  'use strict';
  
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 25 : 55;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.45;
      this.speedY = (Math.random() - 0.5) * 0.45;
      this.color = Math.random() > 0.45 ? 'rgba(0, 240, 255,' : 'rgba(139, 92, 246,';
      this.alpha = Math.random() * 0.5 + 0.2;
      this.baseAlpha = this.alpha;
      this.glowSpeed = Math.random() * 0.02 + 0.01;
      this.angle = Math.random() * Math.PI * 2;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.angle += this.glowSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.angle) * 0.18;
      
      // Screen wrap
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `${ this.color } ${ Math.max(0.05, this.alpha) })`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color === 'rgba(0, 240, 255,' ? '#00f0ff' : '#8b5cf6';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
  
  function init() {
    resizeCanvas();
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw subtle connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const lineAlpha = (1 - dist / 110) * 0.12;
          ctx.strokeStyle = `rgba(0, 240, 255, ${ lineAlpha })`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    animationFrameId = requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', () => {
    resizeCanvas();
  });
  
  // Pause if user prefers reduced motion or tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });
  
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    init();
    animate();
  }
})();
