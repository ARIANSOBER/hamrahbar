'use client';

import Link from 'next/link';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export function CTASection({ title, description, buttonText, buttonHref = '/register' }: CTASectionProps) {
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
          <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight mb-4">{title}</h2>
          <p className="text-text-secondary text-lg mb-8">{description}</p>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber text-ink font-bold text-sm border-2 border-transparent hover:bg-amber-light shadow-glow-amber transition-all duration-200"
          >
            {buttonText}
            <Arrow className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
