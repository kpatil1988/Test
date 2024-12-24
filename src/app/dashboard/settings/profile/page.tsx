import { checkValidSession } from "@/app/utils/checkValidSession";
import ProfileForm from "@/components/App_old/ProfileForm";
import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends JwtPayload {
    userId: number;
    firstName: string;
    lastName: string;
    profilePicUrl: string;
}

export default async function SettingsProfile() {
    const SESSION = await checkValidSession().json();
    const TOKEN = SESSION.token;
    const API_URL = `${process.env.EXPRESS_API_URL}/users/profile`;

    const RESPONSE = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    });

    const DATA = await RESPONSE.json();
    const SECRET_KEY = process.env.SECRET_KEY as string;
    const USER_DATA = jwt.verify(TOKEN, SECRET_KEY) as CustomJwtPayload;
    const PROFILE_PIC_URL = USER_DATA.profilePicUrl;

    return (
        <>
            <div className="items-center justify-between">
                <ProfileForm 
                    form_data={DATA} 
                    profilePicUrl={PROFILE_PIC_URL} 
                    token={TOKEN} 
                    api_url={API_URL} 
                />
            </div>
        </>
    );
}
