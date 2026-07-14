import type { User } from '@/types';

export const users: User[] = [
  {
    id: 'user-1',
    fullName: 'علی محمدی',
    phone: '09121111111',
    email: 'ali@example.com',
    role: 'owner',
    avatar: '',
    companyName: 'شرکت حمل و نقل محمدی',
    nationalId: '1234567890',
    isVerified: true,
    createdAt: '2024-01-15',
    lastLogin: '2026-07-13',
  },
  {
    id: 'user-2',
    fullName: 'رضا کریمی',
    phone: '09122222222',
    email: 'reza@example.com',
    role: 'driver',
    avatar: '',
    isVerified: true,
    createdAt: '2024-02-20',
    lastLogin: '2026-07-14',
  },
  {
    id: 'user-3',
    fullName: 'سارا احمدی',
    phone: '09123333333',
    email: 'sara@example.com',
    role: 'owner',
    avatar: '',
    companyName: 'احمدی لجستیک',
    isVerified: true,
    createdAt: '2024-03-10',
    lastLogin: '2026-07-12',
  },
  {
    id: 'user-4',
    fullName: 'محمد حسینی',
    phone: '09124444444',
    email: 'mohammad@example.com',
    role: 'driver',
    avatar: '',
    isVerified: false,
    createdAt: '2025-06-01',
    lastLogin: '2026-07-10',
  },
  {
    id: 'user-5',
    fullName: 'شرکت حمل و نقل پارسیان',
    phone: '021-12345678',
    email: 'info@parsian.com',
    role: 'company',
    avatar: '',
    companyName: 'پارسیان',
    nationalId: '9876543210',
    isVerified: true,
    createdAt: '2023-11-01',
    lastLogin: '2026-07-14',
  },
  {
    id: 'user-6',
    fullName: 'نرگس رضایی',
    phone: '09125555555',
    email: 'narges@example.com',
    role: 'owner',
    avatar: '',
    isVerified: true,
    createdAt: '2025-05-15',
    lastLogin: '2026-07-11',
  },
];

export const currentUser: User = users[0];

export function getUserById(id: string): User | undefined {
  return users.find(u => u.id === id);
}
