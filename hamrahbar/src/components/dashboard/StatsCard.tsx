'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: { value: string; positive: boolean };
  color?: 'amber' | 'blue' | 'emerald' | 'red' | 'purple';
  className?: string;
}

const colorStyles = {
  amber: 'bg-amber/10 border-amber/20 text-amber',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  red: 'bg-red-500/10 border-red-500/20 text-red-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
};

export function StatsCard({ title, value, icon, trend, color = 'amber', className }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className={cn('rounded-2xl border border-border bg-card p-6', className)}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-text-secondary text-xs font-semibold mb-1">{title}</p>
          <p className="text-2xl font-black">{value}</p>
        </div>
        <div className={cn('w-11 h-11 rounded-2xl border flex items-center justify-center', colorStyles[color])}>
          {icon}
        </div>
      </div>
      {trend && (
        <div className="flex items-center gap-1">
          <span className={cn(
            'text-xs font-bold',
            trend.positive ? 'text-emerald-400' : 'text-red-400'
          )}>
            {trend.positive ? '↑' : '↓'} {trend.value}
          </span>
          <span className="text-text-tertiary text-xs">از ماه قبل</span>
        </div>
      )}
    </motion.div>
  );
}
