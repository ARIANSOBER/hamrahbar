'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StatusBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { getLoadById } from '@/data/loads';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Package, MapPin, Weight, Ruler, DollarSign, Calendar, Truck } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function LoadDetailPage() {
  const params = useParams();
  const { t, isRtl, locale } = useLocaleContext();
  const load = getLoadById(params.id as string);
  const BackArrow = isRtl ? ChevronRight : ChevronLeft;

  if (!load) notFound();

  const details = [
    { icon: MapPin, label: 'مبدأ', value: load.origin },
    { icon: MapPin, label: 'مقصد', value: load.destination },
    { icon: Weight, label: 'وزن', value: `${load.weight.toLocaleString()} kg` },
    { icon: Ruler, label: 'حجم', value: `${load.volume} m³` },
    { icon: DollarSign, label: 'قیمت', value: formatCurrency(load.price, locale) },
    { icon: Ruler, label: 'مسافت', value: `${load.distance} km` },
    { icon: Calendar, label: 'بارگیری', value: load.pickupDate },
    { icon: Calendar, label: 'تحویل', value: load.deliveryDate },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/loads" className="inline-flex items-center gap-1 text-text-secondary text-sm hover:text-amber transition-colors mb-6">
              <BackArrow className="w-4 h-4" />
              {t('common.back')}
            </Link>

            <div className="flex items-start justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center">
                    <Package className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h1 className="text-xl font-black">{load.title}</h1>
                    <StatusBadge status={load.status} locale={locale} />
                  </div>
                </div>
              </div>
              <Button>
                {t('drivers.benefit1Title')}
              </Button>
            </div>

            <p className="text-text-secondary text-sm leading-7 mb-8">{load.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {details.map((d, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-text-tertiary text-xs mb-1.5">
                    <d.icon className="w-3.5 h-3.5" />
                    {d.label}
                  </div>
                  <p className="text-sm font-bold">{d.value}</p>
                </div>
              ))}
            </div>

            {load.driverName && (
              <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-sm font-bold">{t('drivers.badge')}: {load.driverName}</p>
                  <p className="text-text-tertiary text-xs">{t('drivers.benefit4Title')}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
