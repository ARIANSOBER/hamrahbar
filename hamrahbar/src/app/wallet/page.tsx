'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';
import { Wallet, ArrowUpRight, ArrowDownLeft, Plus, Clock } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import type { Transaction } from '@/types';

const mockTransactions: Transaction[] = [
  { id: 'tx-1', type: 'income', amount: 18500000, description: 'کرایه بار LOAD-001', status: 'completed', createdAt: '۱۴۰۵/۰۴/۲۳' },
  { id: 'tx-2', type: 'expense', amount: 2500000, description: 'کارمزد سامانه', status: 'completed', createdAt: '۱۴۰۵/۰۴/۲۲' },
  { id: 'tx-3', type: 'income', amount: 45000000, description: 'کرایه بار LOAD-003', status: 'completed', createdAt: '۱۴۰۵/۰۴/۲۰' },
  { id: 'tx-4', type: 'withdrawal', amount: 10000000, description: 'برداشت به حساب بانکی', status: 'pending', createdAt: '۱۴۰۵/۰۴/۱۹' },
  { id: 'tx-5', type: 'deposit', amount: 50000000, description: 'واریز به کیف پول', status: 'completed', createdAt: '۱۴۰۵/۰۴/۱۵' },
];

export default function WalletPage() {
  const { t, locale } = useLocaleContext();
  const balance = 82500000;

  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl font-black mb-6">{t('dashboard.wallet')}</h1>

            {/* Balance Card */}
            <div className="rounded-3xl bg-gradient-to-br from-amber to-orange-600 p-8 mb-8 text-ink">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-80 font-bold">{t('dashboard.balance')}</p>
                  <p className="text-3xl font-black">{formatCurrency(balance, locale)}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" size="sm" icon={<Plus className="w-4 h-4" />}>
                  واریز
                </Button>
                <Button variant="secondary" size="sm" icon={<ArrowUpRight className="w-4 h-4" />}>
                  برداشت
                </Button>
              </div>
            </div>

            {/* Transactions */}
            <h2 className="font-bold text-lg mb-4">تراکنش‌ها</h2>
            <div className="space-y-2">
              {mockTransactions.map((tx, i) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    tx.type === 'income' || tx.type === 'deposit'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-red-500/10 text-red-400'
                  }`}>
                    {tx.type === 'income' || tx.type === 'deposit'
                      ? <ArrowDownLeft className="w-4 h-4" />
                      : <ArrowUpRight className="w-4 h-4" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold">{tx.description}</p>
                    <p className="text-text-tertiary text-xs">{tx.createdAt}</p>
                  </div>
                  <span className={`text-sm font-black ${
                    tx.type === 'income' || tx.type === 'deposit'
                      ? 'text-emerald-400'
                      : 'text-red-400'
                  }`}>
                    {(tx.type === 'income' || tx.type === 'deposit') ? '+' : '-'}
                    {formatCurrency(tx.amount, locale).replace(' تومان', '').slice(0, 5)} تومان
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
