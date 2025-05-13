import createMiddleware from 'next-intl/middleware';
import {locales} from './src/i18n';

export default createMiddleware({
  // Supported locales
  locales,
  // Set default locale to English, but will be overridden by system detection
  defaultLocale: 'en',
  // Don't include locale in URL
  localePrefix: 'never',
  // Use cookie for language preference and enable system detection
  localeDetection: true
});

export const config = {
  // Match all paths except static files and API routes
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 