'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import { motion } from 'framer-motion';
import { useLocaleContext } from '@/providers/LocaleProvider';

export default function ContactPage() {
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
                {t('contact.badge')}
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-black tracking-tight mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">{t('contact.infoTitle')}</p>
            </motion.div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
