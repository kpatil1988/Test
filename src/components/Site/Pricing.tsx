import { COMMON_LEFT_WIDTH } from '@/constants/main_constants';
import * as PRICING_CONSTANTS from '@/constants/site_pricing';
import GetStartedButton from './GetStartedButton';

interface PricingProps {
    className?: string;
}

const Pricing: React.FC<PricingProps> = ({ className = '' }) => {
    return (
        <>
            <p className='items-center justify-center text-center mt-28 text-4xl font-bold'>{PRICING_CONSTANTS.PRICING_TITLE}</p>
            <div className={`${COMMON_LEFT_WIDTH} mr-20 py-10 flex flex-auto justify-between items-center w-auto h-auto relative`}>
                <div className='flex flex-col space-y-5'>
                    <div className="w-full h-full relative p-10 bg-black text-white rounded-lg">
                        Mini Pack
                    </div>
                    <div className="w-full h-full relative p-10 bg-black text-white rounded-lg">
                        Gentle Plan
                    </div>
                </div>
                <ul className="w-fit list-disc px-20 mx-auto space-y-6 text-lg font-medium text-gray-600">
                    <li>Welcome to the Home Page</li>
                    <li>Welcome to the Home Page</li>
                    <li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</li>
                </ul>
                
                <div className="w-fit text-gray-600">
                    <p className="text-lg font-medium mb-8">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <GetStartedButton hoverColor={`hover:${PRICING_CONSTANTS.PRICING_HOVER_BG_COLOUR}`} />
                </div>
            </div>
        </>
    );
};

export default Pricing;
    