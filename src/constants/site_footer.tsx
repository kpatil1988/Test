import { COMPANY_NAME } from '@/constants/main_constants';

//Same content for Tnc and PP in site_footer.tsx (if and when changes are made here, change there too)
export const FOOTER_SITE_LINKS = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "#link1" },
    { name: "FAQs", href: "#link2" },
    { name: "Terms and Conditions", href: "terms-and-conditions" },
    { name: "Privacy Policy", href: "privacy-policy" },
];
export const FOOTER_NOTE = 'All Copyrights Reserved. \n' + COMPANY_NAME;
export const FOOTER_HOVER_TEXT_COLOUR = 'text-violet-400';