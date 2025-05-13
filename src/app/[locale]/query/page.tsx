'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function QueryPage() {
  const t = useTranslations('query');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里只是模拟查询结果，实际应用中可能需要从API获取数据
    const mockResults = [
      `${query} - 结果1`,
      `${query} - 结果2`,
      `${query} - 结果3`,
    ];
    setResults(query ? mockResults : []);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-6">{t('title')}</h1>
        <p className="text-center mb-8">{t('description')}</p>
        
        <form onSubmit={handleSearch} className="flex flex-col items-center mb-8">
          <div className="flex w-full max-w-md mb-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
            >
              {t('searchButton')}
            </button>
          </div>
        </form>
        
        {results.length > 0 && (
          <div className="w-full max-w-md mb-8">
            <h2 className="text-xl font-semibold mb-2">查询结果：</h2>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="p-3 bg-gray-100 rounded-md">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            {t('homeLink')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  );
} 