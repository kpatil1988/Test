import * as FTR_CONSTANTS from '@/constants/site_feature';
import GetStartedButton from './GetStartedButton';

interface FeaturesProps {
    className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className = '' }) => {
    return (
        <>
            <div className={`max-w-full min-h-screen -mt-28 bg-feature bg-cover bg-center bg-no-repeat ${className}`}>
                <div className='bg-white bg-opacity-95 pb-8 dark:text-black'>
                    <div className="items-center text-center mx-20">
                        <div className='flex flex-auto'>
                            <div className="mt-24 mx-20 mb-16">
                                <h1 className="text-4xl font-bold italic mb-4">{FTR_CONSTANTS.FTR_TITLE}</h1>
                                <p className="text-lg mx-36 font-extralight mb-4">{FTR_CONSTANTS.FTR_PARA_CONTENT}</p>
                                <GetStartedButton hoverColor={`hover:${FTR_CONSTANTS.FTR_HOVER_BG_COLOUR}`}/>
                            </div>
                        </div>
                        <div className='flex flex-auto gap-6 mb-16'>
                            {FTR_CONSTANTS.FTR_CARDS.map((card, index) => (
                                <div
                                    key={index} 
                                    className={`w-fit h-auto p-8 bg-black bg-opacity-90 hover:bg-opacity-40 rounded-lg text-white hover:text-black hover:${card.hover_bg_colour}`}
                                >
                                    <h3 className="text-md mb-2">{card.name.toUpperCase()}</h3>
                                    <h3 className="text-xl font-bold mb-4 p-1 bg-white text-black">{card.title}</h3>
                                    <p className="text-lg">{card.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
    