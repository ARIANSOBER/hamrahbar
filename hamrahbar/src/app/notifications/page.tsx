'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { notifications } from '@/data/notifications';
import { EmptyState } from '@/components/ui/EmptyState';
import { motion } from 'framer-motion';
import { Bell, Package, DollarSign, MessageCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const typeIcons = {
  load: Package,
  payment: DollarSign,
  message: MessageCircle,
  system: Info,
};

const typeColors = {
  load: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  payment: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  message: 'bg-amber/10 border-amber/20 text-amber',
  system: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
};

export default function NotificationsPage() {
  const { t } = useLocaleContext();

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-black">{t('dashboard.notifications')}</h1>
          </motion.div>

          {notifications.length === 0 ? (
            <EmptyState
              icon={<Bell className="w-7 h-7" />}
              title={t('common.noResults')}
              description={t('chat.noConversations')}
            />
          ) : (
            <div className="space-y-3">
              {notifications.map((n, i) => {
                const Icon = typeIcons[n.type];
                return (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={cn(
                      'rounded-2xl border p-4 transition-all',
                      n.isRead
                        ? 'border-border bg-card'
                        : 'border-amber/20 bg-amber/[0.02]'
                    )}
                  >
                    <div className="flex gap-4">
                      <div className={cn('w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0', typeColors[n.type])}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className={cn('text-sm', n.isRead ? 'font-bold' : 'font-extrabold')}>
                              {n.title}
                            </p>
                            <p className="text-text-tertiary text-xs mt-0.5">{n.description}</p>
                          </div>
                          <span className="text-text-tertiary text-[10px] whitespace-nowrap shrink-0">
                            {n.createdAt}
                          </span>
                        </div>
                        {n.link && (
                          <Link
                            href={n.link}
                            className="inline-block mt-2 text-amber text-xs font-bold hover:underline"
                          >
                            {t('common.seeMore')}
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
