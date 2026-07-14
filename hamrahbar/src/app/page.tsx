'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { useLocaleContext } from '@/providers/LocaleProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function CTABanner() {
  const { t, isRtl } = useLocaleContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 relative overflow-hidden bg-card border-y border-border">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-60 pointer-events-none"
        style={{ background: 'var(--gradient-cta)' }}
      />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight mb-4">
            {t('about.whyTitle')}
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            {t('about.whyDesc')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber text-ink font-bold text-sm border-2 border-transparent hover:bg-amber-light shadow-glow-amber transition-all duration-200"
            >
              {t('header.register')}
              <Arrow className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-transparent border-2 border-white/15 text-white font-bold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-200"
            >
              {t('nav.about')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <StatsSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
