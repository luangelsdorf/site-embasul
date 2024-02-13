import { NextResponse } from 'next/server';
import { apiURL } from './utils/env';

export function middleware(request) {
  if (request.nextUrl.pathname.endsWith('contato.js')) {
    const userAgent = request.headers.get('User-Agent');
    if (userAgent.includes('iPhone') || userAgent.includes('Android')) {
      /* NextResponse.redirect() */
    }
  }
}