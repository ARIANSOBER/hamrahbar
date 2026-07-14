'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { User, Package, Truck } from 'lucide-react';

export default function RegisterPage() {
  const { t } = useLocaleContext();
  const [role, setRole] = useState<'owner' | 'driver'>('owner');
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
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl">✅</div>
                </div>
                <h1 className="text-2xl font-black mb-2">{t('common.success')}</h1>
                <p className="text-text-secondary text-sm mb-8">{t('contact.successMessage')}</p>
                <Link href="/dashboard/owner" className="inline-flex px-6 py-3 rounded-2xl bg-amber text-ink font-bold text-sm hover:bg-amber-light transition-all">
                  {t('dashboard.overview')}
                </Link>
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
              className="max-w-2xl mx-auto"
            >
              <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
                <div className="text-center mb-10">
                  <span className="inline-flex px-3 py-1.5 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-bold mb-4">
                    {t('auth.registerTitle')}
                  </span>
                  <h1 className="text-[clamp(28px,4vw,44px)] font-black tracking-tight mb-2">
                    {t('auth.registerTitle')} <span className="text-amber">{t('app.name')}</span>
                  </h1>
                  <p className="text-text-secondary text-sm">{t('auth.registerDesc')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Role Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80">{t('auth.roleLabel')}</label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'owner', icon: Package, label: t('auth.ownerRole') },
                        { id: 'driver', icon: Truck, label: t('auth.driverRole') },
                      ].map(r => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setRole(r.id as 'owner' | 'driver')}
                          className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                            role === r.id
                              ? 'border-amber bg-amber/10 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            role === r.id ? 'bg-amber/20 text-amber' : 'bg-white/5 text-text-tertiary'
                          }`}>
                            <r.icon className="w-6 h-6" />
                          </div>
                          <span className="font-bold text-sm">{r.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Input
                    label={t('auth.fullNameLabel')}
                    placeholder={t('auth.fullNamePlaceholder')}
                    icon={<User className="w-4 h-4" />}
                  />
                  <Input
                    label={t('auth.phoneLabel')}
                    placeholder={t('auth.phonePlaceholder')}
                    type="tel"
                  />
                  <Input
                    label={t('auth.emailLabel')}
                    placeholder={t('auth.emailPlaceholder')}
                    type="email"
                  />
                  <Input
                    label={t('auth.companyName')}
                    placeholder={t('auth.companyPlaceholder')}
                  />

                  <Button type="submit" fullWidth size="lg">
                    {t('auth.registerButton')}
                  </Button>

                  <p className="text-center text-text-secondary text-sm">
                    {t('auth.hasAccount')}{' '}
                    <Link href="/login" className="text-amber font-bold hover:underline">
                      {t('auth.loginLink')}
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
