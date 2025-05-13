const createNextIntlPlugin = require('next-intl/plugin');


const i18nConfig = {
  defaultLocale: "en",
  supportedLocales: ["zh", "en"],
  localePrefix: "never", 
  localeDetection: true
};


const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingIncludes: {
    '/**': ['./public/messages/**/*']
  },
  // 移除空的i18n配置
  experimental: {
    nextIntl: {
      timeZone: 'UTC'
    }
  },
  // 将i18n配置暴露给客户端
  publicRuntimeConfig: {
    i18n: i18nConfig
  }
};

module.exports = withNextIntl(nextConfig); 