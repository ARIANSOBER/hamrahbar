'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StatusBadge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { loads } from '@/data/loads';
import { motion } from 'framer-motion';
import { Package, Search, Filter, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { formatCurrency } from '@/lib/utils';

export default function LoadsPage() {
  const { t, locale } = useLocaleContext();
  const [search, setSearch] = useState('');

  const filtered = loads.filter(l =>
    !search || l.title.includes(search) || l.origin.includes(search) || l.destination.includes(search)
  );

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
            <h1 className="text-2xl font-black">{t('nav.loads')}</h1>
          </motion.div>

          {/* Search & Filter */}
          <div className="flex gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t('common.search')}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 pr-10 text-sm text-white placeholder:text-text-tertiary outline-none focus:border-amber/50 focus:bg-amber/5 transition-all"
              />
            </div>
            <button className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-all cursor-pointer">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              icon={<Package className="w-7 h-7" />}
              title={t('common.noResults')}
              description={t('chat.noConversations')}
            />
          ) : (
            <div className="space-y-3">
              {filtered.map((load, i) => (
                <motion.div
                  key={load.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={`/loads/${load.id}`}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-amber/30 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0">
                      <Package className="w-5 h-5 text-amber" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate group-hover:text-amber transition-colors">{load.title}</p>
                      <p className="text-text-tertiary text-xs mt-0.5">
                        {load.origin} <span className="mx-1">→</span> {load.destination}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-text-tertiary text-[10px]">
                        <span>{load.weight.toLocaleString()} kg</span>
                        <span>{load.distance} km</span>
                      </div>
                    </div>
                    <div className="text-left shrink-0">
                      <p className="text-sm font-black text-amber">{formatCurrency(load.price, locale)}</p>
                      <StatusBadge status={load.status} locale={locale} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
