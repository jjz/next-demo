'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MessagesProvider from '../NextIntlClientProvider';
import { useCookies } from 'next-client-cookies';

function TestPage() {
  const router = useRouter();
  const t = useTranslations('test.title');

  const goToHome = () => {
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
        <p className="text-xl mb-8">{t('description')}</p>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={goToHome}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('homeButton')}
          </button>
          
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  );
}

export default function TestPageWithMessages() {
  const cookies = useCookies();
  const locale = cookies.get('NEXT_LOCALE');

  return (
    <MessagesProvider locale={locale}>
      <TestPage />
    </MessagesProvider>
  );
}