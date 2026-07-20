import { type NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = ["/login", "/register"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = req.cookies.has("access_token");

  if (isLoggedIn && AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isLoggedIn && !AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
