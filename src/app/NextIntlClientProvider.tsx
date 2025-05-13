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
  
  // Load translation files from messages directory
  useEffect(() => {
    const loadMessages = async () => {
      try {
        // Get translation files from public/messages directory
        const response = await fetch(`/messages/${locale}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load messages for locale: ${locale}`);
        }
        const messagesData = await response.json();
        setMessages(messagesData);
        
        // Save the current locale to cookie for persistence
        cookies.set('NEXT_LOCALE', locale);
      } catch (error) {
        console.error(`Failed to load messages for locale: ${locale}`, error);
        
        // Try loading English as fallback
        try {
          const fallbackResponse = await fetch('/messages/en.json');
          if (!fallbackResponse.ok) {
            throw new Error('Failed to load fallback messages');
          }
          const fallbackMessages = await fallbackResponse.json();
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