'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Accordion } from '@/components/ui/Accordion';
import { CTASection } from '@/components/sections/CTASection';
import { useLocaleContext } from '@/providers/LocaleProvider';
import { motion } from 'framer-motion';

export default function RulesPage() {
  const { t } = useLocaleContext();

  const ruleItems = [
    {
      id: 'drivers',
      title: t('rules.driverRules'),
      icon: '🚛',
      content: (
        <ul className="space-y-2 list-none pr-0">
          {['داشتن گواهینامه معتبر و کارت هوشمند رانندگی', 'رعایت قوانین راهنمایی و رانندگی در تمام مراحل حمل', 'تحویل بار در زمان مقرر و اعلام تخلفات به پشتیبانی', 'عدم قبول بارهای خارج از محدوده تعیین‌شده', 'پاسخگویی به تماس‌های صاحب بار در ساعات کاری'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-7">
              <span className="text-amber mt-1.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'owners',
      title: t('rules.ownerRules'),
      icon: '📦',
      content: (
        <ul className="space-y-2">
          {['ثبت اطلاعات دقیق بار شامل وزن، ابعاد و نوع کالا', 'تعهد به پرداخت کرایه پس از تحویل بار', 'ارائه مدارک معتبر برای بارهای خاص (مجوزهای ویژه)', 'هماهنگی با راننده برای زمان و مکان بارگیری', 'اطلاع‌رسانی هرگونه تغییر در بار به پشتیبانی'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-7">
              <span className="text-amber mt-1.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'privacy',
      title: t('rules.privacy'),
      icon: '🔒',
      content: (
        <ul className="space-y-2">
          {['اطلاعات شخصی کاربران تنها برای فرآیند حمل و نقل استفاده می‌شود', 'اطلاعات مالی و شماره تماس‌ها نزد پلتفرم محفوظ است', 'کاربران اجازه اشتراک‌گذاری اطلاعات دیگران را ندارند', 'همراه بار متعهد به حفظ حریم خصوصی کاربران است'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-7">
              <span className="text-amber mt-1.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'payment',
      title: t('rules.payment'),
      icon: '💰',
      content: (
        <ul className="space-y-2">
          {['کرایه حمل بر اساس مسافت، وزن و نوع بار محاسبه می‌شود', 'پرداخت از طریق درگاه امن همراه بار انجام می‌شود', 'کارمزد پلتفرم از مبلغ کرایه کسر می‌شود', 'تسویه حساب با رانندگان در کمتر از ۲۴ ساعت'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-7">
              <span className="text-amber mt-1.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'responsibilities',
      title: t('rules.responsibilities'),
      icon: '🛡️',
      content: (
        <ul className="space-y-2">
          {['همراه بار مسئولیت تأخیرهای ناشی از ترافیک یا شرایط جوی را ندارد', 'راننده مسئول سلامت و صحت بار در طول مسیر است', 'صاحب بار مسئول بسته‌بندی صحیح و ایمن کالا است', 'همراه بار در صورت تخلف، حساب کاربری را مسدود خواهد کرد'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-7">
              <span className="text-amber mt-1.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'terms',
      title: t('rules.terms'),
      icon: '📄',
      content: (
        <ul className="space-y-2">
          {['استفاده از پلتفرم به معنای پذیرش تمام قوانین است', 'همراه بار حق تغییر قوانین را با اطلاع قبلی دارد', 'ارتباطات مالی و حقوقی از طریق پلتفرم ثبت می‌شود', 'حل اختلافات از طریق مراجع قانونی انجام می‌شود'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm leading-7">
              <span className="text-amber mt-1.5 shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
  ];

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
                {t('rules.badge')}
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-black tracking-tight mb-4">
                {t('rules.title')}
              </h1>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">{t('rules.description')}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pb-20">
          <div className="container max-w-3xl mx-auto">
            <Accordion items={ruleItems} />
          </div>
        </section>

        <CTASection
          title={t('app.description')}
          description={`${t('rules.description')} - ${t('app.name')}`}
          buttonText={t('header.register')}
        />
      </main>
      <Footer />
    </>
  );
}
