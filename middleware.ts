import {NextResponse} from 'next/server'

export function middleware(request:Request) {
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/about/:path*', '/tours/:path*']
} 


//the middleware catches requests to the /about and /tours paths (and their subpaths) and redirects the user to the root homepage (/).
//middleware in Next.js is a powerful tool for handling requests before they reach your application logic. It enables you to:

// Control routing and access.
// Handle security and authentication tasks.
// Redirect or rewrite URLs.
// Provide a consistent user experience by centralizing logic like redirection, access control, and more.