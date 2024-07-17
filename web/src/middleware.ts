import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, ) {
  const token = cookies().get("token")?.value;

  const loginURL = new URL("/", request.url);
  const privateURL = new URL("/app", request.url);

  const currentPath = request.nextUrl.pathname;

  if(!token) {
    if(currentPath === "/" || currentPath === "/register") {
      return NextResponse.next();
    }

    return NextResponse.redirect(loginURL);
  }

  if(currentPath === "/" || currentPath === "/register") {
    return NextResponse.redirect(privateURL);
  }
}

export const config = {
  matcher: [
    "/",
    "/app", 
    "/register",
    "/app/(.*)",
  ]
}