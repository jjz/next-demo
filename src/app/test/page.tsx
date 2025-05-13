'use client';

import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function TestPage() {
  const router = useRouter();
  const cookies = useCookies();
  const currentLocale = cookies.get('NEXT_LOCALE') || 'en';

  const content = {
    en: {
      title: 'Test Page',
      description: 'This is a test page to demonstrate navigation and language persistence.',
      homeButton: 'Back to Home'
    },
    zh: {
      title: '测试页面',
      description: '这是一个演示导航和语言持久性的测试页面。',
      homeButton: '返回首页'
    }
  };

  const t = content[currentLocale as 'en' | 'zh'] || content.en;
  
  const goToHome = () => {
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
        <p className="text-xl mb-8">{t.description}</p>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={goToHome}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t.homeButton}
          </button>
          
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  );
}