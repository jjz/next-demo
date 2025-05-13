'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { CookiesProvider } from 'next-client-cookies/server';
import { NextIntlClientProvider } from 'next-intl';
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <CookiesProvider>
          <IntlProvider>
            {children}
          </IntlProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}

function IntlProvider({ children }: { children: React.ReactNode }) {
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