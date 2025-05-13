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
  },
  // 禁用 URL 中的语言参数
  detection: {
    order: ['cookie'],
    lookupCookie: 'NEXT_LOCALE',
    caches: ['cookie']
  }
};

export default config;