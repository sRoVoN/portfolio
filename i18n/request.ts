// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

console.log('✅ i18n config loaded');

export default getRequestConfig(async ({locale}) => {
  const finalLocale = locale ?? 'fa'; // fallback

  return {
    messages: (await import(`../messages/${finalLocale}.json`)).default,
    locale: finalLocale
  };
});