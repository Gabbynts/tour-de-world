import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function RenderGradientHero() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) return null;

  if (currentTheme === 'dark') {
    return <div className='absolute gradient-03 z-0 md:-left-[100px] -left-[300px] -top-6' />
  } else {
    return <div className='absolute gradient-02 z-0 md:-left-[100px] -left-[300px] -top-6' />
  }
}

export default RenderGradientHero;
