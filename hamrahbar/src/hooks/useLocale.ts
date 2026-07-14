'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Locale } from '@/types';
import { setLocale, getLocale, t } from '@/lib/i18n';

const STORAGE_KEY = 'hamrahbar-locale';

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>('fa');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === 'fa' || stored === 'en')) {
      setLocaleState(stored);
      setLocale(stored);
    } else {
      setLocale('fa');
    }
  }, []);

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setLocale(newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    const next = locale === 'fa' ? 'en' : 'fa';
    changeLocale(next);
  }, [locale, changeLocale]);

  const translate = useCallback((path: string, vars?: Record<string, string | number>): string => {
    return t(path, vars);
  }, []);

  return {
    locale,
    setLocale: changeLocale,
    toggleLocale,
    t: translate,
    isRtl: locale === 'fa',
    mounted,
    dir: locale === 'fa' ? 'rtl' : 'ltr',
  };
}
