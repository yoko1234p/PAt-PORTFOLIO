'use client';

import React, { useEffect, useRef } from 'react';

export const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / canvas.width,
        y: e.clientY / canvas.height,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Wave parameters
    class Wave {
      constructor(
        public amplitude: number,
        public frequency: number,
        public speed: number,
        public offset: number,
        public color: string,
        public opacity: number
      ) {}
    }

    const waves = [
      new Wave(30, 0.015, 0.002, 0, 'rgba(14, 165, 233, 0.15)', 0.3),
      new Wave(40, 0.012, 0.0025, 100, 'rgba(59, 130, 246, 0.12)', 0.25),
      new Wave(25, 0.018, 0.0018, 200, 'rgba(99, 102, 241, 0.1)', 0.2),
      new Wave(35, 0.014, 0.0022, 300, 'rgba(139, 92, 246, 0.08)', 0.15),
    ];

    let time = 0;

    const drawWave = (wave: Wave, yOffset: number) => {
      if (!ctx || !canvas) return;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      const mouseInfluence = 50;
      const mouseX = mouseRef.current.x * canvas.width;
      const mouseY = mouseRef.current.y;

      for (let x = 0; x <= canvas.width; x += 2) {
        // Distance from mouse
        const distanceFromMouse = Math.abs(x - mouseX) / canvas.width;
        const influence = Math.max(0, 1 - distanceFromMouse * 2);

        // Calculate wave height
        const baseY =
          Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude;

        // Add mouse influence
        const mouseEffect = influence * mouseInfluence * (0.5 - mouseY);

        const y = yOffset + baseY + mouseEffect;

        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();

      // Create gradient
      const gradient = ctx.createLinearGradient(0, yOffset - 100, 0, canvas.height);
      gradient.addColorStop(0, wave.color);
      gradient.addColorStop(1, wave.color.replace(/[\d.]+\)$/, '0)'));

      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw waves from bottom to top
      waves.forEach((wave, index) => {
        const yOffset = canvas.height - 100 - index * 80;
        drawWave(wave, yOffset);
      });

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};
