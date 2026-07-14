'use client';

import Link from 'next/link';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  const { t } = useLocaleContext();

  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber flex items-center justify-center text-base font-black text-ink">
                H
              </div>
              <span className="text-lg font-black">{t('app.name')}</span>
            </Link>
            <p className="text-text-secondary text-sm leading-7 max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-5">{t('footer.quickAccess')}</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary text-sm hover:text-amber transition-colors duration-200"
                  >
                    {t(item.key as string)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-sm mb-5">{t('footer.socialMedia')}</h4>
            <div className="flex gap-3">
              {['📸', '✈️', '💼', '🐦'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 hover:border-amber/30 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-5">
          <p className="text-center text-text-tertiary text-xs">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
