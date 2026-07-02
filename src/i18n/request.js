import { locales, defaultLocale } from './config.js';

export function getLocale(request) {
  // Check URL pathname for locale
  const pathname = request.nextUrl.pathname;
  
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale;
    }
  }
  
  return defaultLocale;
}

export async function getMessages(locale) {
  try {
    const messages = await import(`../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    const defaultMessages = await import(`../messages/${defaultLocale}.json`);
    return defaultMessages.default;
  }
}
