'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useParams } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';

export default function LocaleLayout({ 
  children
}: { 
  children: React.ReactNode
}) {
  const params = useParams();
  // Get locale from params or use 'en' as fallback
  const paramLocale = params.locale as string;
  const cookies = useCookies();
  
  // Get the user's preferred language from cookie or use the param locale
  const locale = cookies.get('NEXT_LOCALE') || paramLocale || 'en';
  
  // Save the current locale to cookie
  useEffect(() => {
    cookies.set('NEXT_LOCALE', locale);
  }, [locale, cookies]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{}}
      onError={() => {}}
    >
      {children}
    </NextIntlClientProvider>
  );
}
