'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function TestPage() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const goToHome = () => {
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('test.title')}</h1>
        <p className="text-xl mb-8">{t('test.description')}</p>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={goToHome}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('test.homeButton')}
          </button>
          
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  );
}