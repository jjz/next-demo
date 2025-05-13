'use client';

import { ReactNode } from 'react';
import { useCookies } from 'next-client-cookies';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

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
  
  // Load messages based on locale
  useEffect(() => {
    const loadMessages = async () => {
      try {
        // Try to load messages for the current locale
        const messages = (await import(`@/messages/${locale}.json`)).default;
        setMessages(messages);
        
        // Save the current locale to cookie for persistence
        cookies.set('NEXT_LOCALE', locale);
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
        // Fallback to English if loading fails
        try {
          const fallbackMessages = (await import(`@/messages/en.json`)).default;
          setMessages(fallbackMessages);
        } catch (e) {
          console.error('Failed to load fallback messages', e);
        }
      }
    };
    
    loadMessages();
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