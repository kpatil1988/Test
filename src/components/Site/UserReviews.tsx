import { COMMON_LEFT_WIDTH } from '@/constants/main_constants';
import * as USR_REVIEW_CONSTANTS from '@/constants/site_user_reviews';
import GetStartedButton from './GetStartedButton';

interface UserReviewsProps {
    className?: string;
}

const UserReviews: React.FC<UserReviewsProps> = ({ className = '' }) => {
    return (
        <>
            <div className={`w-auto h-auto ${COMMON_LEFT_WIDTH} mr-20 mt-28 border-black border-2 rounded-lg hover:${USR_REVIEW_CONSTANTS.USR_REV_HOVER_BG_COLOUR} hover:bg-opacity-40 dark:hover:bg-opacity-100 ${className}`}>
                <div className="flex flex-col justify-between items-center text-center p-10">
                    <h6 className="text-sm font-extralight mb-6 ">{USR_REVIEW_CONSTANTS.USR_REV_TITLE_SM}</h6>
                    <h1 className="text-5xl font-bold italic mb-10">{USR_REVIEW_CONSTANTS.USR_REV_TITLE_LG}</h1>
                    <p className="text-lg px-36 mb-10">{USR_REVIEW_CONSTANTS.USR_REV_PARA_CONTENT}</p>
                    <GetStartedButton hoverColor={`hover:${USR_REVIEW_CONSTANTS.USR_REV_HOVER_BG_COLOUR}`} />
                    <p className='mb-20' />

                    <div className='flex flex-row mx-5 gap-8'>
                        <div className="w-fit">
                            <div className='w-32 h-32 mx-auto mb-10 bg-black text-white rounded-full p-10'>Image here</div>
                            <h6 className="text-2xl font-extralight mb-1">Welcome to the Home Page</h6>
                            <h1 className="text-sm font-bold italic mb-4">Welcome to the Home Page</h1>
                            <p className="text-md">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        </div>
                        <div className="w-fit">
                            <div className='w-32 h-32 mx-auto mb-10 bg-black text-white rounded-full p-10'>Image here</div>
                            <h6 className="text-2xl font-extralight mb-1">Welcome to the Home Page</h6>
                            <h1 className="text-sm font-bold italic mb-4">Welcome to the Home Page</h1>
                            <p className="text-md">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        </div>
                        <div className="w-fit">
                            <div className='w-32 h-32 mx-auto mb-10 bg-black text-white rounded-full p-10'>Image here</div>
                            <h6 className="text-2xl font-extralight mb-1">Welcome to the Home Page</h6>
                            <h1 className="text-sm font-bold italic mb-4">Welcome to the Home Page</h1>
                            <p className="text-md">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserReviews;
