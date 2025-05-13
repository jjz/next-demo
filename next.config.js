const { i18n } = require('./next-i18next.config');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  output: 'standalone',
  outputFileTracingIncludes: {
    '/**': ['./public/locales/**/*']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@messages': path.join(__dirname, 'public/locales')
    };
    return config;
  }
};

module.exports = nextConfig;
