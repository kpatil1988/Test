import { checkValidSession } from "@/app/utils/checkValidSession";
import SubscriptionPage from "@/components/App_old/SubscriptionPage";
import Card from "@/components/Card";

const express_url = process.env.EXPRESS_API_URL;
const api_url = express_url + '/subscriptions/plans';
const pricing_content = {
    title: 'Pricing Plans',
    card: [{
        title: 'Mini Pack',
        card_subtitle: 'USD $4.99 (one time)',
        body: "3 liquid Love everyday, one time, expires in one week, trial pack",
    }, {
        title: 'Gentle Plan',
        card_subtitle: 'USD $18.99 / mon',
        body: "1 liquid love everyday, 1 daily exercise",
    }
]}

export default async function PricingPage() {
    const SESSION_RESPONSE = await checkValidSession();
    const SESSION = await SESSION_RESPONSE.json();
    const { token: TOKEN, user: USER } = SESSION;
    return (
        <>
            <div className="items-center justify-between text-center m-auto">
                <div className="flex flex-row gap-1">
                    {pricing_content.card.map((content, index) => (
                        <Card
                            key={index}
                            card_title={content.title}
                            card_subtitle = {content.card_subtitle}
                            card_body={content.body}
                            className="border-red-300 border-2 rounded-md"
                        />
                    ))}
                </div>
                <SubscriptionPage className="mt-10" token={TOKEN}/>
            </div>
        </>
    );
}
