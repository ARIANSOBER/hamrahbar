'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { User, Bell, Lock, Shield, LogOut } from 'lucide-react';
import Link from 'next/link';

const settingsSections = [
  {
    icon: User,
    title: 'اطلاعات شخصی',
    desc: 'نام، شماره تماس، ایمیل',
    href: '#',
  },
  {
    icon: Bell,
    title: 'اعلان‌ها',
    desc: 'مدیریت اعلان‌ها و هشدارها',
    href: '/notifications',
  },
  {
    icon: Lock,
    title: 'امنیت',
    desc: 'رمز عبور و تأیید دو مرحله‌ای',
    href: '#',
  },
  {
    icon: Shield,
    title: 'حریم خصوصی',
    desc: 'مدیریت اطلاعات حساب کاربری',
    href: '#',
  },
];

export default function SettingsPage() {
  const { t } = useLocaleContext();

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-2xl font-black mb-8">{t('dashboard.settings')}</h1>

            <div className="space-y-3 mb-8">
              {settingsSections.map((s, i) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-amber/30 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold group-hover:text-amber transition-colors">{s.title}</p>
                    <p className="text-text-tertiary text-xs">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <hr className="border-border my-6" />

            <button className="flex items-center gap-3 p-4 rounded-2xl border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10 transition-colors w-full cursor-pointer">
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-bold">{t('dashboard.logout')}</span>
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
