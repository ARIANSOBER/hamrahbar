'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { useLocale } from '@/hooks/useLocale';
import type { Locale } from '@/types';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
  isRtl: boolean;
  mounted: boolean;
  dir: string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();

  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocaleContext must be used within LocaleProvider');
  return context;
}
