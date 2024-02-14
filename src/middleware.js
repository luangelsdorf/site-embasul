import { NextResponse } from 'next/server';
import fetchAPI from './utils/fetch';

export async function middleware(request) {
  if (request.nextUrl.pathname === '/contato') {
    const userAgent = request.headers.get('User-Agent');
    if (userAgent.includes('iPhone') || userAgent.includes('Android')) {
      const { whatsapp } = await fetchAPI('footer');
      if (whatsapp) {
        return NextResponse.redirect(`https://wa.me/${whatsapp}`);
      }
    }
  }
  return NextResponse.next();
}