export interface User {
    isSubscribed: boolean;
    isEmailVerified: boolean;
    currentCounter: number;
    maxAllowedCounter: number;
}

export interface CookiePayload {
    user: User;
    token: string;
}