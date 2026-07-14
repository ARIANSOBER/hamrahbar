import type { Load } from '@/types';

export const loads: Load[] = [
  {
    id: 'load-1',
    title: 'بارگیری قطعات الکترونیکی از تهران به اصفهان',
    description: '۲۰۰ کارتن قطعات الکترونیکی حساس، نیاز به خودروی مناسب با کفی نرم و پوشش مناسب.',
    origin: 'تهران، شهرک صنعتی',
    destination: 'اصفهان، شهرک صنعتی',
    weight: 3200,
    volume: 18,
    type: 'general',
    status: 'in_progress',
    price: 18500000,
    distance: 440,
    pickupDate: '1405/04/20',
    deliveryDate: '1405/04/22',
    ownerId: 'user-1',
    ownerName: 'علی محمدی',
    driverId: 'user-2',
    driverName: 'رضا کریمی',
    createdAt: '1405/04/18',
    trackingUrl: '#',
  },
  {
    id: 'load-2',
    title: 'حمل مواد غذایی یخچالی به شیراز',
    description: 'مواد غذایی فاسدشدنی نیازمند خودروی یخچال‌دار با دمای کنترل شده.',
    origin: 'تهران، میدان میوه و تره‌بار',
    destination: 'شیراز، بازار عمده',
    weight: 8500,
    volume: 36,
    type: 'refrigerated',
    status: 'pending',
    price: 32000000,
    distance: 920,
    pickupDate: '1405/04/25',
    deliveryDate: '1405/04/26',
    ownerId: 'user-3',
    ownerName: 'سارا احمدی',
    createdAt: '1405/04/19',
  },
  {
    id: 'load-3',
    title: 'حمل میلگرد و آهن‌آلات به مشهد',
    description: '۱۰ تن میلگرد و آهن‌آلات ساختمانی، نیاز به خودروی باری مناسب.',
    origin: 'اهواز',
    destination: 'مشهد',
    weight: 10000,
    volume: 20,
    type: 'oversized',
    status: 'delivered',
    price: 45000000,
    distance: 1400,
    pickupDate: '1405/03/10',
    deliveryDate: '1405/03/14',
    ownerId: 'user-6',
    ownerName: 'نرگس رضایی',
    driverId: 'user-4',
    driverName: 'محمد حسینی',
    createdAt: '1405/03/08',
  },
  {
    id: 'load-4',
    title: 'حمل مواد شیمیایی به تبریز',
    description: 'مواد شیمیایی صنعتی با بسته‌بندی مخصوص، نیازمند خودروی مجهز و راننده متخصص.',
    origin: 'تهران، کرج',
    destination: 'تبریز، شهرک صنعتی',
    weight: 5000,
    volume: 25,
    type: 'hazardous',
    status: 'pending',
    price: 28000000,
    distance: 600,
    pickupDate: '1405/04/28',
    deliveryDate: '1405/04/29',
    ownerId: 'user-1',
    ownerName: 'علی محمدی',
    createdAt: '1405/04/20',
  },
  {
    id: 'load-5',
    title: 'حمل دام زنده به کشتارگاه',
    description: 'حمل دام سبک و سنگین با رعایت استانداردهای دامپزشکی.',
    origin: 'همدان',
    destination: 'تهران',
    weight: 12000,
    volume: 50,
    type: 'livestock',
    status: 'cancelled',
    price: 35000000,
    distance: 320,
    pickupDate: '1405/03/01',
    deliveryDate: '1405/03/01',
    ownerId: 'user-6',
    ownerName: 'نرگس رضایی',
    createdAt: '1405/02/28',
  },
  {
    id: 'load-6',
    title: 'حمل بار عمومی از بندرعباس به تهران',
    description: 'کالاهای وارداتی متنوع، نیاز به خودروی بزرگ با ظرفیت بالا.',
    origin: 'بندرعباس، گمرک',
    destination: 'تهران، انبارهای مرکزی',
    weight: 20000,
    volume: 60,
    type: 'general',
    status: 'in_progress',
    price: 55000000,
    distance: 1200,
    pickupDate: '1405/04/22',
    deliveryDate: '1405/04/26',
    ownerId: 'user-5',
    ownerName: 'شرکت حمل و نقل پارسیان',
    driverId: 'user-2',
    driverName: 'رضا کریمی',
    createdAt: '1405/04/18',
  },
  {
    id: 'load-7',
    title: 'حمل میوه و سبزیجات به تهران',
    description: 'محصولات کشاورزی فصلی نیازمند حمل سریع و خودروی مناسب.',
    origin: 'ساری',
    destination: 'تهران، میدان مرکزی',
    weight: 6000,
    volume: 30,
    type: 'refrigerated',
    status: 'pending',
    price: 15000000,
    distance: 250,
    pickupDate: '1405/04/30',
    deliveryDate: '1405/04/30',
    ownerId: 'user-3',
    ownerName: 'سارا احمدی',
    createdAt: '1405/04/25',
  },
  {
    id: 'load-8',
    title: 'حمل تجهیزات صنعتی سنگین به اصفهان',
    description: 'ماشین‌آلات صنعتی سنگین نیازمند خودروی تریلی با جرثقیل.',
    origin: 'تهران',
    destination: 'اصفهان، فولاد مبارکه',
    weight: 25000,
    volume: 40,
    type: 'oversized',
    status: 'delivered',
    price: 62000000,
    distance: 440,
    pickupDate: '1405/02/15',
    deliveryDate: '1405/02/17',
    ownerId: 'user-5',
    ownerName: 'شرکت حمل و نقل پارسیان',
    driverId: 'user-4',
    driverName: 'محمد حسینی',
    createdAt: '1405/02/12',
  },
];

export function getLoadById(id: string): Load | undefined {
  return loads.find(l => l.id === id);
}

export function getFilteredLoads(filters?: {
  status?: string;
  type?: string;
  search?: string;
}): Load[] {
  let filtered = [...loads];
  if (filters?.status) {
    filtered = filtered.filter(l => l.status === filters.status);
  }
  if (filters?.type) {
    filtered = filtered.filter(l => l.type === filters.type);
  }
  if (filters?.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      l =>
        l.title.toLowerCase().includes(q) ||
        l.origin.toLowerCase().includes(q) ||
        l.destination.toLowerCase().includes(q)
    );
  }
  return filtered;
}
