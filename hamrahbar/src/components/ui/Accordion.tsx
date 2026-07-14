'use client';

import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  icon?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(items.length > 0 ? [items[0].id] : []));

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map(item => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-2xl border transition-all duration-300',
              isOpen
                ? 'border-amber/30 bg-amber/[0.03] shadow-[0_0_30px_rgba(245,158,11,0.06)]'
                : 'border-border bg-card hover:border-white/15'
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center gap-3 px-6 py-5 text-right cursor-pointer bg-transparent border-none"
              aria-expanded={isOpen}
            >
              {item.icon && <span className="text-xl flex-shrink-0">{item.icon}</span>}
              <span className="flex-1 font-bold text-[15px]">{item.title}</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-text-tertiary transition-transform duration-300 flex-shrink-0',
                  isOpen && 'rotate-180 text-amber'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-6 pb-5 pt-0 text-text-secondary text-sm leading-7">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
