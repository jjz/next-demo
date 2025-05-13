import createMiddleware from 'next-intl/middleware';

export const config = {
  // Match all paths except static files and API routes
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 