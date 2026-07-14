'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/sections/CTASection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function ServicesPage() {
  const { t } = useLocaleContext();

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
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
                {t('nav.services')}
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-black tracking-tight mb-4">
                {t('services.title')}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">{t('services.description')}</p>
            </motion.div>
          </div>
        </section>

        <ServicesSection />

        {/* Detailed services */}
        <section className="section-padding bg-card border-y border-border">
          <div className="container">
            <div className="grid gap-8 max-w-4xl mx-auto">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 p-8 rounded-2xl border border-border bg-[var(--color-bg)]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center text-3xl shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold mb-2">{svc.title}</h3>
                    <p className="text-text-secondary text-sm leading-7 mb-4">{svc.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.features.map(f => (
                        <span key={f} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={t('about.whyTitle')}
          description={t('about.whyDesc')}
          buttonText={t('header.register')}
        />
      </main>
      <Footer />
    </>
  );
}
