import ContentCard from '@/components/App/ContentCard';
import ExerciseFeedback from '@/components/App/ExerciseFeedback';
import Quote from '@/components/App/Quote';
import { DAILY_PAGE_QUOTE, DAILY_PAGE_EXERCISE_CARD, DAILY_PAGE_BENEFITS_CARD } from '@/constants/app_daily';

const Daily = () => {
  return (
    <>
      <div className="w-full mx-auto p-4">
        <Quote text={DAILY_PAGE_QUOTE}/>
        <div className = "flex gap-6 justify-center items-stretch">
          <div className="w-4/6 flex-col gap-6">
            <ContentCard 
              title={DAILY_PAGE_EXERCISE_CARD.title}
              subtitle={DAILY_PAGE_EXERCISE_CARD.subtitle}
              content={DAILY_PAGE_EXERCISE_CARD.content}
            />
            <ExerciseFeedback />
          </div>
          <div className="w-2/6 h-full flex-col">
            <ContentCard 
              title={DAILY_PAGE_BENEFITS_CARD.title}
              subtitle={DAILY_PAGE_BENEFITS_CARD.subtitle}
              content={DAILY_PAGE_BENEFITS_CARD.content}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Daily;
