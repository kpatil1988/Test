import Link from "next/link";
import Image from "next/image";

const express_url = process.env.EXPRESS_API_URL
const img_folder = '/images';
const social_img_folder = img_folder + '/social';
const signin_social_logos = [{
  image: social_img_folder + '/google-logo.png',
  url: express_url + '/login/federated/google'
}]
const logo_width = 40;
const logo_height = 40;

interface SocialLoginsProps {
    className?: string
}

const SocialLogins: React.FC<SocialLoginsProps> = ({ className = ''}) => {
    return (
        <>
            <div className={className}>
                {signin_social_logos.map((logo, index) => (
                    <Link key={index} href={logo.url}>
                        <Image
                            src={logo.image}
                            width={logo_width}
                            height={logo_height}
                            alt="Social Logo"
                        ></Image>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default SocialLogins;