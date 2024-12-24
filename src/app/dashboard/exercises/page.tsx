import { checkValidSession } from "@/app/utils/checkValidSession";
import AffirmationCatcher from "@/components/App/InAppExercises/AffirmationCatcher";
import BouncingBalls from "@/components/App/InAppExercises/BouncingBalls";
import Breathe from "@/components/App/InAppExercises/Breathe";
import FlipTheStory from "@/components/App/InAppExercises/FlipTheStory";
import VirtualBubbleWrap from "@/components/App/InAppExercises/VirtualBubbleWrap";
import ZenScribbler from "@/components/App/InAppExercises/ZenScribbler";

export default async function ExercisesHome() {
    let session = await checkValidSession().json();
    console.log(session);
    return (
        <>
            <div className="items-centerjustify-center space-y-8 top-20">
                <AffirmationCatcher />
            </div>
        </>
    )
}