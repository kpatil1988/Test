'use client';
import React, { useState } from 'react';
import MoodForm from './MoodForm';

interface InputDailyData {
  exerciseTitle: string;
  exerciseDescription: string;
  inAppUrl?: string
}

interface TabsProps {
  api_url: string;
  token: string;
  master_moods: string[];
  instant_allowed: boolean;
  daily_exercise_data: InputDailyData;
}

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    className={`px-12 py-2 font-semibold rounded-md ${
      isActive ? 'bg-white dark:bg-custom-misty-rose text-indigo-950' : 'text-purple-700 dark:text-white'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const MoodPageTabs: React.FC<TabsProps> = ({ 
  api_url,
  token,
  master_moods,
  instant_allowed,
  daily_exercise_data
}) => {
  const MOOD_CHECKIN_TAB = 'moodCheckIn';
  const DAILY_TAB = 'daily';
  
  const [activeTab, setActiveTab] = useState<typeof MOOD_CHECKIN_TAB | typeof DAILY_TAB>(MOOD_CHECKIN_TAB);
  const daily_feature_name = process.env.DAILY_FEATURE_NAME || 'Daily Feature';

  return (
    <>
      <div className="max-w-lg mx-auto p-4 mt-12 shadow-md bg-red-300 text-white rounded-md">
        <div className="flex justify-around mb-4">
          <TabButton 
            label="Mood Check-In" 
            isActive={activeTab === MOOD_CHECKIN_TAB} 
            onClick={() => setActiveTab(MOOD_CHECKIN_TAB)} 
          />
          <TabButton 
            label={daily_feature_name} 
            isActive={activeTab === DAILY_TAB} 
            onClick={() => setActiveTab(DAILY_TAB)} 
          />
        </div>

        {/* Tab content container with fixed width */}
        <div className="border p-1 border-white rounded-md shadow-sm w-full max-w-lg min-w-[300px] text-center">
          {activeTab === MOOD_CHECKIN_TAB ? (
            <MoodForm api_url={api_url} token={token} master_moods={master_moods} instant_allowed={instant_allowed} />
          ) : (
            <div className="p-8 bg-opacity-20 border-t-0">
              <p className='text-purple-800'>{daily_exercise_data.exerciseTitle}</p>
              <hr className='mt-2 mb-5'></hr>
              <p className='text-black text-justify'>{daily_exercise_data.exerciseDescription}</p>
              {daily_exercise_data.inAppUrl && (
                <button className='bg-purple-800 text-white mt-4 p-3 rounded-md'>
                  <a href={daily_exercise_data.inAppUrl} target="_blank" rel="noopener noreferrer">
                    Click to play
                  </a>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MoodPageTabs;
