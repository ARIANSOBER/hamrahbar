'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatLayout } from '@/components/chat/ChatLayout';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';

export default function ChatPage() {
  const { t } = useLocaleContext();

  return (
    <>
      <Header />
      <main className="pt-28 pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-2xl font-black">{t('chat.title')}</h1>
          </motion.div>
          <ChatLayout />
        </div>
      </main>
      <Footer />
    </>
  );
}
