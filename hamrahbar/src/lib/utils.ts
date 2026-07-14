import type { Locale, ThemeMode } from '@/types';

// ─── CSS class merger ──────────────────────────────────────
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

// ─── Format currency ───────────────────────────────────────
export function formatCurrency(amount: number, locale: Locale = 'fa'): string {
  const formatter = new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });
  return locale === 'fa' ? `${formatter.format(amount)} تومان` : `${formatter.format(amount)} IRR`;
}

// ─── Format number ─────────────────────────────────────────
export function formatNumber(num: number, locale: Locale = 'fa'): string {
  return new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US').format(num);
}

// ─── Get initial letters ───────────────────────────────────
export function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

// ─── Generate a random color from a name ───────────────────
export function getNameColor(name: string): string {
  const colors = [
    '#f59e0b', '#3b82f6', '#ef4444', '#10b981',
    '#8b5cf6', '#ec4899', '#06b6d4', '#f97316',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

// ─── Truncate text ─────────────────────────────────────────
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

// ─── Time ago (simple) ─────────────────────────────────────
export function timeAgo(dateString: string, locale: Locale = 'fa'): string {
  // Simplified — returns the date string itself for now
  return dateString;
}

// ─── Status display config ─────────────────────────────────
export const statusConfig: Record<string, { label: Record<Locale, string>; color: string }> = {
  pending: {
    label: { fa: 'در انتظار', en: 'Pending' },
    color: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  in_progress: {
    label: { fa: 'در حال انجام', en: 'In Progress' },
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  },
  delivered: {
    label: { fa: 'تحویل شده', en: 'Delivered' },
    color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  cancelled: {
    label: { fa: 'لغو شده', en: 'Cancelled' },
    color: 'bg-red-500/20 text-red-400 border-red-500/30',
  },
  completed: {
    label: { fa: 'تکمیل شده', en: 'Completed' },
    color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  failed: {
    label: { fa: 'ناموفق', en: 'Failed' },
    color: 'bg-red-500/20 text-red-400 border-red-500/30',
  },
};
