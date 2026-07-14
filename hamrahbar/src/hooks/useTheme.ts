'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ThemeMode } from '@/types';

const STORAGE_KEY = 'hamrahbar-theme';

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored) {
      setMode(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove('light', 'dark');
    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.classList.add(mode);
    }
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, mounted]);

  const toggleTheme = useCallback(() => {
    setMode(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'dark';
      return 'dark';
    });
  }, []);

  return { mode, setMode, toggleTheme, isDark: mode === 'dark', mounted };
}
