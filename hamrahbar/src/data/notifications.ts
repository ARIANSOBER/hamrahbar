import type { Notification } from '@/types';

export const notifications: Notification[] = [
  {
    id: 'notif-1',
    type: 'load',
    title: 'بار جدید در مسیر شما',
    description: 'یک بار جدید از تهران به اصفهان در مسیر شما ثبت شده است.',
    isRead: false,
    link: '/loads/load-1',
    createdAt: '۱۴۰۵/۰۴/۲۳ ۱۰:۳۰',
  },
  {
    id: 'notif-2',
    type: 'payment',
    title: 'پرداخت موفق کرایه',
    description: 'کرایه بار LOAD-003 به مبلغ ۴۵,۰۰۰,۰۰۰ تومان پرداخت شد.',
    isRead: false,
    link: '/wallet',
    createdAt: '۱۴۰۵/۰۴/۲۲ ۱۶:۰۰',
  },
  {
    id: 'notif-3',
    type: 'message',
    title: 'پیام جدید از رضا کریمی',
    description: 'سلام علی آقا. بار آماده بارگیری است؟',
    isRead: true,
    link: '/chat/conv-1',
    createdAt: '۱۴۰۵/۰۴/۲۳ ۱۰:۰۰',
  },
  {
    id: 'notif-4',
    type: 'system',
    title: 'ثبت‌نام شما تأیید شد',
    description: 'مدارک شما با موفقیت تأیید شد. اکنون می‌توانید از تمام امکانات استفاده کنید.',
    isRead: true,
    createdAt: '۱۴۰۵/۰۴/۲۱ ۰۹:۰۰',
  },
  {
    id: 'notif-5',
    type: 'load',
    title: 'وضعیت بار تغییر کرد',
    description: 'بار LOAD-006 به وضعیت "در حال انجام" تغییر یافت.',
    isRead: false,
    link: '/loads/load-6',
    createdAt: '۱۴۰۵/۰۴/۲۳ ۱۲:۱۵',
  },
];

export function getUnreadCount(): number {
  return notifications.filter(n => !n.isRead).length;
}
