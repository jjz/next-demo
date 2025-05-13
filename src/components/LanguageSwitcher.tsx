'use client';

import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useTranslation } from 'react-i18next';

const supportedLocales = ['en', 'zh'];

export default function LanguageSwitcher() {
  const cookies = useCookies();
  const router = useRouter();
  const { i18n } = useTranslation();
  
  const handleLanguageChange = (locale: string) => {
    // 更新 i18n 语言
    i18n.changeLanguage(locale);
    // 存储语言选择到 cookie
    cookies.set('NEXT_LOCALE', locale);
    // 刷新页面以应用新语言
    router.refresh();
  };

  return (
    <div className="flex gap-2 mt-4">
      {supportedLocales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`px-3 py-1 rounded ${
            i18n.language === locale 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {locale === 'en' ? 'English' : '中文'}
        </button>
      ))}
    </div>
  );
} 