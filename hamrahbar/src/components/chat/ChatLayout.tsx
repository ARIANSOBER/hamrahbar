'use client';

import { useState } from 'react';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { conversations, getMessagesByConversationId } from '@/data/conversations';
import { cn } from '@/lib/utils';
import { Search, Pin, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import type { Conversation, Message, ChatParticipant } from '@/types';

export function ChatLayout() {
  const { t, isRtl } = useLocaleContext();
  const [selectedConv, setSelectedConv] = useState<string>(conversations[0]?.id || '');
  const [showSidebar, setShowSidebar] = useState(true);

  const conversation = conversations.find(c => c.id === selectedConv);
  const messages = selectedConv ? getMessagesByConversationId(selectedConv) : [];

  const ChevronIcon = isRtl ? ChevronRight : ChevronLeft;

  return (
    <div className="h-[calc(100vh-12rem)] rounded-3xl border border-border bg-card overflow-hidden flex">
      {/* Conversation List */}
      <div className={cn(
        'w-80 border-l border-border flex flex-col shrink-0 transition-all duration-300',
        !showSidebar && 'w-0 border-l-0 overflow-hidden'
      )}>
        {/* Search */}
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <input
              type="text"
              placeholder={t('chat.search')}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 pr-10 text-sm text-white placeholder:text-text-tertiary outline-none focus:border-amber/50 focus:bg-amber/5 transition-all"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <button
              key={conv.id}
              onClick={() => setSelectedConv(conv.id)}
              className={cn(
                'w-full text-right p-4 border-b border-border/50 transition-colors cursor-pointer hover:bg-white/5',
                selectedConv === conv.id && 'bg-amber/5'
              )}
            >
              <div className="flex items-start gap-3">
                <div className="relative shrink-0">
                  <div className={cn(
                    'w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black',
                    conv.participants.length > 2
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-amber/20 text-amber'
                  )}>
                    {conv.title ? conv.title[0] : conv.participants[1]?.name[0]}
                  </div>
                  {conv.participants.some(p => p.isOnline) && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-card" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-bold truncate">
                      {conv.title || conv.participants.filter(p => p.userId !== 'user-1').map(p => p.name).join('، ')}
                    </span>
                    {conv.isPinned && <Pin className="w-3 h-3 text-amber shrink-0 mr-1" />}
                  </div>
                  {conv.lastMessage && (
                    <p className="text-text-tertiary text-xs truncate">{conv.lastMessage.content}</p>
                  )}
                </div>
                {conv.unreadCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-amber text-ink text-[10px] font-black flex items-center justify-center shrink-0 mt-1">
                    {conv.unreadCount}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 flex flex-col">
        {conversation ? (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="lg:hidden p-2 rounded-xl hover:bg-white/5 cursor-pointer"
              >
                <ChevronIcon className="w-4 h-4" />
              </button>
              <div className="w-10 h-10 rounded-2xl bg-amber/20 text-amber flex items-center justify-center text-sm font-black">
                {conversation.participants[1]?.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold">
                  {conversation.title || conversation.participants.filter(p => p.userId !== 'user-1').map(p => p.name).join('، ')}
                </div>
                <div className="text-[10px] text-text-tertiary">
                  {conversation.participants.some(p => p.isOnline) ? t('chat.online') : t('chat.offline')}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => {
                const isMine = msg.senderId === 'user-1';
                const showDate = i === 0 || messages[i - 1].createdAt.split(' ')[0] !== msg.createdAt.split(' ')[0];
                return (
                  <div key={msg.id}>
                    {showDate && (
                      <div className="flex justify-center my-4">
                        <span className="px-3 py-1 rounded-full bg-white/5 text-text-tertiary text-[10px]">
                          {msg.createdAt.split(' ')[0]}
                        </span>
                      </div>
                    )}
                    <div className={cn('flex', isMine ? 'justify-start' : 'justify-end')}>
                      <div
                        className={cn(
                          'max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-6',
                          isMine
                            ? 'bg-amber/15 text-white rounded-br-md'
                            : 'bg-white/5 text-white rounded-bl-md'
                        )}
                      >
                        <p>{msg.content}</p>
                        <div className={cn('flex items-center gap-1 mt-1', isMine ? 'justify-start' : 'justify-end')}>
                          <span className="text-[10px] text-text-tertiary">
                            {msg.createdAt.split(' ')[1]}
                          </span>
                          {isMine && (
                            <span className={cn(
                              'text-[10px]',
                              msg.status === 'seen' ? 'text-blue-400' : 'text-text-tertiary'
                            )}>
                              {msg.status === 'seen' ? '✓✓' : '✓'}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={t('chat.typeMessage')}
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-text-tertiary outline-none focus:border-amber/50 focus:bg-amber/5 transition-all"
                />
                <button className="w-11 h-11 rounded-2xl bg-amber text-ink font-bold flex items-center justify-center hover:bg-amber-light transition-all cursor-pointer">
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
              <p className="text-text-secondary">{t('chat.noConversations')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
