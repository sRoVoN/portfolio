import fa from "@/messages/fa.json";
import en from "@/messages/en.json";


export const getMessages = async (locale: string) => {
  switch (locale) {
    case 'fa':
      return (await import('@/messages/fa.json')).default;
    case 'en':
      return (await import('@/messages/en.json')).default;
    case 'de':
      return (await import('@/messages/de.json')).default;
    default:
      return (await import('@/messages/en.json')).default;
  }
};
