// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';

const supportedLocales = ['en', 'fa', 'de'];

function getLocale(request: NextRequest): string {
  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') || '',
    },
  });

  const locale = negotiator.language(supportedLocales);
  return locale || 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === '/' ||
    pathname === '' 
  ) {
    const locale = getLocale(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], 
};


