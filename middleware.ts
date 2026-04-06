import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const preferred = request.cookies.get("preferred_lang")?.value;

  if (preferred === "es") {
    return NextResponse.redirect(new URL("/es", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
