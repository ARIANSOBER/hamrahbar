// ============================================================
// HAMRAHBAR — Internationalization System
// Simple, lightweight i18n without external dependencies
// Files are structured mirroring future API localization endpoints
// ============================================================

import type { Locale } from '@/types';

export interface TranslationMap {
  [key: string]: string | TranslationMap;
}

// ─── Translations ───────────────────────────────────────────
import fa from '@/data/translations/fa.json';
import en from '@/data/translations/en.json';

const translations: Record<Locale, TranslationMap> = { fa, en };

// ─── Get nested value from object by dot path ───────────────
function getNestedValue(obj: TranslationMap, path: string): string {
  const keys = path.split('.');
  let current: TranslationMap | string = obj;
  
  for (const key of keys) {
    if (typeof current !== 'object' || current === null) return path;
    if (!(key in current)) return path;
    current = current[key];
  }
  
  return typeof current === 'string' ? current : path;
}

// ─── Format string with variables ───────────────────────────
function formatString(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return vars[key]?.toString() ?? `{{${key}}}`;
  });
}

// ─── Translation function ───────────────────────────────────
let currentLocale: Locale = 'fa';

export function setLocale(locale: Locale): void {
  currentLocale = locale;
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
  localStorage.setItem('hamrahbar-locale', locale);
}

export function getLocale(): Locale {
  return currentLocale;
}

export function t(path: string, vars?: Record<string, string | number>): string {
  const translation = getNestedValue(translations[currentLocale], path);
  return formatString(translation, vars);
}

export function tWithLocale(locale: Locale, path: string, vars?: Record<string, string | number>): string {
  const translation = getNestedValue(translations[locale], path);
  return formatString(translation, vars);
}


