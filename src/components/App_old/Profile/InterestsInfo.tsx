import React from 'react';

interface ProfileInterestsFieldProps {
  values: {
    interests: string[];
  };
  handleInterestChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  masterInterestsArray: string[];
}

const InterestsInfo: React.FC<ProfileInterestsFieldProps> = ({
  values,
  handleInterestChange,
  masterInterestsArray,
}) => {
  return (
    <>
      <div className=''>
        <label className="block font-medium">Interests</label>
        <div className="flex flex-wrap w-full border border-gray-300 rounded-md p-2">
          {masterInterestsArray.map((interest) => (
            <div key={interest} className="flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                id={interest}
                name="interests"
                value={interest}
                checked={values.interests.some(selectedInterest => selectedInterest.trim() === interest.trim())}
                onChange={handleInterestChange}
                className="mr-2 mt-1"
              />
              <label htmlFor={interest} className="text-black">{interest}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InterestsInfo;
