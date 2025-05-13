
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

console.log('[i18n.js] 加载配置:', i18n);

i18n
  .use(initReactI18next)
  .init({
    lng: 'zh', // 默认语言
    fallbackLng: 'en',
    resources: {
      zh: {
        common: {
          'home.title': '欢迎',
          'home.description': '这是一个多语言示例',
          'home.testButton': '测试页面'
        }
      },
      en: {
        common: {
          'home.title': 'Welcome',
          'home.description': 'This is a multilingual example',
          'home.testButton': 'Test Page'
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
