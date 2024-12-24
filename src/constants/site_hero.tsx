import { APP_NAME, BASE_URL } from '@/constants/main_constants';
export const APP_NAME_URL = "/";
export const HERO_SITE_LINKS = [
    { name: "Features", href: BASE_URL + "#features" },
    { name: "Demo", href: BASE_URL + "#feature-demo" },
    { name: "Pricing", href: BASE_URL + "#pricing" },
    { name: "User Reviews", href: BASE_URL + "#user-reviews" },
    { name: "Our Story", href: BASE_URL + "#our-story" },
];
export const HERO_TITLE = 'A slice of your day, just for you...';
export const HERO_PARA_CONTENT = 'That puts you in control of the rest of your day. ' + APP_NAME + ' gives you the tools '
    + "to set a positive tone, helping you navigate your day with clarity, balance, and ease. Each activity is crafted to "
    + 'uplift, recharge, and bring you closer to the version of yourself that thrives.';
export const HERO_HOVER_BG_COLOUR = 'bg-rose-400';
export const HERO_HOVER_TEXT_COLOUR = 'text-rose-400';

//Same content for Tnc and PP in site_footer.tsx (if and when changes are made here, change there too)
export const HERO_SITE_FOOTER_LINKS = [
    { name: "Terms and Conditions", href: "terms-and-conditions" },
    { name: "Privacy Policy", href: "privacy-policy" },
];