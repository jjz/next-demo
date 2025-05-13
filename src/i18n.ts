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
    // Use fetch API (compatible with Edge Runtime) to get translation files
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL || ''}/messages/${locale}.json`);
    if (!response.ok) throw new Error(`Failed to load messages for ${locale}`);
    
    const messages = await response.json();
    return {
      locale: locale as Locale,
      messages
    };
  } catch (error) {
    console.error(`Error loading messages for ${locale}:`, error);
    
    // Try direct import as fallback
    try {
      // Using @messages path alias
      return {
        locale: locale as Locale,
        messages: (await import(`@messages/${locale}.json`)).default
      };
    } catch (importError) {
      console.error(`Error importing messages for ${locale}:`, importError);
      
      // Final fallback: use the default locale from config
      try {
        const defaultLocale = config.defaultLocale;
        return {
          locale: locale as Locale, 
          messages: (await import(`@messages/${defaultLocale}.json`)).default
        };
      } catch (finalError) {
        console.error('Failed to load any messages', finalError);
        return {
          locale: locale as Locale,
          messages: {} // Empty object as last resort
        };
      }
    }
  }
}); 