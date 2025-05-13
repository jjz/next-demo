'use client';

import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
  const router = useRouter();
  const cookies = useCookies();
  const currentLocale = cookies.get('NEXT_LOCALE') || 'en';

  const content = {
    en: {
      title: 'Welcome to our Multilingual Site',
      description: 'This is a simple demo of a Next.js app with language switching capabilities',
      testButton: 'Go to Test Page'
    },
    zh: {
      title: '欢迎访问我们的多语言网站',
      description: '这是一个带有语言切换功能的 Next.js 应用程序的简单演示',
      testButton: '前往测试页面'
    }
  };

  const t = content[currentLocale as 'en' | 'zh'] || content.en;
  
  const goToTestPage = () => {
    router.push('/test');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
        <p className="text-xl mb-8">{t.description}</p>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={goToTestPage}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t.testButton}
          </button>
          
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  );
} 