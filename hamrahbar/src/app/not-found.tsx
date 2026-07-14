'use client';

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  const { t, isRtl } = useLocaleContext();
  const Arrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <>
      <Header />
      <main>
        <section className="min-h-[80vh] flex items-center justify-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-lg mx-auto"
            >
              <div className="text-8xl font-black text-amber/30 mb-6">404</div>
              <h1 className="text-3xl font-black mb-3">{t('errors.notFound')}</h1>
              <p className="text-text-secondary text-sm mb-8">{t('errors.notFoundDesc')}</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber text-ink font-bold text-sm hover:bg-amber-light transition-all"
              >
                <Arrow className="w-4 h-4" />
                {t('errors.goHome')}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
