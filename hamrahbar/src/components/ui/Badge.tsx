'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/types';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'amber' | 'blue' | 'emerald' | 'red' | 'purple';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'bg-white/5 text-text-secondary border-white/10',
  amber: 'bg-amber/10 text-amber border-amber/25',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  red: 'bg-red-500/10 text-red-400 border-red-500/25',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
};

export function Badge({ children, variant = 'default', size = 'md', dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-bold border rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full', variant === 'default' ? 'bg-text-secondary' : `bg-${variant === 'amber' ? 'amber' : variant === 'blue' ? 'blue-400' : variant === 'emerald' ? 'emerald-400' : variant === 'red' ? 'red-400' : 'purple-400'}`)} />
      )}
      {children}
    </span>
  );
}

export function StatusBadge({ status, locale = 'fa' }: { status: string; locale?: Locale }) {
  const config: Record<string, { label: Record<Locale, string>; variant: BadgeProps['variant'] }> = {
    pending: { label: { fa: 'در انتظار', en: 'Pending' }, variant: 'amber' },
    in_progress: { label: { fa: 'در حال انجام', en: 'In Progress' }, variant: 'blue' },
    delivered: { label: { fa: 'تحویل شده', en: 'Delivered' }, variant: 'emerald' },
    completed: { label: { fa: 'تکمیل شده', en: 'Completed' }, variant: 'emerald' },
    cancelled: { label: { fa: 'لغو شده', en: 'Cancelled' }, variant: 'red' },
    failed: { label: { fa: 'ناموفق', en: 'Failed' }, variant: 'red' },
  };

  const item = config[status] ?? { label: { fa: status, en: status }, variant: 'default' as const };

  return (
    <Badge variant={item.variant} dot>
      {item.label[locale]}
    </Badge>
  );
}
