'use client';

import { useParams } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';

export default function LocaleLayout({ 
  children
}: { 
  children: React.ReactNode
}) {
  const params = useParams();
  const paramLocale = params.locale as string;
  const cookies = useCookies();
  
  // 将URL参数中的locale同步到cookie
  useEffect(() => {
    if (paramLocale) {
      cookies.set('NEXT_LOCALE', paramLocale);
    }
  }, [paramLocale, cookies]);

  return <>{children}</>;
}
