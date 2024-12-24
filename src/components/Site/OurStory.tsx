import Image from 'next/image';
import * as OURSTORY_CONSTANTS from '@/constants/site_our_story';
import GetStartedButton from './GetStartedButton';

interface OurStoryProps {
    className?: string;
}

const OurStory: React.FC<OurStoryProps> = ({ className = '' }) => {
    return (
        <>
            <div className='mr-20 p-10 mt-28 flex flex-auto justify-between items-center w-auto h-auto'>
                <div className="w-full h-full">
                    <Image
                        src={OURSTORY_CONSTANTS.STORY_IMG_URL}
                        width={450}
                        height={250}
                        alt="Our Story"
                        className="rounded-lg"
                    />
                </div>
                <div className={`w-fit ml-auto p-14 bg-black rounded-lg text-white hover:${OURSTORY_CONSTANTS.STORY_HOVER_BG_COLOUR} hover:bg-opacity-40 hover:text-black`}>
                    <h6 className="text-sm font-extralight mb-6 dark:text-white">{OURSTORY_CONSTANTS.STORY_TITLE_SM}</h6>
                    <h1 className="text-5xl font-bold italic mb-10 p-1 bg-white text-black">{OURSTORY_CONSTANTS.STORY_TITLE_LG}</h1>
                    <div className="text-lg mb-8 dark:text-white">
                        {OURSTORY_CONSTANTS.STORY_PARA_CONTENT.split('\n').map((line, index) => (
                            <p key={index} className="mb-4">{line}</p>
                        ))}
                    </div>
                    <GetStartedButton hoverColor={`hover:${OURSTORY_CONSTANTS.STORY_HOVER_BG_COLOUR}`} className='border-2 hover:border-none'/>
                </div>
            </div>
        </>
    );
};

export default OurStory;
    