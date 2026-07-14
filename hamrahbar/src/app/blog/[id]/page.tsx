'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { getBlogPostById } from '@/data/blog-posts';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

export default function BlogPostPage() {
  const params = useParams();
  const { t, isRtl } = useLocaleContext();
  const post = getBlogPostById(params.id as string);
  const BackArrow = isRtl ? ChevronRight : ChevronLeft;

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <article className="section-padding">
          <div className="container max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-1 text-text-secondary text-sm hover:text-amber transition-colors mb-8">
                <BackArrow className="w-4 h-4" />
                {t('common.back')}
              </Link>

              <div className="aspect-[16/9] rounded-3xl bg-gradient-to-br from-amber/[0.05] to-blue-500/[0.05] border border-border flex items-center justify-center mb-8">
                <span className="text-6xl opacity-20">📄</span>
              </div>

              <div className="flex items-center gap-4 text-text-tertiary text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} دقیقه
                </span>
              </div>

              <h1 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-tertiary text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-text-secondary text-sm leading-8 space-y-4">
                {post.content.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
