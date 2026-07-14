import type { Conversation, Message, ChatParticipant } from '@/types';

export const chatParticipants: ChatParticipant[] = [
  {
    userId: 'user-1',
    name: 'علی محمدی',
    avatar: '',
    isOnline: true,
    lastSeen: '1405/04/23 ۱۴:۳۰',
    role: 'صاحب بار',
  },
  {
    userId: 'user-2',
    name: 'رضا کریمی',
    avatar: '',
    isOnline: true,
    lastSeen: '1405/04/23 ۱۵:۰۰',
    role: 'راننده',
  },
  {
    userId: 'user-3',
    name: 'سارا احمدی',
    avatar: '',
    isOnline: false,
    lastSeen: '1405/04/22 ۱۸:۲۰',
    role: 'صاحب بار',
  },
  {
    userId: 'user-4',
    name: 'محمد حسینی',
    avatar: '',
    isOnline: false,
    lastSeen: '1405/04/21 ۱۰:۱۵',
    role: 'راننده',
  },
  {
    userId: 'user-5',
    name: 'پشتیبانی همراه بار',
    avatar: '',
    isOnline: true,
    lastSeen: '1405/04/23 ۱۴:۵۰',
    role: 'پشتیبانی',
  },
];

export const messages: Record<string, Message[]> = {
  'conv-1': [
    {
      id: 'msg-1',
      conversationId: 'conv-1',
      senderId: 'user-2',
      content: 'سلام علی آقا. بار آماده بارگیری است؟',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/23 ۱۰:۰۰',
    },
    {
      id: 'msg-2',
      conversationId: 'conv-1',
      senderId: 'user-1',
      content: 'سلام رضا جان. بله، از صبح آماده است. شما کی می‌رسید؟',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/23 ۱۰:۰۲',
    },
    {
      id: 'msg-3',
      conversationId: 'conv-1',
      senderId: 'user-2',
      content: 'ان‌شاءالله تا یک ساعت دیگه در محل بارگیری هستم.',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/23 ۱۰:۰۳',
    },
    {
      id: 'msg-4',
      conversationId: 'conv-1',
      senderId: 'user-1',
      content: 'خیلی خوب. من هم اونجا هستم. لطفاً دقت کنید بارها ۲۰۰ کارتن هستن و همه شکننده.',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/23 ۱۰:۰۴',
    },
    {
      id: 'msg-5',
      conversationId: 'conv-1',
      senderId: 'user-2',
      content: 'حتماً نگران نباشید. با دقت کار می‌کنم. عکس بارها رو هم موقع بارگیری می‌فرستم.',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/23 ۱۰:۰۵',
    },
    {
      id: 'msg-6',
      conversationId: 'conv-1',
      senderId: 'user-1',
      content: 'ممنون. راستی کرایه رو بعد از بارگیری می‌تونم پرداخت کنم؟',
      type: 'text',
      status: 'delivered',
      createdAt: '1405/04/23 ۱۰:۰۷',
    },
    {
      id: 'msg-7',
      conversationId: 'conv-1',
      senderId: 'user-2',
      content: 'بله، از طریق کیف پول همراه بار می‌تونید پرداخت کنید. سیستم امن هست.',
      type: 'text',
      status: 'delivered',
      createdAt: '1405/04/23 ۱۰:۰۸',
    },
  ],
  'conv-2': [
    {
      id: 'msg-8',
      conversationId: 'conv-2',
      senderId: 'user-5',
      content: 'سلام، چطور می‌تونم کمک کنم؟',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/22 ۱۴:۰۰',
    },
    {
      id: 'msg-9',
      conversationId: 'conv-2',
      senderId: 'user-1',
      content: 'سلام. من در ثبت بار جدید مشکلی دارم. سیستم خطا میده.',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/22 ۱۴:۰۱',
    },
    {
      id: 'msg-10',
      conversationId: 'conv-2',
      senderId: 'user-5',
      content: 'میشه جزئیات خطا رو بگید؟ یا اسکرین‌شات بفرستید.',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/22 ۱۴:۰۲',
    },
  ],
  'conv-3': [
    {
      id: 'msg-11',
      conversationId: 'conv-3',
      senderId: 'user-3',
      content: 'سلام، بار یخچالی من ثبت شده؟',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/21 ۱۱:۰۰',
    },
    {
      id: 'msg-12',
      conversationId: 'conv-3',
      senderId: 'user-1',
      content: 'سلام سارا خانم. بله بار شما با کد LOAD-002 ثبت شده. منتظر تأیید راننده هستیم.',
      type: 'text',
      status: 'seen',
      createdAt: '1405/04/21 ۱۱:۰۵',
    },
    {
      id: 'msg-13',
      conversationId: 'conv-3',
      senderId: 'user-3',
      content: 'ممنون. لطفاً پیگیری کنید.',
      type: 'text',
      status: 'sent',
      createdAt: '1405/04/21 ۱۱:۱۰',
    },
  ],
};

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    participants: [
      chatParticipants[0],
      chatParticipants[1],
    ],
    lastMessage: messages['conv-1'][messages['conv-1'].length - 1],
    unreadCount: 0,
    isPinned: true,
    isGroup: false,
    createdAt: '1405/04/10',
  },
  {
    id: 'conv-2',
    participants: [
      chatParticipants[0],
      chatParticipants[4],
    ],
    lastMessage: messages['conv-2'][messages['conv-2'].length - 1],
    unreadCount: 1,
    isPinned: false,
    isGroup: false,
    createdAt: '1405/04/01',
  },
  {
    id: 'conv-3',
    participants: [
      chatParticipants[0],
      chatParticipants[2],
    ],
    lastMessage: messages['conv-3'][messages['conv-3'].length - 1],
    unreadCount: 2,
    isPinned: false,
    isGroup: false,
    createdAt: '1405/03/20',
  },
];

export function getConversationById(id: string): Conversation | undefined {
  return conversations.find(c => c.id === id);
}

export function getMessagesByConversationId(id: string): Message[] {
  return messages[id] || [];
}
