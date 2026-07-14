'use client';

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Package, CheckCircle2 } from 'lucide-react';

export default function NewLoadPage() {
  const { t, isRtl } = useLocaleContext();
  const BackArrow = isRtl ? ChevronRight : ChevronLeft;
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <Header />
        <main className="pt-28 pb-16">
          <div className="container max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center py-20">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h1 className="text-2xl font-black mb-2">{t('common.success')}</h1>
              <p className="text-text-secondary text-sm mb-8">{t('contact.successMessage')}</p>
              <Link href="/loads" className="inline-flex px-6 py-3 rounded-2xl bg-amber text-ink font-bold text-sm hover:bg-amber-light transition-all">
                {t('common.seeMore')}
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/loads" className="inline-flex items-center gap-1 text-text-secondary text-sm hover:text-amber transition-colors mb-6">
              <BackArrow className="w-4 h-4" />
              {t('common.back')}
            </Link>

            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-7 h-7 text-amber" />
                </div>
                <h1 className="text-2xl font-black mb-1">{t('dashboard.newLoad')}</h1>
                <p className="text-text-secondary text-sm">{t('owners.feature1Desc')}</p>
              </div>

              <form className="space-y-4" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                <Input label={t('loads.titleLabel')} placeholder={t('loads.titlePlaceholder')} />
                <div className="grid grid-cols-2 gap-4">
                  <Input label={t('loads.origin')} placeholder={t('loads.originPlaceholder')} />
                  <Input label={t('loads.destination')} placeholder={t('loads.destinationPlaceholder')} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label={t('loads.weight')} placeholder={t('loads.weightPlaceholder')} type="number" />
                  <Input label={t('loads.volume')} placeholder={t('loads.volumePlaceholder')} type="number" />
                </div>
                <Input label={t('loads.description')} placeholder={t('loads.descriptionPlaceholder')} />
                <div className="grid grid-cols-2 gap-4">
                  <Input label={t('loads.pickupDate')} type="text" placeholder={t('loads.pickupDatePlaceholder')} />
                  <Input label={t('loads.deliveryDate')} type="text" placeholder={t('loads.deliveryDatePlaceholder')} />
                </div>
                <Button type="submit" fullWidth size="lg">
                  {t('loads.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
