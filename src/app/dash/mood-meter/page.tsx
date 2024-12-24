import Quote from '@/components/App/Quote';
import { HOME_PAGE_QUOTE } from '@/constants/app_constants';
import Calendar from '@/components/App/Calendar';

const MoodMeter = () => {
  return (
    <>
      <div className="w-full mx-auto p-4">
        <Quote text={HOME_PAGE_QUOTE}/>
        <Calendar />
      </div>
    </>
  );
};

export default MoodMeter;
