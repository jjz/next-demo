'use client';

import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';
import '../i18n'; // 导入 i18n 配置

export default function ClientIntlProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const cookies = useCookies();
  
  useEffect(() => {
    // console.log('[ClientIntlProvider] 初始化，当前 cookies:', cookies.getAll());
  }, [cookies]);
  
  return <>{children}</>;
}
