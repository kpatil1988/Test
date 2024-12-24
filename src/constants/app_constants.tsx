import { FaHome, FaClipboardList, FaHeart, FaSmile, FaMoneyBillAlt, FaUser, FaPowerOff } from "react-icons/fa";

interface NavLink {
    label: string;
    href: string;
    icon: React.ReactNode;
}
export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "home", icon: <FaHome /> },
    { label: "Daily Nurturers", href: "daily", icon: <FaClipboardList /> },
    { label: "Liquid Love", href: "instant", icon: <FaHeart /> },
    { label: "Mood Meter", href: "mood-meter", icon: <FaSmile /> },
    { label: "Subscription", href: "subscription", icon: <FaMoneyBillAlt /> },
    { label: "Profile", href: "profile", icon: <FaUser /> },
    { label: "Logout", href: "logout", icon: <FaPowerOff /> },
];
export const NAV_ACTIVE_BG_COLOUR = "bg-yellow-400";
export const NAV_HOVER_BG_COLOUR = "hover:bg-yellow-400";
export const NAV_HOVER_TEXT_COLOUR = "hover:text-black";

export const HOME_TITLE = "Welcome to your happy place!";
export const HOME_PAGE_QUOTE = '"Every moment is a fresh start. Embrace the possibilities and let your light shine brighter than ever before."';
