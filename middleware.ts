import createMiddleware from 'next-intl/middleware';
import {locales} from './src/i18n';

export default createMiddleware({
  // 支持的语言列表
  locales,
  // 默认语言
  defaultLocale: 'zh',
  // 本地化路径策略
  localePrefix: 'as-needed'
});

export const config = {
  // 匹配所有除了静态文件和API路由以外的路由
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 