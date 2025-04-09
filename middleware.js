// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";

//on change le nom de auth
export const middleware = auth;

// le middleware est exécuté sur /account
export const config = {
  matcher: ["/account"],
};
