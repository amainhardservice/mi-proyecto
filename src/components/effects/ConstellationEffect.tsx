'use client';

import React, { useEffect, useRef } from 'react';

const ConstellationEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.onresize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 200;
    const speed = 0.05;

    for (let i = 0; i < numStars; i++) {
      stars[i] = {
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      };
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.clearRect(0,0,width,height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }

        const k = 128 / star.z;
        const px = star.x * k;
        const py = star.y * k;
        const size = ((width - star.z) / width) * 2.5;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${((width - star.z) / width) * 0.8})`;
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw lines
         for (let j = i + 1; j < numStars; j++) {
            const otherStar = stars[j];
            const dist = Math.sqrt(Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2) + Math.pow(star.z - otherStar.z, 2));
            if (dist < 100) {
                const otherK = 128 / otherStar.z;
                const otherPx = otherStar.x * otherK;
                const otherPy = otherStar.y * otherK;

                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(otherPx, otherPy);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist/100})`;
                ctx.stroke();
            }
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.onresize = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};

export default ConstellationEffect;

    