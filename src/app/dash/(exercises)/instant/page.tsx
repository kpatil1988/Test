import Quote from '@/components/App/Quote';
import MoodFormInstant from '@/components/App/Instant/MoodFormInstant';
import { INSTANT_PAGE_QUOTE, INSTANT_PAGE_FACTS, INSTANT_PAGE_EXERCISE_CARD } from '@/constants/app_instant';
import ContentCard from '@/components/App/ContentCard';

const Instant = () => {
  const resp_flag = true; //When the exercise is received, then this flag is set to be true
  return (
    <>
      <audio autoPlay loop>
        <source src="/audio/bg-instant.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <div className="w-full mx-auto p-4">
        <Quote text={INSTANT_PAGE_QUOTE} />
        <div className="flex gap-6 justify-center">
          <div className="w-4/6 flex flex-col gap-3">
            <MoodFormInstant />
            <ContentCard 
              title={INSTANT_PAGE_EXERCISE_CARD.title}
              subtitle={INSTANT_PAGE_EXERCISE_CARD.subtitle}
              content={INSTANT_PAGE_EXERCISE_CARD.content}
              className={resp_flag ? 'blur-sm' : ''}
            />
          </div>
          <div className="w-2/6 flex flex-col">
            {INSTANT_PAGE_FACTS.map((fact, index) => (
              <ContentCard 
                key={index}
                title={fact.title}
                subtitle={fact.subtitle}
                content={fact.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instant;
