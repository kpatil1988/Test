"use client";
import React, { useState } from 'react';

const FlipTheStory: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.length > 2000) {
      alert("Maximum character limit is 2000!");
      return;
    }
    setShowAlert(true);
    setInputText('');
  };

  return (
    <>
        <div className="mt-16 bg-white p-4">
            {/* Square Card */}
            <div className="mt-8">
                <div className={`rounded-lg p-4 transition-transform ${isFlipped ? 'transform rotateY-180' : ''}`}>
                {isFlipped ? (
                    <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold">Now you have flipped the story.</h3>
                    <p className="mt-2">Go ahead and script your heart here.</p>
                    <form onSubmit={handleSubmit} className="w-full mt-4">
                        <label htmlFor="newStory" className="block text-gray-800 font-medium">
                            What do you want?
                        </label>
                        <textarea
                            id="newStory"
                            value={inputText}
                            onChange={handleInputChange}
                            className="mt-2 px-4 py-2 border rounded w-full text-black"
                            placeholder="Type your new story here..."
                            maxLength={2000}
                            rows={4}
                        />
                        <button
                            type="submit"
                            className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                        I promise to live my new story from now on!
                        </button>
                    </form>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-indigo-600">
                    <h3 className="text-lg font-bold">Flip the Story</h3>
                    <p className="mt-2">Click the button below to flip your story.</p>
                    <button
                        onClick={handleFlip}
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Flip the Story
                    </button>
                    </div>
                )}
                </div>
            </div>

            {/* Alert Message */}
            {showAlert && (
                <div className="absolute top-40 left-0 right-0 flex justify-center">
                <p className="text-md font-bold text-center text-indigo-600 mt-4">
                    Your wishes are already granted... better ride the appreciation tide!
                </p>
                </div>
            )}
        </div>
    </>
  );
};

export default FlipTheStory;
