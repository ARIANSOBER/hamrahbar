'use client';

import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';

const stats = [
  { value: '1298+', key: 'stats.activeCustomers' },
  { value: '12.4B', key: 'stats.registeredFreights' },
  { value: '58K+', key: 'stats.yearlyWaybills' },
  { value: '22K+', key: 'stats.activeFleet' },
];

export function StatsSection() {
  const { t } = useLocaleContext();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-y-0 -right-24 w-1/2 bg-gradient-to-l from-amber/[0.03] to-transparent skew-x-[-10deg] pointer-events-none" />
      
      {/* Border */}
      <div className="absolute inset-0 mx-[10%] border border-border rounded-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-14 px-6 relative group hover:bg-amber/[0.02] transition-colors duration-300"
            >
              {i < stats.length - 1 && (
                <div className="absolute top-[30%] bottom-[30%] left-0 w-px bg-border" />
              )}
              <span className="block text-[clamp(36px,4vw,56px)] font-black tracking-tighter mb-2">
                {stat.value}
              </span>
              <div className="w-8 h-0.5 bg-amber rounded-full mx-auto mb-3" />
              <span className="text-text-secondary text-xs font-semibold">{t(stat.key)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
