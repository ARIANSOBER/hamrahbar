// ============================================================
// HAMRAHBAR — Type Definitions
// All types mirror future API responses for easy backend migration
// ============================================================

// ─── Locale ─────────────────────────────────────────────────
export type Locale = 'fa' | 'en';

// ─── Theme ──────────────────────────────────────────────────
export type ThemeMode = 'light' | 'dark' | 'system';

// ─── User ───────────────────────────────────────────────────
export type UserRole = 'driver' | 'owner' | 'company' | 'admin';

export interface User {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  role: UserRole;
  avatar: string;
  companyName?: string;
  nationalId?: string;
  isVerified: boolean;
  createdAt: string;
  lastLogin: string;
}

// ─── Load / Cargo ───────────────────────────────────────────
export type LoadStatus = 'pending' | 'in_progress' | 'delivered' | 'cancelled';
export type LoadType = 'general' | 'refrigerated' | 'hazardous' | 'livestock' | 'oversized';

export interface Load {
  id: string;
  title: string;
  description: string;
  origin: string;
  destination: string;
  weight: number; // kg
  volume: number; // m³
  type: LoadType;
  status: LoadStatus;
  price: number;
  distance: number; // km
  pickupDate: string;
  deliveryDate: string;
  ownerId: string;
  ownerName: string;
  driverId?: string;
  driverName?: string;
  companyId?: string;
  createdAt: string;
  trackingUrl?: string;
}

// ─── Blog ───────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  tags: string[];
  date: string; // Jalali date in Persian, Gregorian in English
  readTime: number; // minutes
  featured: boolean;
}

// ─── Chat / Message ─────────────────────────────────────────
export type MessageType = 'text' | 'image' | 'file' | 'voice';
export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'seen';

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  type: MessageType;
  status: MessageStatus;
  replyTo?: string;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  createdAt: string;
}

export interface Conversation {
  id: string;
  participants: ChatParticipant[];
  lastMessage?: Message;
  unreadCount: number;
  isPinned: boolean;
  isGroup: boolean;
  title?: string;
  createdAt: string;
}

export interface ChatParticipant {
  userId: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastSeen: string;
  role: string;
}

// ─── Notification ───────────────────────────────────────────
export type NotificationType = 'load' | 'payment' | 'system' | 'message';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  isRead: boolean;
  link?: string;
  createdAt: string;
}

// ─── Wallet / Transaction ───────────────────────────────────
export type TransactionType = 'income' | 'expense' | 'withdrawal' | 'deposit';
export type TransactionStatus = 'pending' | 'completed' | 'failed';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  status: TransactionStatus;
  referenceId?: string;
  createdAt: string;
}

// ─── Dashboard Stats ────────────────────────────────────────
export interface DashboardStats {
  totalLoads: number;
  activeLoads: number;
  completedLoads: number;
  totalRevenue: number;
  averageRating: number;
  totalDrivers?: number;
  totalOwners?: number;
  totalCompanies?: number;
}

// ─── Service ────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// ─── FAQ ────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// ─── Pricing Plan ───────────────────────────────────────────
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: 'monthly' | 'yearly';
  features: string[];
  highlighted: boolean;
  badge?: string;
}

// ─── Review ─────────────────────────────────────────────────
export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userRole: UserRole;
  rating: number;
  content: string;
  createdAt: string;
}
