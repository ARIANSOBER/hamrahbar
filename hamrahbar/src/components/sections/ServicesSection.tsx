'use client';

import { services } from '@/data/services';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';

export function ServicesSection() {
  const { t } = useLocaleContext();

  return (
    <section className="section-padding relative">
      <hr className="section-divider mb-0" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 text-text-secondary text-xs font-bold mb-4">
            {t('nav.services')}
          </span>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-black tracking-tight mb-4">
            {t('services.title')}
          </h2>
          <p className="text-text-secondary text-lg">{t('services.description')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card p-10 transition-colors duration-300 hover:bg-tertiary"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-smooth" />
              
              <div className="w-16 h-16 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center text-3xl mb-7 transition-all duration-300 group-hover:bg-amber/20 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-extrabold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-7">{service.description}</p>

              <ul className="mt-5 space-y-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber/60" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
