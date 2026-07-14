'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/sections/CTASection';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { ClipboardList, BarChart3, Building2, MapPin, FileText, Lock } from 'lucide-react';

export default function OwnersPage() {
  const { t } = useLocaleContext();

  const features = [
    { icon: ClipboardList, title: t('owners.feature1Title'), desc: t('owners.feature1Desc') },
    { icon: BarChart3, title: t('owners.feature2Title'), desc: t('owners.feature2Desc') },
    { icon: Building2, title: t('owners.feature3Title'), desc: t('owners.feature3Desc') },
    { icon: MapPin, title: t('owners.feature4Title'), desc: t('owners.feature4Desc') },
    { icon: FileText, title: t('owners.feature5Title'), desc: t('owners.feature5Desc') },
    { icon: Lock, title: t('owners.feature6Title'), desc: t('owners.feature6Desc') },
  ];

  return (
    <>
      <Header />
      <main>
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
                {t('owners.badge')}
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-black tracking-tight mb-4">
                {t('owners.title')}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">{t('owners.description')}</p>
              <a href="/register" className="inline-flex px-8 py-4 rounded-2xl bg-amber text-ink font-bold text-sm hover:bg-amber-light shadow-glow-amber transition-all duration-200">
                {t('owners.register')}
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 text-text-secondary text-xs font-bold mb-4">{t('owners.badge')}</span>
              <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight">{t('owners.featuresTitle')}</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card p-8 text-center hover:bg-tertiary transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-6 h-6 text-amber" />
                  </div>
                  <h4 className="font-extrabold text-lg mb-2">{f.title}</h4>
                  <p className="text-text-secondary text-xs leading-6">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={t('owners.ctaTitle')}
          description={t('owners.ctaDesc')}
          buttonText={t('owners.ctaButton')}
        />
      </main>
      <Footer />
    </>
  );
}
