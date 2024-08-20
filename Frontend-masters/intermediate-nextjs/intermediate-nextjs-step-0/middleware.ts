import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { COOKIE_NAME } from './utils/constants'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/dashboard') {
        
        if (!request.cookies.has(COOKIE_NAME)) {
            return NextResponse.redirect(new URL('/signin', request.url))
            // Se não estiver autenticado vai para a página de login.
        }
    }

    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/'],

}

// Fazendo aqui e redirecionando para o dashboard não preciso fazer o page.tsx, que seria basicamente só um redirect para o dashboard. 