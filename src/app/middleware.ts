import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { CookiePayload } from '@/types/user';

const SECRET_KEY = process.env.SECRET_KEY as string;

export async function middleware(req: NextRequest) {
    const cookieStore = cookies();
    const auth = cookieStore.get('auth');
    if (!auth?.value) {
        return NextResponse.json({ error: 'No auth cookie found' }, { status: 401 });
    }
    
    let cookiePayload: CookiePayload;
    try {
        cookiePayload = JSON.parse(auth.value);
        jwt.verify(cookiePayload.token, SECRET_KEY); 
        req.headers.set('x-cookie-payload', JSON.stringify(cookiePayload));
        return NextResponse.next();
    } catch (error) {
        console.error('Invalid or expired token:', error);
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
}

export const config = {
    matcher: [
        '/dashboard/moods',
        '/exercises'
    ],
};
