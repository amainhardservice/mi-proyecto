'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { AppProvider } from '@/contexts/AppContext';
import SnowfallEffect from '@/components/effects/SnowfallEffect';
import ConstellationEffect from '@/components/effects/ConstellationEffect';
import React from 'react';

// We need a client component to consume the theme context
const ThemedBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <body className="font-body antialiased bg-background relative">
      {theme === 'theme-nevando' && <SnowfallEffect />}
      {theme === 'theme-constelacion' && <ConstellationEffect />}
      {children}
      <Toaster />
      <Analytics />
    </body>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <title>Acro Companion</title>
        <meta name="description" content="Your interactive guide to Acroyoga poses and concepts." />
      </head>
      <AppProvider>
        <ThemeProvider>
          <ThemedBody>
            {children}
          </ThemedBody>
        </ThemeProvider>
      </AppProvider>
    </html>
  );
}

    