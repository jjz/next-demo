'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useParams } from 'next/navigation';

export default function LocaleLayout({ 
  children
}: { 
  children: React.ReactNode
}) {
  const params = useParams();
  const locale = params.locale as string;

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
