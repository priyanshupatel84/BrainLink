import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)', '/api/uploadthing(.*)'])

export default clerkMiddleware(async (auth, request) => {

  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|api|sign-in|sign-up|favicon.ico|public|/).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}