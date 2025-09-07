import { getTranslations } from 'next-intl/server';

export async function getAllTranslations(locale: string, namespaces: string[]) {
  const translations = {} as Record<string, any>;
  for (const ns of namespaces) {
    translations[ns] = await getTranslations({ locale, namespace: ns });
  }
  return translations;
}
