import createMiddleware from 'next-intl/middleware';
import i18nConfig from '@messages/config.json';

export default createMiddleware({
  // Supported locales from config
  locales: i18nConfig.supportedLocales,
  // Default locale from config
  defaultLocale: i18nConfig.defaultLocale,
  // Locale prefix setting from config
  localePrefix: i18nConfig.localePrefix,
  // Locale detection setting from config
  localeDetection: i18nConfig.localeDetection
});

export const config = {
  // Match all paths except static files and API routes
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 