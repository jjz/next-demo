'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from 'react';

export default function ClientIntlProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const cookies = useCookies();
  const [locale, setLocale] = useState('en');
  
  useEffect(() => {
    const storedLocale = cookies.get('NEXT_LOCALE');
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, [cookies]);
  
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
