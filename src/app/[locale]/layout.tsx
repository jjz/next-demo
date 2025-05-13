'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useParams } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from 'react';
import { getRequestConfig } from 'next-intl/server';

export default function LocaleLayout({ 
  children
}: { 
  children: React.ReactNode
}) {
  const params = useParams();
  const paramLocale = params.locale as string;
  const cookies = useCookies();
  
  // Get the user's preferred language from cookie or use the param locale or browser language
  const locale = cookies.get('NEXT_LOCALE') || paramLocale || 'en';
  
  // Save the current locale to cookie
  useEffect(() => {
    cookies.set('NEXT_LOCALE', locale);
  }, [locale, cookies]);

  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="UTC"
      onError={(error) => {
        console.error('NextIntl error:', error);
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
