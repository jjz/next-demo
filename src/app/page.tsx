'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const goToTestPage = () => {
    router.push('/test');
  };

  console.log('[HomePage] 渲染，翻译函数:', typeof t === 'function' ? '已加载' : '未加载');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t('home.title')}</h1>
        <p className="text-xl mb-8">{t('home.description')}</p>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={goToTestPage}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('home.testButton')}
          </button>
        </div>
      </div>
    </main>
  );
}
