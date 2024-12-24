'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { moodLogSchema } from '@/app/utils/validation/moodLogSchema';
import toast from 'react-hot-toast';

interface MoodFormProps {
  api_url: string;
  token: string;
  master_moods: string[];
  instant_allowed: boolean;
}

const MoodForm: React.FC<MoodFormProps> = ({ api_url, token, master_moods, instant_allowed }) => {
  const [filteredMoods, setFilteredMoods] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true); // Track visibility of dropdown
  const [instantResponse, setInstantResponse] = useState<{ title: string; exercise: string } | null>(null); // Track instant response data
  const instant_feature_name = process.env.INSTANT_FEATURE_NAME;

  const handleMoodInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = master_moods.filter(mood =>
      mood.toLowerCase().includes(inputValue)
    );
    setFilteredMoods(filtered);
    setIsDropdownVisible(true); // Show the dropdown when typing in the mood input
  };

  const formik = useFormik({
    initialValues: {
      moodNote: '',
      moodTagsChosen: [] as string[],
      moodLogType: 'morning_log',
    },
    validationSchema: moodLogSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      try {
        const response = await fetch(api_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();

          toast.success('Mood logged successfully');
          resetForm();

          if (values.moodLogType === 'instant') {
            setInstantResponse({
              title: data.title,
              exercise: data.exercise,
            });
          } else {
            setInstantResponse(null);
          }
        } else {
          toast.error('Failed to log mood');
        }
      } catch (error) {
        console.error('Error logging mood:', error);
        toast.error('An error occurred');
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleMoodSelect = (mood: string) => {
    const isMoodSelected = formik.values.moodTagsChosen.includes(mood);

    if (isMoodSelected) {
      const updatedMoods = formik.values.moodTagsChosen.filter(
        (selectedMood) => selectedMood !== mood
      );
      formik.setFieldValue('moodTagsChosen', updatedMoods);
    } else {
      if (formik.values.moodTagsChosen.length < 5) {
        formik.setFieldValue('moodTagsChosen', [
          ...formik.values.moodTagsChosen,
          mood,
        ]);
      } else {
        alert('You can only select up to 5 moods');
      }
    }

    // Hide dropdown if 5 moods are selected
    if (formik.values.moodTagsChosen.length + 1 >= 5) {
      setIsDropdownVisible(false);
    }
  };

  const removeSelectedMood = (mood: string) => {
    const updatedMoods = formik.values.moodTagsChosen.filter(
      (selectedMood) => selectedMood !== mood
    );
    formik.setFieldValue('moodTagsChosen', updatedMoods);
    setIsDropdownVisible(true);
  };

  const handleOtherFieldFocus = () => {
    setIsDropdownVisible(false);
  };

  return (
    <>
      <div className="max-w-lg p-4 shadow-md">
        <form onSubmit={formik.handleSubmit} className="space-y-4 text-left">
          {/* Mood Tags Selection */}
          <div className="mb-8">
            <label htmlFor="moodTagsChosen" className="block font-medium">
              Mood (select up to 5):
            </label>
            <input
              type="text"
              name="moodInput"
              onChange={handleMoodInputChange}
              placeholder="Enter mood tags..."
              className="mt-1 block w-full border rounded-md p-2 text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onFocus={() => setIsDropdownVisible(true)} // Show dropdown on focus
            />
            {/* Render selected moods */}
            <div className="flex flex-wrap gap-2 mt-2">
              {formik.values.moodTagsChosen.map((mood, index) => (
                <div key={index} className="flex items-center text-custom-misty-rose dark:text-custom-deep-peach border border-white rounded-full px-3 py-1 text-sm font-semibold">
                  {mood}
                  <button
                    type="button"
                    onClick={() => removeSelectedMood(mood)}
                    className="ml-2 text-red-500"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            {formik.errors.moodTagsChosen && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.moodTagsChosen}
              </div>
            )}
            {/* Render filtered moods */}
            {isDropdownVisible && filteredMoods.length > 0 && (
              <ul className="mt-2 bg-white border border-gray-300 rounded-md max-h-40 overflow-y-auto">
                {filteredMoods.map((mood, index) => (
                  <li
                    key={index}
                    onClick={() => handleMoodSelect(mood)}
                    className={`p-2 text-black hover:bg-gray-200 cursor-pointer ${
                      formik.values.moodTagsChosen.includes(mood)
                        ? 'bg-indigo-200'
                        : ''
                    }`}
                  >
                    {mood}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mood Note */}
          <div className="mb-8">
            <label htmlFor="moodNote" className="block font-medium">
              Mood Note (max 2000 characters):
            </label>
            <textarea
              name="moodNote"
              value={formik.values.moodNote}
              onChange={formik.handleChange}
              onFocus={handleOtherFieldFocus} // Hide dropdown on focus
              rows={4}
              placeholder="Describe your mood..."
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {formik.errors.moodNote && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.moodNote}
              </div>
            )}
          </div>

          {/* Mood Log Type */}
          <div className="mb-8">
            <label htmlFor="moodLogType" className="block font-medium mb-2 mt-8">
              Mood Log Type:
            </label>
            <div className="flex">
              <div className="flex items-center border rounded-md w-full p-2 space-x-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="moodLogType"
                    value="morning_log"
                    onChange={formik.handleChange}
                    onFocus={handleOtherFieldFocus} // Hide dropdown on focus
                    checked={formik.values.moodLogType === 'morning_log'}
                    className="sr-only peer"
                  />
                  <div
                    className={`font-medium text-black p-2 ${
                      formik.values.moodLogType === 'morning_log'
                        ? 'bg-custom-deep-peach dark:bg-custom-misty-rose'
                        : 'text-white'
                    }`}
                  >
                    Morning Log
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="moodLogType"
                    value="night_log"
                    onChange={formik.handleChange}
                    onFocus={handleOtherFieldFocus} // Hide dropdown on focus
                    checked={formik.values.moodLogType === 'night_log'}
                    className="sr-only peer"
                  />
                  <div
                    className={`font-medium text-black p-2 ${
                      formik.values.moodLogType === 'night_log'
                        ? 'bg-custom-deep-peach dark:bg-custom-misty-rose'
                        : 'text-white'
                    }`}
                  >
                    Night Log
                  </div>
                </label>
                {instant_allowed && (
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="moodLogType"
                      value="instant"
                      onChange={formik.handleChange}
                      onFocus={handleOtherFieldFocus}
                      checked={formik.values.moodLogType === 'instant'}
                      className="sr-only peer"
                    />
                    <div
                      className={`font-medium text-black p-2 ${
                        formik.values.moodLogType === 'instant'
                          ? 'bg-custom-deep-peach dark:bg-custom-misty-rose'
                          : 'text-white'
                      }`}
                    >
                      {instant_feature_name}
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="mt-8 w-full bg-custom-deep-peach dark:bg-custom-misty-rose text-black p-2 rounded-md"
          >
            {formik.isSubmitting ? 'Logging mood...' : 'Log My Mood'}
          </button>
        </form>
      </div>

      {/* Render instant response below the form if log type is "instant" */}
      {instantResponse && (
        <div className="mt-8 max-w-lg mx-auto p-4 shadow-md bg-indigo-50 rounded-md">
          <h3 className="text-lg font-semibold text-indigo-700">{instantResponse.title}</h3>
          <p className="mt-2 text-black">{instantResponse.exercise}</p>
        </div>
      )}
    </>
  );
};

export default MoodForm;
