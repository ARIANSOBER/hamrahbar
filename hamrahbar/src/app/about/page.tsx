'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/sections/CTASection';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { Target, Eye, Diamond, Truck } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLocaleContext();

  const missionCards = [
    {
      icon: Target,
      title: t('about.missionTitle'),
      desc: t('about.missionDesc'),
    },
    {
      icon: Eye,
      title: t('about.visionTitle'),
      desc: t('about.visionDesc'),
    },
    {
      icon: Diamond,
      title: t('about.valuesTitle'),
      desc: t('about.valuesDesc'),
    },
  ];

  const reasons = [
    { number: '01', title: t('about.reason1Title'), desc: t('about.reason1Desc') },
    { number: '02', title: t('about.reason2Title'), desc: t('about.reason2Desc') },
    { number: '03', title: t('about.reason3Title'), desc: t('about.reason3Desc') },
    { number: '04', title: t('about.reason4Title'), desc: t('about.reason4Desc') },
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
                {t('about.badge')}
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-black tracking-tight mb-4">
                {t('about.title')}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">{t('about.description')}</p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <hr className="section-divider mb-0" />
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 text-text-secondary text-xs font-bold mb-4">
                  {t('about.storyTag')}
                </span>
                <h2 className="text-[clamp(28px,3.5vw,48px)] font-black tracking-tight mb-6">{t('about.storyTitle')}</h2>
                <p className="text-text-secondary text-sm leading-8 mb-4">{t('about.storyP1')}</p>
                <p className="text-text-secondary text-sm leading-8">{t('about.storyP2')}</p>
                <div className="flex gap-10 mt-8 pt-8 border-t border-border">
                  {[
                    { value: '۱۴۰۰', label: t('about.foundedYear') },
                    { value: '۱۰۰۰+', label: t('about.loadsPerDay') },
                    { value: '۹۸٪', label: t('about.satisfaction') },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <span className="block text-2xl font-black text-amber">{s.value}</span>
                      <span className="text-text-tertiary text-xs">{s.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden lg:block"
              >
                <div className="relative rounded-3xl border border-border overflow-hidden aspect-[4/3] bg-gradient-to-br from-amber/[0.03] to-blue-500/[0.03] flex items-center justify-center">
                  <Truck className="w-32 h-32 text-amber/20" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber/40 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/40 rounded-bl-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Cards */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              {missionCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-[var(--color-bg)] p-8 text-center hover:border-amber/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center mx-auto mb-5">
                    <card.icon className="w-6 h-6 text-amber" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-3">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-7">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 text-text-secondary text-xs font-bold mb-4">
                {t('about.whyUs')}
              </span>
              <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight">{t('about.whyTitle')}</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-amber/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="block text-3xl font-black text-amber/40 mb-3">{r.number}</span>
                  <h4 className="font-extrabold text-sm mb-2">{r.title}</h4>
                  <p className="text-text-tertiary text-xs leading-6">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={t('about.storyTitle')}
          description={t('about.storyP2')}
          buttonText={t('header.register')}
        />
      </main>
      <Footer />
    </>
  );
}
