import Link from 'next/link';
import * as Footer_CONSTANTS from '@/constants/site_footer';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <>
            <div className={`flex flex-auto justify-between items-center mt-20 p-10 bg-black text-white ${className}`}>
                <div className='text-sm'>
                    {Footer_CONSTANTS.FOOTER_NOTE.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div className="flex gap-6 items-center text-sm">
                    {Footer_CONSTANTS.FOOTER_SITE_LINKS.map((link, index) => (
                        <Link key={index} href={link.href} className={`hover:${Footer_CONSTANTS.FOOTER_HOVER_TEXT_COLOUR} hover:underline`}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Footer;
