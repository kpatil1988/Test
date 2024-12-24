import { checkValidSession } from "@/app/utils/checkValidSession";
import MoodPageTabs from "@/components/App_old/MoodsPageTabs";

interface MoodData {
    id: number;
    moodName: string;
    moodType: string;
}

export default async function MoodsHome() {
    try {
        const SESSION_RESPONSE = await checkValidSession();
        const SESSION = await SESSION_RESPONSE.json();
        const { token: TOKEN, user: USER } = SESSION;
        const { currentCounter: CURRENT_COUNTER, maxAllowedCounter: MAX_ALLOWED_COUNTER } = USER;

        const MOOD_API_URL = `${process.env.EXPRESS_API_URL}/moods`;
        let RESPONSE = await fetch(MOOD_API_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        if (!RESPONSE.ok) {
            throw new Error("Failed to fetch moods");
        }
        const MOOD_DATA: MoodData[] = await RESPONSE.json();
        const MOOD_NAMES_ARRAY: string[] = MOOD_DATA.map((item: MoodData) => item.moodName);

        const POST_API_URL_MOODS = `${process.env.EXPRESS_API_URL}/users/mood`;
        const INSTANT_ALLOWED = CURRENT_COUNTER < MAX_ALLOWED_COUNTER;

        const DAILY_EXERCISES_URL = `${process.env.EXPRESS_API_URL}/users/exercises/daily`;
        RESPONSE = await fetch(DAILY_EXERCISES_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        if (!RESPONSE.ok) {
            throw new Error("Failed to fetch daily exercise");
        }
        const DAILY_EXERCISE_DATA = await RESPONSE.json();
        console.log(DAILY_EXERCISE_DATA)
        return (
            <>
                <div className="items-center justify-center space-y-8">
                    <MoodPageTabs 
                        token={TOKEN} 
                        api_url={POST_API_URL_MOODS} 
                        master_moods={MOOD_NAMES_ARRAY} 
                        instant_allowed={INSTANT_ALLOWED}
                        daily_exercise_data={DAILY_EXERCISE_DATA}
                    />
                </div>
            </>
        );
    } catch (error) {
        // console.error("Error loading mood data:", error); // Add log here
        return (
            <>
                <div>Error loading data. Please try again later.</div>
            </>
        );
    }
}
