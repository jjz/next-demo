import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    // localeDetection: true
  },
  output: 'standalone',
  outputFileTracingIncludes: {
    '/**': ['./public/messages/**/*']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@messages': path.join(__dirname, 'public/messages')
    };
    return config;
  }
};

export default nextConfig;