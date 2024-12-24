"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import * as HERO_CONSTANTS from '@/constants/site_hero'
import GetStartedButton from '@/components/Site/GetStartedButton';
import AppNameHeader from '../AppNameHeader';

interface MainHeaderProps {
    className?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ className = '' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hoverClass = `hover:${HERO_CONSTANTS.HERO_HOVER_TEXT_COLOUR}`;
    return (
        <>
            <div className={`${className} mx-auto`}>
                <header className="flex justify-between items-center p-2 pb-5 mx-4 flex-wrap md:flex-nowrap">
                    <AppNameHeader />
                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <button className="text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`flex space-x-6 items-center text-sm dark:bg-black ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6`}
                        role="navigation"
                        aria-label="Main Navigation"
                    >
                        {HERO_CONSTANTS.HERO_SITE_LINKS.map((link, index) => (
                            <Link key={index} href={link.href} className={`text-black dark:text-white ${hoverClass} hover:underline`}>
                                {link.name}
                            </Link>
                        ))}
                        <GetStartedButton hoverColor={`hover:${HERO_CONSTANTS.HERO_HOVER_BG_COLOUR}`} />
                    </nav>
                </header>
            </div>
        </>
    );
};

export default MainHeader;
