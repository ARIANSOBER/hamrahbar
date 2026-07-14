export const SITE_URL = 'https://hamrahbar.com';
export const SITE_NAME = 'همراه بار | Hamrahbar';
export const SITE_DESCRIPTION = 'پلتفرم هوشمند مدیریت حمل و نقل و لجستیک';

export const NAV_ITEMS = [
  { href: '/', key: 'nav.home' },
  { href: '/services', key: 'nav.services' },
  { href: '/drivers', key: 'nav.drivers' },
  { href: '/owners', key: 'nav.owners' },
  { href: '/about', key: 'nav.about' },
  { href: '/blog', key: 'nav.blog' },
  { href: '/rules', key: 'nav.rules' },
  { href: '/contact', key: 'nav.contact' },
] as const;

export const LOAD_TYPES = ['general', 'refrigerated', 'hazardous', 'livestock', 'oversized'] as const;

export const LOAD_STATUSES = ['pending', 'in_progress', 'delivered', 'cancelled'] as const;
