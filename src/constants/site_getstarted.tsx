import { APP_NAME } from '@/constants/main_constants';

export const GETSTR_FORM_TITLE = "GET STARTED";
export const GETSTR_FORM_NAV = ['Sign In', 'Sign Up'];

//Same Content in site_feature.tsx (if and when changes are made here, change there too)
export const GETSTR_CONTENT = [{
    name: "Emotional Wellness",
    title: "Connect To Your Heart",
    content: "We invite you to log your moods daily, creating a safe space to freely express and release your emotions. "
        + "This simple yet transformative practice brings emotional clarity and a sense of relief, deepening your "
        + "self-awareness and enhancing your emotional intelligence and resilience. With each log, you'll empower "
        + "yourself to discover the silver lining in every mood."
}, {
    name: "Mental Wellness",
    title: "Strengthen Your Mind",
    content: "Imagine "+ APP_NAME +" as your mental sanctuary where your mind can stretch, unwind, and refocus. Each "
        + "tailored exercise is designed to help you flex your mental muscles, helping you form constructive thought "
        + "patterns, deeper focus or simply reset. Step by step, we’re here to help you show up in your daily life with a "
        + "fresh and centered mindset."
}, {
    name: "Physical Wellness",
    title: "Energise Your Body",
    content: "Our personalized activities meet you where you are, helping you feel more in tune with your body while "
        + "supporting strength, flexibility, and rejuvenation. We guide you to nurture your body with care and intention, "
        + "fostering a lasting sense of physical well-being. This empowers you to move through life with confidence, "
        + "vitality, and a renewed connection to yourself."
}];
export const GETSTR_CHANGE_INTERVAL = 5000;