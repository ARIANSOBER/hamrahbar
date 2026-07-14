'use client';

import Link from 'next/link';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { ArrowLeft, ArrowRight, Truck, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const { t, isRtl } = useLocaleContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const stats = [
    { value: '6.6M+', label: t('hero.statsLoads') },
    { value: '262K+', label: t('hero.statsDrivers') },
    { value: '12B+', label: t('hero.statsWeight') },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-80"
          style={{ background: 'var(--gradient-hero)' }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Column */}
          <div className="text-center lg:text-right">
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-bold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-amber shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse" />
              {t('hero.badge')}
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(44px,7vw,96px)] font-black leading-[0.95] tracking-tighter mb-6"
            >
              {t('hero.title')}
              <br />
              <span className="text-amber" style={{ textShadow: '0 0 60px rgba(245,158,11,0.3)' }}>
                {t('hero.titleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-8 max-w-lg mx-auto lg:mx-0 mb-10"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-14"
            >
              <Link
                href="/register"
                className="px-7 py-3.5 rounded-2xl bg-amber text-ink font-bold text-sm border-2 border-transparent hover:bg-amber-light shadow-glow-amber transition-all duration-200 inline-flex items-center gap-2"
              >
                {t('hero.ownerRegister')}
                <Arrow className="w-4 h-4" />
              </Link>
              <Link
                href="/register"
                className="px-7 py-3.5 rounded-2xl bg-transparent border-2 border-white/15 text-white font-bold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                {t('hero.driverRegister')}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="px-8 py-4 border-l border-border first:pr-0 first:pl-8 last:border-l-0"
                  style={{ borderLeft: i < stats.length - 1 ? '1px solid var(--color-border-strong)' : 'none' }}
                >
                  <span className="block text-3xl font-black tracking-tight">{stat.value}</span>
                  <span className="text-text-secondary text-xs font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image/Visual Column */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Hero Image Card */}
              <div className="relative w-[500px] h-[550px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-amber/5 border border-amber/20 flex items-center justify-center">
                    <Truck className="w-32 h-32 text-amber/30" />
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute top-10 -right-6 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">{t('services.pricing')}</div>
                      <div className="text-[10px] text-text-tertiary">{t('loads.online')}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-24 -left-8 glass rounded-xl px-4 py-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">{t('services.validation')}</div>
                      <div className="text-[10px] text-text-tertiary">{t('loads.online')}</div>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-amber/50 to-transparent opacity-50" />
    </section>
  );
}
