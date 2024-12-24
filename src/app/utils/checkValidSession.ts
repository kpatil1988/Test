import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY as string;
const admin_username = process.env.ADMIN_USERNAME as string;
const admin_clientId = process.env.ADMIN_CLIENT_ID as string;
const admin_secret = process.env.ADMIN_CLIENT_SECRET as string;

export const checkValidSession = () => {
    try {
        const cookieStore = cookies();
        const auth = cookieStore.get('auth');
        if (!auth?.value) {
            return NextResponse.json({ error: 'No auth cookie found' }, { status: 401 });
        }
        
        let cookiePayload;
        cookiePayload = JSON.parse(auth?.value);
        try {
            jwt.verify(cookiePayload.token, SECRET_KEY);
            return NextResponse.json(cookiePayload);
        } catch (error) {
            const err_msg = 'Invalid or expired token';
            console.error(err_msg);
            return NextResponse.json({ error: err_msg}, { status: 401 });
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
}