'use client';

import { type ReactNode, useEffect } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LocaleProvider, useLocaleContext } from '@/providers/LocaleProvider';

function HtmlAttributes() {
  const { dir, locale } = useLocaleContext();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [dir, locale]);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <HtmlAttributes />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
