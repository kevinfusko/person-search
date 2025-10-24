import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Public routes that don't require authentication
  const publicRoutes = [
    "/auth/signin",
    "/about",
    "/auth-setup",
    "/security",
    "/github",
  ]
  
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))
  
  // Allow public routes and API routes to pass through
  if (isPublicRoute || pathname.startsWith("/api/auth")) {
    return NextResponse.next()
  }

  // For protected routes, check for session cookie
  const sessionCookie = request.cookies.get("authjs.session-token") || 
                        request.cookies.get("__Secure-authjs.session-token")
  
  // If no session cookie, redirect to signin
  if (!sessionCookie) {
    const signInUrl = new URL("/auth/signin", request.url)
    signInUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
