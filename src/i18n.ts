import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 导入翻译文件
import zhMessages from '../public/messages/zh.json';
import enMessages from '../public/messages/en.json';
import config from '../public/messages/config.json';

console.log('[i18n.js] 加载配置:', i18n);

i18n
  .use(initReactI18next)
  .init({
    lng: config.defaultLocale || 'zh', // 从配置文件读取默认语言
    fallbackLng: 'en',
    resources: {
      zh: {
        common: zhMessages
      },
      en: {
        common: enMessages
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
