'use client';

import { ReactNode } from 'react';
import { useCookies } from 'next-client-cookies';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

// 预先导入翻译文件，避免动态导入路径问题
import enMessages from '@/messages/en.json';
import zhMessages from '@/messages/zh.json';

// 定义消息映射的类型
type MessagesMap = {
  [key: string]: typeof enMessages;
};

const messagesMap: MessagesMap = {
  'en': enMessages,
  'zh': zhMessages
};

interface MessagesProviderProps {
  children: ReactNode;
  locale?: string;
}

export default function MessagesProvider({ 
  children,
  locale: propLocale
}: MessagesProviderProps) {
  const cookies = useCookies();
  const [messages, setMessages] = useState({});
  
  // Get locale from props, cookie, or use 'en' as default
  const locale = propLocale || cookies.get('NEXT_LOCALE') || 'en';
  
  // 使用预先导入的翻译文件
  useEffect(() => {
    try {
      // 从预先导入的映射中获取翻译
      const localeMessages = messagesMap[locale] || messagesMap['en'];
      setMessages(localeMessages);
      
      // Save the current locale to cookie for persistence
      cookies.set('NEXT_LOCALE', locale);
    } catch (error) {
      console.error(`Failed to load messages for locale: ${locale}`, error);
      // Fallback to English
      setMessages(messagesMap['en']);
    }
  }, [locale, cookies]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      onError={(error) => {
        console.error('NextIntl error:', error);
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
} 