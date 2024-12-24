'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaHome, FaThermometerHalf } from 'react-icons/fa';
import { GiEnlightenment } from 'react-icons/gi';
import { RiSpeedMiniFill } from 'react-icons/ri';
import { FaArrowUpWideShort, FaUser } from 'react-icons/fa6';

interface NavItem {
  name: string;
  url: string;
  icon: JSX.Element;
}

const LeftSideNav: React.FC = () => {
  const pathname = usePathname();
  const app_name = process.env.APP_NAME;
  const app_name_text_colour = 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-custom-root-chakra to-custom-crown-chakra';
  const main_nav = '/dashboard/';

  const navItems: NavItem[] = [
    { name: 'Home', url: main_nav + 'moods', icon: <FaHome /> },
    { name: 'Mood Meter', url: main_nav + 'mood-meter', icon: <FaThermometerHalf /> },
    { name: 'Account', url: main_nav + 'settings/subscriptions', icon: <FaUser /> },
  ];

  const navItemsForComingSoon: NavItem[] = [
    { name: 'Momentum', url: main_nav + 'momentum', icon: <RiSpeedMiniFill /> },
    { name: 'Enlighten', url: main_nav + 'enlighten', icon: <GiEnlightenment /> },
    { name: 'Elevate', url: main_nav + 'elevate', icon: <FaArrowUpWideShort /> },
  ];

  // Function to render navigation items
  const renderNavItems = (items: NavItem[]) => (
    <ul>
      {items.map((item) => (
        <li key={item.url} className="mb-4">
          <Link
            href={item.url}
            className={`flex items-center p-3 rounded transition-colors ${
              pathname === item.url 
                ? 'border-2'
                : 'hover:bg-black hover:text-white dark:hover:bg-indigo-950'
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="w-64 h-auto bg-transparent dark:bg-transparent text-lg text-center border border-gray-200 shadow-md rounded-lg m-10">
        {/* Logo and App Name */}
        <div className="flex items-center p-4 font-bold">
          <Image
            src="/images/app-logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full mr-1"
          />
          <div className="text-2xl ">{app_name}</div>
        </div>

        <hr />

        {/* Main Navigation */}
        <nav className="mt-4 p-4">
          {renderNavItems(navItems)}
        </nav>
      </div>
    </>
  );
};

export default LeftSideNav;
