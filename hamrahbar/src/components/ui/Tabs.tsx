'use client';

import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  badge?: number;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={cn('', className)}>
      <div className="flex gap-1 p-1 rounded-2xl bg-white/5 border border-white/10 mb-6 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap',
              activeTab === tab.id
                ? 'text-white'
                : 'text-text-tertiary hover:text-white'
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-white/10 rounded-xl"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.label}
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-amber/20 text-amber">
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        ))}
      </div>
      <div>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={cn(
              'transition-all duration-300',
              activeTab === tab.id ? 'block animate-fadeIn' : 'hidden'
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
