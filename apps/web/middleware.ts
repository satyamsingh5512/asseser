import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Use refresh token cookie as the primary indicator of authentication
  const hasRefreshToken = request.cookies.has('refresh_token');
  const path = request.nextUrl.pathname;
  
  const hostname = request.headers.get('host') || '';
  
  // Add headers for tenant resolution
  let orgSlug = '';
  let customDomain = '';
  
  // If hostname is {slug}.assessos.com
  if (hostname.endsWith('.assessos.com') && hostname !== 'assessos.com' && hostname !== 'api.assessos.com') {
    orgSlug = hostname.replace('.assessos.com', '');
  } else if (!hostname.includes('localhost') && hostname !== 'assessos.com' && !hostname.endsWith('.assessos.com')) {
    customDomain = hostname;
  }
  
  const requestHeaders = new Headers(request.headers);
  if (orgSlug) {
    requestHeaders.set('x-org-slug', orgSlug);
  }
  if (customDomain) {
    requestHeaders.set('x-custom-domain', customDomain);
  }

  const isAuthRoute = path.startsWith('/login') || path.startsWith('/register') || path.startsWith('/forgot-password');
  
  // Dashboard and admin routes
  const isProtectedRoute = 
    path.startsWith('/dashboard') || 
    path.startsWith('/admin') || 
    path.startsWith('/settings') || 
    path.startsWith('/tests') || 
    path.startsWith('/batches') || 
    path.startsWith('/candidates') || 
    path.startsWith('/analytics') ||
    path.startsWith('/proctor');

  if (isProtectedRoute && !hasRefreshToken) {
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', path);
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && hasRefreshToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)',
  ],
};