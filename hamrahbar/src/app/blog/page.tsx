'use client';

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { blogPosts } from '@/data/blog-posts';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const { t, isRtl } = useLocaleContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-60 pointer-events-none"
            style={{ background: 'var(--gradient-hero)' }}
          />
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex px-3 py-1.5 rounded-full border border-amber/30 bg-amber/10 text-amber text-xs font-bold mb-6">
                {t('nav.blog')}
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-black tracking-tight mb-4">
                {t('nav.blog')}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">{t('services.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            {blogPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-text-secondary">{t('common.noResults')}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {blogPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-amber/30 transition-all duration-300"
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-amber/[0.03] to-blue-500/[0.03] flex items-center justify-center">
                      <div className="text-4xl opacity-20">📄</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-text-tertiary text-xs mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} دقیقه
                        </span>
                      </div>
                      <h3 className="font-extrabold text-lg mb-2 group-hover:text-amber transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-text-secondary text-sm leading-6 mb-4">{post.summary}</p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-amber text-xs font-bold hover:gap-2 transition-all"
                      >
                        {t('common.readMore')}
                        <Arrow className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
