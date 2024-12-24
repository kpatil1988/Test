import Quote from '@/components/App/Quote';
import BreatheTimer from '@/components/App/Home/BreatheTimer';
import MoodForm from '@/components/App/Home/MoodForm';
import { HOME_PAGE_QUOTE } from '@/constants/app_constants';

const Home = () => {
  return (
    <>
      <div className="w-full mx-auto p-4">
        <Quote text={HOME_PAGE_QUOTE}/>
        <div className = "flex gap-6 justify-center">
          <MoodForm />
          <BreatheTimer />
        </div>
      </div>
    </>
  );
};

export default Home;
