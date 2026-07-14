'use client';

import { useLocaleContext } from '@/providers/LocaleProvider';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, toggleLocale, mounted } = useLocaleContext();

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleLocale}
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
      aria-label={locale === 'fa' ? 'English' : 'فارسی'}
    >
      <span className="text-[11px] font-black">
        {locale === 'fa' ? 'EN' : 'FA'}
      </span>
    </button>
  );
}
