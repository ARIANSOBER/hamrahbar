'use client';

import Link from 'next/link';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t, isRtl } = useLocaleContext();
  const Arrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <div className="text-8xl font-black text-red-500/30 mb-6">500</div>
          <h1 className="text-3xl font-black mb-3">{t('errors.serverError')}</h1>
          <p className="text-text-secondary text-sm mb-8">{t('errors.serverErrorDesc')}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={reset}
              className="px-6 py-3 rounded-2xl bg-amber text-ink font-bold text-sm hover:bg-amber-light transition-all cursor-pointer"
            >
              دوباره تلاش کنید
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/15 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              <Arrow className="w-4 h-4" />
              {t('errors.goHome')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
