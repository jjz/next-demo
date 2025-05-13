import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Load configuration from @messages/config.json
import config from '@messages/config.json';
export const locales = config.supportedLocales as readonly string[];
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate the requested locale is supported
  if (!locales.includes(locale as Locale)) notFound();

  try {

    const messages = (await import(`@messages/${locale}.json`)).default;
    return {
      locale: locale as Locale,
      messages,
      timeZone: 'UTC'
    };
  } catch (error) {
    console.error(`Failed to load messages for ${locale}, trying default locale`);


    try {
      const defaultLocale = config.defaultLocale;
      const messages = (await import(`@messages/${defaultLocale}.json`)).default;

      return {
        locale: locale as Locale,
        messages,
        timeZone: 'UTC'
      };
    } catch (fallbackError) {
      console.error('Failed to load any messages');
      return {
        locale: locale as Locale,
        messages: {},
        timeZone: 'UTC'
      };
    }
  }
}); 