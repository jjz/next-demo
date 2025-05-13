import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

//throw new Error('TESTING I18N LOAD');
// 直接导入配置，避免getConfig()导致的客户端错误
import config from '@messages/config.json';

// 添加日志记录当前使用的配置
console.log('[i18n.ts] 加载配置:', {
  defaultLocale: config.defaultLocale,
  supportedLocales: config.supportedLocales
});

export const locales = config.supportedLocales as readonly string[];
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  console.log(`[i18n.ts] 接收到locale请求: ${locale}`);
  
  // Validate the requested locale is supported
  if (!locales.includes(locale as Locale)) {
    console.log(`[i18n.ts] 不支持的locale: ${locale}`);
    notFound();
  }

  try {
    console.log(`[i18n.ts] 尝试加载语言文件: @messages/${locale}.json`);
    const messages = (await import(`@messages/${locale}.json`)).default;
    console.log(`[i18n.ts] 成功加载语言文件，包含键值:`, Object.keys(messages));
    
    return {
      locale: locale as Locale,
      messages,
      timeZone: 'UTC'
    };
  } catch (error) {
    console.error(`[i18n.ts] 加载语言文件失败: ${locale}`, error);
    console.log(`[i18n.ts] 尝试加载默认语言文件`);

    try {
      const defaultLocale = config.defaultLocale;
      console.log(`[i18n.ts] 尝试加载默认语言: @messages/${defaultLocale}.json`);
      const messages = (await import(`@messages/${defaultLocale}.json`)).default;
      console.log(`[i18n.ts] 成功加载默认语言文件，包含键值:`, Object.keys(messages));

      return {
        locale: locale as Locale,
        messages,
        timeZone: 'UTC'
      };
    } catch (fallbackError) {
      console.error('[i18n.ts] 无法加载任何语言文件', fallbackError);
      return {
        locale: locale as Locale,
        messages: {}, // Empty object as last resort
        timeZone: 'UTC'
      };
    }
  }
}); 