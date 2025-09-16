'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = [
  'theme-earth', 
  'theme-ocean', 
  'theme-forest',
  'theme-fire',
  'theme-air',
  'theme-snow',
  'theme-nevando',
  'theme-universe',
  'theme-constelacion',
  'theme-sunset',
  'theme-jungle',
  'theme-aurora'
] as const;

export type Theme = typeof themes[number];

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('theme-earth');

  useEffect(() => {
    // Select a random theme on initial load
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(randomTheme);
  }, []);

  useEffect(() => {
    document.body.className = ''; // Clear all theme classes
    document.body.classList.add(theme);
    // We don't store in localStorage anymore to ensure randomness on each load
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    // When a user manually selects a theme, we can store it if we want to persist it for the session
    // For now, it will be random on next full reload as requested.
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
