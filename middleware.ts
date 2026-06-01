import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Returning visitors keep their preference via cookie
  const cookie = request.cookies.get('NEXT_LOCALE')?.value
  if (cookie && locales.includes(cookie)) return cookie

  // New visitors always get English (default)
  // Users can switch to Chinese via the language switcher
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect to default locale
  const locale = getLocale(request)
  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  )
  response.cookies.set('NEXT_LOCALE', locale, { path: '/', maxAge: 86400 * 365 })
  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}