"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import MoodFormPartOne from "@/components/App/MoodFormPartOne";

const MoodFormInstant: React.FC = () => {
  const [moodNote] = useState("");
  const [moodTags] = useState("");

  const handleSubmitMoodCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      moodNote,
      moodTags,
    });
  };

  return (
    <div className='w-auto border p-4 mb-4 rounded-lg'>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Mood Check-In</h2>
        <p className="text-sm mt-1.5 text-gray-400">We're here for you</p>
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmitMoodCheckIn}>
          <MoodFormPartOne />
          <Button
            text="Soothe Me!"
            className='w-auto py-2 rounded-lg'
            hoverColor="hover:bg-white hover:text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default MoodFormInstant;
