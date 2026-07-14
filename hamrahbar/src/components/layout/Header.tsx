'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { Menu, X, Bell, MessageCircle } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getUnreadCount } from '@/data/notifications';
import { NAV_ITEMS } from '@/lib/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t, isRtl } = useLocaleContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const unread = mounted ? getUnreadCount() : 0;

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-2xl border-[var(--color-border)] py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-amber flex items-center justify-center text-lg font-black text-ink shadow-glow-amber transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(245,158,11,0.3),0_0_80px_rgba(245,158,11,0.1)] group-hover:scale-105">
            H
          </div>
          <span className="text-xl font-black tracking-tight">
            {t('app.name')}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-bold rounded-xl transition-all duration-200',
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                )}
              >
                {t(item.key as string)}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Link
            href="/notifications"
            className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label={t('dashboard.notifications')}
          >
            <Bell className="w-4 h-4" />
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-[9px] font-black text-white flex items-center justify-center">
                {unread > 9 ? '9+' : unread}
              </span>
            )}
          </Link>

          {/* Chat */}
          <Link
            href="/chat"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label={t('nav.chat')}
          >
            <MessageCircle className="w-4 h-4" />
          </Link>

          <LanguageSwitcher />
          <ThemeToggle />

          {/* Auth buttons */}
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-bold rounded-2xl border-2 border-white/15 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200"
            >
              {t('header.login')}
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 text-sm font-bold rounded-2xl bg-amber text-ink border-2 border-transparent hover:bg-amber-light shadow-glow-amber transition-all duration-200"
            >
              {t('header.startFree')}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer"
            aria-label={t('common.menu')}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-[var(--color-bg)]/95 backdrop-blur-2xl">
          <div className="container py-4 space-y-1">
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200',
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  )}
                >
                  {t(item.key as string)}
                </Link>
              );
            })}
            <hr className="border-border my-3" />
            <Link
              href="/login"
              className="block w-full px-4 py-3 text-center text-sm font-bold rounded-2xl border-2 border-white/15 text-white mb-2"
            >
              {t('header.login')}
            </Link>
            <Link
              href="/register"
              className="block w-full px-4 py-3 text-center text-sm font-bold rounded-2xl bg-amber text-ink"
            >
              {t('header.startFree')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
