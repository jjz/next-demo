'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-6">{t('title')}</h1>
        <p className="text-center mb-8">{t('description')}</p>
        <div className="flex flex-col items-center">
          <Link
            href="/query"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('queryLink')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  );
} 