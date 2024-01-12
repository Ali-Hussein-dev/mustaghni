import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
// Block Austria, prefer Germany
const BLOCKED_COUNTRY = 'isr'

// Limit middleware pathname config
export const config = {
    matcher: ['/', '/(en|ar)/:path*'],
}

export function middleware(req: NextRequest) {
    // Extract country
    const country = req.geo?.country ?? 'US'
    console.log("COUNTRY", country)

    // Specify the correct pathname
    if (country === BLOCKED_COUNTRY) {
        req.nextUrl.pathname = '/blocked'
    }
    // else {
    //     req.nextUrl.pathname = `/${country}`
    // }
    // Rewrite to URL
    return NextResponse.rewrite(req.nextUrl)
}

export default createMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'en',
});