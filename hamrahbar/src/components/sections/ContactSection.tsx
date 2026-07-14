'use client';

import { useState } from 'react';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  const { t } = useLocaleContext();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section-padding relative">
      <hr className="section-divider" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex px-3 py-1.5 rounded-full border border-white/10 text-text-secondary text-xs font-bold mb-4">
            {t('contact.badge')}
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight">{t('contact.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <h3 className="text-xl font-extrabold mb-8">{t('contact.infoTitle')}</h3>
            <div className="space-y-1">
              {[
                { icon: Phone, value: t('contact.phone') },
                { icon: Mail, value: 'info@hamrahbar.com' },
                { icon: MapPin, value: t('contact.address') },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4 border-b border-border last:border-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber" />
                  </div>
                  <span className="text-text-secondary text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-1">{t('contact.successMessage')}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label={t('contact.name')}
                  placeholder={t('contact.name')}
                />
                <Input
                  label={t('contact.email')}
                  type="email"
                  placeholder={t('contact.email')}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-white/80">{t('contact.subject')}</label>
                  <textarea
                    rows={4}
                    placeholder={t('contact.message')}
                    className="w-full px-4 py-3 text-sm rounded-2xl border-2 border-white/10 bg-white/5 text-white placeholder:text-text-tertiary outline-none transition-all duration-200 focus:border-amber/50 focus:bg-amber/5 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)] resize-none"
                  />
                </div>
                <Button type="submit" icon={<Send className="w-4 h-4" />} fullWidth>
                  {t('contact.send')}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
