import type { InitOptions } from 'i18next';
import path from 'path';

const config: InitOptions = {
  debug: process.env.NODE_ENV === 'development',
  lng: 'en', // 默认语言
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh'],
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      common: require('../public/messages/en.json')
    },
    zh: {
      common: require('../public/messages/zh.json')
    }
  }
};

export default config;