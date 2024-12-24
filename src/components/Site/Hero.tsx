import React from 'react';
import * as HERO_CONSTANTS from '@/constants/site_hero';
import SiteHeader from './SiteHeader';
import GetStartedButton from './GetStartedButton';

interface HeroProps {
    className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
    return (
        <>
            <div className={`container max-w-full min-h-screen bg-hero bg-cover bg-center bg-no-repeat ${className}`}>
                <SiteHeader />
                <div className='h-screen'></div>
            </div>
            
            <div className="flex items-center justify-center text-center h-screen mx-8 md:mx-12 -mt-96">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg text-gray-600 w-full max-w-md">
                    <h1 className="bg-black text-3xl md:text-4xl font-bold italic mb-6 text-white p-1">
                        {HERO_CONSTANTS.HERO_TITLE}
                    </h1>
                    <p className="text-lg font-normal mb-4">
                        {HERO_CONSTANTS.HERO_PARA_CONTENT}
                    </p>
                    <GetStartedButton hoverColor={`hover:${HERO_CONSTANTS.HERO_HOVER_BG_COLOUR}`}/>
                </div>
            </div>
        </>
    );
};

export default Hero;
