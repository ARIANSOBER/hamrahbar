'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { loads } from '@/data/loads';
import { users } from '@/data/users';
import { Building2, Package, DollarSign, TrendingUp, Users } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function CompanyDashboardPage() {
  const { t, locale } = useLocaleContext();
  const user = users[4];
  const companyLoads = loads.filter(l => l.ownerId === user.id);

  const totalRevenue = companyLoads
    .filter(l => l.status === 'delivered' || l.status === 'in_progress')
    .reduce((sum, l) => sum + l.price, 0);

  const activeDrivers = new Set(companyLoads.filter(l => l.driverId).map(l => l.driverId)).size;

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-2xl font-black">
              {t('dashboard.overview')} — {user.companyName}
            </h1>
            <p className="text-text-secondary text-sm">{t('owners.feature3Desc')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard title={t('dashboard.activeLoads')} value={companyLoads.filter(l => l.status === 'in_progress').length.toString()} icon={<Package className="w-5 h-5" />} color="blue" />
            <StatsCard title={t('dashboard.completedLoads')} value={companyLoads.filter(l => l.status === 'delivered').length.toString()} icon={<Building2 className="w-5 h-5" />} color="emerald" trend={{ value: '20%', positive: true }} />
            <StatsCard title={t('dashboard.totalRevenue')} value={formatCurrency(totalRevenue, locale).replace(' تومان', '').slice(0, 5) + 'M'} icon={<DollarSign className="w-5 h-5" />} color="amber" trend={{ value: '10%', positive: true }} />
            <StatsCard title="رانندگان فعال" value={activeDrivers.toString()} icon={<Users className="w-5 h-5" />} color="purple" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-extrabold text-lg mb-6">{t('dashboard.recentActivity')}</h2>
            <div className="space-y-3">
              {companyLoads.map((load, i) => (
                <div key={load.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{load.title}</p>
                    <p className="text-text-tertiary text-xs">{load.origin} → {load.destination} • {formatCurrency(load.price, locale)}</p>
                  </div>
                  {load.driverName && (
                    <span className="text-xs text-text-tertiary">راننده: {load.driverName}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
