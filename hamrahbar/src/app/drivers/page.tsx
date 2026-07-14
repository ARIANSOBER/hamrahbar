'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/sections/CTASection';
import Link from 'next/link';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { DollarSign, MapPin, Smartphone, Shield } from 'lucide-react';

export default function DriversPage() {
  const { t } = useLocaleContext();

  const benefits = [
    { icon: DollarSign, title: t('drivers.benefit1Title'), desc: t('drivers.benefit1Desc') },
    { icon: MapPin, title: t('drivers.benefit2Title'), desc: t('drivers.benefit2Desc') },
    { icon: Smartphone, title: t('drivers.benefit3Title'), desc: t('drivers.benefit3Desc') },
    { icon: Shield, title: t('drivers.benefit4Title'), desc: t('drivers.benefit4Desc') },
  ];

  const steps = [
    { number: '۱', title: t('drivers.step1Title'), desc: t('drivers.step1Desc') },
    { number: '۲', title: t('drivers.step2Title'), desc: t('drivers.step2Desc') },
    { number: '۳', title: t('drivers.step3Title'), desc: t('drivers.step3Desc') },
    { number: '۴', title: t('drivers.step4Title'), desc: t('drivers.step4Desc') },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-60 pointer-events-none"
            style={{ background: 'var(--gradient-hero)' }}
          />
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex px-3 py-1.5 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-bold mb-6">
                {t('drivers.badge')}
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-black tracking-tight mb-4">
                {t('drivers.title')}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">{t('drivers.description')}</p>
              <Link href="/register" className="inline-flex px-8 py-4 rounded-2xl bg-amber text-ink font-bold text-sm hover:bg-amber-light shadow-glow-amber transition-all duration-200">
                {t('drivers.register')}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 text-text-secondary text-xs font-bold mb-4">{t('drivers.badge')}</span>
              <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight">{t('drivers.benefitsTitle')}</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card p-8 text-center hover:bg-tertiary transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-6 h-6 text-amber" />
                  </div>
                  <h4 className="font-extrabold text-lg mb-2">{b.title}</h4>
                  <p className="text-text-secondary text-xs leading-6">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 text-text-secondary text-xs font-bold mb-4">{t('drivers.badge')}</span>
              <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight">{t('drivers.stepsTitle')}</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center hover:border-amber/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-amber text-ink font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    {s.number}
                  </div>
                  <h4 className="font-extrabold mb-2">{s.title}</h4>
                  <p className="text-text-tertiary text-xs leading-6">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={t('drivers.appTitle')}
          description={t('drivers.appDesc')}
          buttonText={t('drivers.register')}
        />
      </main>
      <Footer />
    </>
  );
}
