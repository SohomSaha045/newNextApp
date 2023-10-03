import {NextResponse} from'next/server';
export default function middleware(request){
   if(request.nextUrl.pathname !='/about')
   return NextResponse.redirect(new URL('/about',request.url))
   
} 
export const config={
    matcher:"/login/:path*"
}