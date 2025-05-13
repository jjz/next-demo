'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const t = useTranslations('language');
  const locale = useLocale();
  
  // 获取另一种语言
  const otherLocale = locale === 'zh' ? 'en' : 'zh';

  return (
    <div className="my-4 flex justify-center">
      <Link
        href="/"
        locale={otherLocale}
        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        {t('switch')}
      </Link>
    </div>
  );
} 