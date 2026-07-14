'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { StatusBadge } from '@/components/ui/Badge';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { loads } from '@/data/loads';
import { users } from '@/data/users';
import { notifications } from '@/data/notifications';
import { motion } from 'framer-motion';
import { Package, DollarSign, TrendingUp, Clock, Plus, Bell, MessageCircle, Truck } from 'lucide-react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';

export default function OwnerDashboardPage() {
  const { t, locale } = useLocaleContext();
  const user = users[0];
  const myLoads = loads.filter(l => l.ownerId === user.id);
  const activeLoads = myLoads.filter(l => l.status === 'in_progress');
  const recentNotifications = notifications.slice(0, 3);

  const totalRevenue = myLoads
    .filter(l => l.status === 'delivered' || l.status === 'in_progress')
    .reduce((sum, l) => sum + l.price, 0);

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container">
          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-2xl font-black">
                {t('dashboard.overview')}، {user.fullName}
              </h1>
              <p className="text-text-secondary text-sm">{t('services.dashboardDesc')}</p>
            </div>
            <Link href="/loads/new">
              <Button icon={<Plus className="w-4 h-4" />}>{t('dashboard.newLoad')}</Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title={t('dashboard.activeLoads')}
              value={activeLoads.length.toString()}
              icon={<Truck className="w-5 h-5" />}
              color="blue"
            />
            <StatsCard
              title={t('dashboard.completedLoads')}
              value={myLoads.filter(l => l.status === 'delivered').length.toString()}
              icon={<Package className="w-5 h-5" />}
              color="emerald"
              trend={{ value: '12%', positive: true }}
            />
            <StatsCard
              title={t('dashboard.totalRevenue')}
              value={formatCurrency(totalRevenue, locale).replace(' تومان', '').slice(0, 4) + 'M'}
              icon={<DollarSign className="w-5 h-5" />}
              color="amber"
              trend={{ value: '8%', positive: true }}
            />
            <StatsCard
              title={t('dashboard.totalLoads')}
              value={myLoads.length.toString()}
              icon={<TrendingUp className="w-5 h-5" />}
              color="purple"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Loads */}
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-extrabold text-lg">{t('dashboard.recentActivity')}</h2>
                <Link href="/loads" className="text-amber text-xs font-bold hover:underline">
                  {t('dashboard.viewAll')}
                </Link>
              </div>
              <div className="space-y-3">
                {myLoads.slice(0, 5).map((load, i) => (
                  <motion.div
                    key={load.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                      <Package className="w-4 h-4 text-amber" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate">{load.title}</p>
                      <p className="text-text-tertiary text-xs">{load.origin} → {load.destination}</p>
                    </div>
                    <StatusBadge status={load.status} locale={locale} />
                    <span className="text-text-tertiary text-xs">{load.createdAt}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-extrabold text-lg">{t('dashboard.notifications')}</h2>
                <Link href="/notifications" className="text-amber text-xs font-bold hover:underline">
                  {t('dashboard.viewAll')}
                </Link>
              </div>
              <div className="space-y-3">
                {recentNotifications.map((n, i) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`p-3 rounded-xl transition-colors ${
                      n.isRead ? 'bg-white/5' : 'bg-amber/5 border border-amber/20'
                    }`}
                  >
                    <p className="text-sm font-bold">{n.title}</p>
                    <p className="text-text-tertiary text-xs mt-0.5">{n.description}</p>
                    <span className="text-text-tertiary text-[10px] mt-1 block">{n.createdAt}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <Link href="/chat" className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm font-bold">{t('nav.chat')}</p>
                    <p className="text-text-tertiary text-xs">{t('dashboard.messages')}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
