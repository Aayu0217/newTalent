// middleware.js

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Create middleware using the defined routing
export default createMiddleware(routing);

// Configuration for the middleware
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hi|en)/:path*'],
};
