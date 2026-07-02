import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config.js';

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  // Skip proxy for static assets (images, fonts, etc.)
  if (pathname.includes('.') && !pathname.endsWith('.html')) {
    return NextResponse.next();
  }

  // Redirect /en to / for default locale
  if (pathname === '/en' || pathname === '/en/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If pathname is /, rewrite to /en internally to use the [locale] route
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/en', request.url));
  }

  // If pathname is /about, rewrite to /en/about internally to use the [locale] route
  if (pathname === '/about') {
    return NextResponse.rewrite(new URL('/en/about', request.url));
  }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // Continue to the route handler if locale is present
  return NextResponse.next();
}

export const config = {
  // Match only internationalized pathnames, exclude static assets
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)'],
};
