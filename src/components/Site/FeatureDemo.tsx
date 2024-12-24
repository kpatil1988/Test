import { COMMON_LEFT_WIDTH } from '@/constants/main_constants';
import * as FTRDEMO_CONSTANTS from '@/constants/site_feature_demo';
import GetStartedButton from './GetStartedButton';

interface FeatureDemoProps {
    className?: string;
}

const FeatureDemo: React.FC<FeatureDemoProps> = ({ className = '' }) => {
    return (
        <>
            <div className={`${COMMON_LEFT_WIDTH} flex justify-between items-center w-3/4 h-auto rounded-lg mt-28 relative bg-white border-2 border-black text-black hover:${FTRDEMO_CONSTANTS.FTRDEMO_HOVER_BG_COLOUR} hover:bg-opacity-40 dark:hover:bg-opacity-100 ${className}`}>
                <div className="w-fit p-20 px-14">
                    <h6 className="text-sm font-extralight mb-6">{FTRDEMO_CONSTANTS.FTRDEMO_TITLE_SM}</h6>
                    <h1 className="text-5xl font-bold italic mb-10">{FTRDEMO_CONSTANTS.FTRDEMO_TITLE_LG}</h1>
                    <p className="text-lg mb-8 text-justify">{FTRDEMO_CONSTANTS.FTRDEMO_PARA_CONTENT}</p>
                    <GetStartedButton hoverColor={`hover:${FTRDEMO_CONSTANTS.FTRDEMO_HOVER_BG_COLOUR}`} />
                </div>

                <div className={`w-fit h-auto relative ml-20 -mr-44 p-10 bg-black rounded-lg text-white`}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className='mt-10'>
                        <GetStartedButton hoverColor={`hover:${FTRDEMO_CONSTANTS.FTRDEMO_HOVER_BG_COLOUR}`} className='border-white border-2 hover:border-none' />
                    </p>
                </div>
            </div>
        </>
    );
};

export default FeatureDemo;
