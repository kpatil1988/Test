"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { GETSTR_CONTENT, GETSTR_CHANGE_INTERVAL, GETSTR_FORM_TITLE } from '@/constants/site_getstarted';
import { HERO_SITE_FOOTER_LINKS } from '@/constants/site_hero';
import Button from '@/components/Button';
import SiteHeader from './SiteHeader';
import Card from '@/components/Card';
import Footer from './Footer';
import SocialLogins from './SocialLogins';

interface SignInSignUpProps {
    className?: string;
}

const SignInSignUp: React.FC<SignInSignUpProps> = ({ className = '' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % GETSTR_CONTENT.length);
        }, GETSTR_CHANGE_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    const activeCard = GETSTR_CONTENT[currentIndex];
    const fallbackCard = { name: 'Default Name', title: 'Default Title', content: 'Default Content' };
    const baseCardClasses =
        'w-full sm:w-[400px] md:w-[500px] h-auto p-10 rounded-lg transition-opacity duration-500';
    const primaryCardClasses =
        'bg-black bg-opacity-90 text-white hover:bg-opacity-40 hover:bg-purple-400 hover:text-black dark:hover:text-white';
    const secondaryCardClasses =
        'border-2 border-black bg-white';

    return (
        <>
            <SiteHeader />
            <div className={`max-w-auto h-auto flex items-center justify-center text-center my-10 mx-6 sm:mx-12 ${className}`}>
                <div className="w-full max-w-screen-lg">
                    <div className="flex flex-wrap gap-6 justify-center">
                        {/* Active card */}
                        <Card
                            name={activeCard?.name || fallbackCard.name}
                            title={activeCard?.title || fallbackCard.title}
                            content={activeCard?.content || fallbackCard.content}
                            cardClasses={`${baseCardClasses} ${primaryCardClasses}`}
                        />

                        {/* Static card with form */}
                        <div className={`${baseCardClasses} ${secondaryCardClasses} sm:w-[400px] md:w-[500px]`}>
                            <h3 className="text-md font-bold mb-6 dark:text-black">{GETSTR_FORM_TITLE}</h3>
                            <form className="space-y-4 text-left">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-black">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium mb-1 dark:text-black">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />
                                </div>
                                <div className="mt-4 text-xs text-gray-500 text-left dark:text-black">
                                    By continuing, you agree to our{' '}
                                    {HERO_SITE_FOOTER_LINKS.map((link, index) => (
                                        <React.Fragment key={index}>
                                            <a
                                                href={`/${link.href}`}
                                                className="text-blue-400 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                            {index < HERO_SITE_FOOTER_LINKS.length - 1 && ' and '}
                                        </React.Fragment>
                                    ))}
                                    .
                                </div>
                                <Button
                                    text="Go To My Account"
                                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-violet-400"
                                />
                            </form>
                            
                            {/* <p className="text-center text-md text-gray-600 mt-8">----------------------- or Continue With -----------------------</p>
                            <SocialLogins className='items-center justify-center'/> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignInSignUp;
