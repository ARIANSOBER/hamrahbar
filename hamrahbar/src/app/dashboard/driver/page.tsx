'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { StatusBadge } from '@/components/ui/Badge';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { loads } from '@/data/loads';
import { users } from '@/data/users';
import { motion } from 'framer-motion';
import { Package, DollarSign, TrendingUp, MapPin, Bell } from 'lucide-react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';

export default function DriverDashboardPage() {
  const { t, locale } = useLocaleContext();
  const user = users[1];
  const myLoads = loads.filter(l => l.driverId === user.id);

  const totalRevenue = myLoads
    .filter(l => l.status === 'delivered' || l.status === 'in_progress')
    .reduce((sum, l) => sum + l.price, 0);

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-black">
              {t('dashboard.overview')}، {user.fullName}
            </h1>
            <p className="text-text-secondary text-sm">{t('drivers.description')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard title={t('dashboard.activeLoads')} value={myLoads.filter(l => l.status === 'in_progress').length.toString()} icon={<Package className="w-5 h-5" />} color="blue" />
            <StatsCard title={t('dashboard.completedLoads')} value={myLoads.filter(l => l.status === 'delivered').length.toString()} icon={<Package className="w-5 h-5" />} color="emerald" trend={{ value: '5%', positive: true }} />
            <StatsCard title={t('dashboard.totalRevenue')} value={formatCurrency(totalRevenue, locale).replace(' تومان', '')} icon={<DollarSign className="w-5 h-5" />} color="amber" trend={{ value: '15%', positive: true }} />
            <StatsCard title={t('dashboard.totalLoads')} value={myLoads.length.toString()} icon={<TrendingUp className="w-5 h-5" />} color="purple" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-extrabold text-lg">{t('dashboard.recentActivity')}</h2>
              <Link href="/loads" className="text-amber text-xs font-bold hover:underline">{t('dashboard.viewAll')}</Link>
            </div>
            <div className="space-y-3">
              {myLoads.map((load, i) => (
                <motion.div
                  key={load.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{load.title}</p>
                    <p className="text-text-tertiary text-xs">{load.origin} → {load.destination}</p>
                  </div>
                  <StatusBadge status={load.status} locale={locale} />
                  <span className="text-text-tertiary text-xs whitespace-nowrap">{formatCurrency(load.price, locale)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
