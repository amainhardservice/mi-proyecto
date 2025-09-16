'use client';

import React from 'react';
import './SnowfallEffect.css';

const SnowfallEffect: React.FC = () => {
  const snowflakeCount = 150; 
  const snowflakes = Array.from({ length: snowflakeCount }).map((_, i) => {
    const style: React.CSSProperties = {
      '--random-x-start': `${Math.random() * 100}vw`,
      '--random-x-end': `${Math.random() * 100}vw`,
      '--random-y-offset': `${(Math.random() - 0.5) * 20}vh`,
      '--random-size': `${1 + Math.random() * 2}px`,
      '--random-duration': `${5 + Math.random() * 8}s`,
      '--random-delay': `-${Math.random() * 13}s`,
      '--random-opacity': `${0.2 + Math.random() * 0.8}`,
    };
    return <div key={i} className="snowflake" style={style}></div>;
  });

  return <div className="snowfall-container">{snowflakes}</div>;
};

export default SnowfallEffect;

    