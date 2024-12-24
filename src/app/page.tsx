import Hero from '@/components/Site/Hero';
import Features from '@/components/Site/Features';
import OurStory from '@/components/Site/OurStory';
import Pricing from '@/components/Site/Pricing';
import FeatureDemo from '@/components/Site/FeatureDemo';
import Footer from '@/components/Site/Footer';
import UserReviews from '@/components/Site/UserReviews';

const Page = () => {

    return (
        <>
            <main>
                <Hero />
                <Features />
                <FeatureDemo />
                <Pricing />
                <UserReviews />
                <OurStory />
                <Footer />
            </main>
        </>
    );
}

export default Page;
