import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function RenderGradientAbout() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) return null;

  if (currentTheme === 'dark') {
    return <div className='hidden sm:block gradient-03 z-0 overflow-hidden right-0 -bottom-[500px]' />
  } else {
    return <div className='hidden sm:block gradient-02 z-0 overflow-hidden right-0 -bottom-[500px]' />
  }
}

export default RenderGradientAbout;
