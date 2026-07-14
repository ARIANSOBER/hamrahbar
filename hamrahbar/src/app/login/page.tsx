'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { LogIn, Lock, Phone } from 'lucide-react';

export default function LoginPage() {
  const { t } = useLocaleContext();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main>
          <section className="min-h-[80vh] flex items-center justify-center">
            <div className="container">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="max-w-md mx-auto text-center">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl">✅</div>
                  </div>
                  <h1 className="text-2xl font-black mb-2">{t('common.success')}</h1>
                  <p className="text-text-secondary text-sm mb-8">{t('contact.successMessage')}</p>
                  <Link href="/dashboard/owner" className="inline-flex px-6 py-3 rounded-2xl bg-amber text-ink font-bold text-sm hover:bg-amber-light transition-all">
                    {t('dashboard.overview')}
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen pt-32 pb-20 flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center mx-auto mb-4">
                    <LogIn className="w-7 h-7 text-amber" />
                  </div>
                  <h1 className="text-2xl font-black mb-1">{t('auth.loginTitle')}</h1>
                  <p className="text-text-secondary text-sm">{t('auth.loginDesc')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label={t('auth.phoneLabel')}
                    placeholder={t('auth.phonePlaceholder')}
                    type="tel"
                    icon={<Phone className="w-4 h-4" />}
                  />
                  <Input
                    label={t('auth.passwordLabel')}
                    placeholder={t('auth.passwordPlaceholder')}
                    type="password"
                    showPasswordToggle
                    icon={<Lock className="w-4 h-4" />}
                  />

                  <div className="flex justify-left">
                    <Link href="/register" className="text-text-tertiary text-xs hover:text-amber transition-colors">
                      {t('auth.forgotPassword')}
                    </Link>
                  </div>

                  <Button type="submit" fullWidth size="lg">
                    {t('auth.loginButton')}
                  </Button>

                  <p className="text-center text-text-secondary text-sm">
                    {t('auth.noAccount')}{' '}
                    <Link href="/register" className="text-amber font-bold hover:underline">
                      {t('auth.registerLink')}
                    </Link>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
