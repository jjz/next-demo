'use client';

import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useLocale } from 'next-intl';


const supportedLocales = ['en', 'zh'];

export default function LanguageSwitcher() {
  const cookies = useCookies();
  const router = useRouter();
  const currentLocale = useLocale();
  
  const handleLanguageChange = (locale: string) => {
    // Store the selected language in cookie
    cookies.set('NEXT_LOCALE', locale);
    // Refresh the current page to apply the new language
    router.refresh();
  };

  return (
    <div className="flex gap-2 mt-4">
      {supportedLocales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`px-3 py-1 rounded ${
            currentLocale === locale 
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