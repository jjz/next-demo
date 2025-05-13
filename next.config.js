const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingIncludes: {
    '/**': ['./public/messages/**/*']
  },
  i18n: {
    // ...other i18n configuration
  },
  experimental: {
    nextIntl: {
      timeZone: 'UTC'
    }
  }
};

module.exports = withNextIntl(nextConfig); 