import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// 支持的语言列表
export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({locale}) => {
  // 验证提供的语言是否被支持
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale: locale as Locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
}); 