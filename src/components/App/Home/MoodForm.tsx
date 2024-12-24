"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import MoodFormPartOne from "@/components/App/MoodFormPartOne";

const MoodForm: React.FC = () => {
  const [moodNote] = useState("");
  const [moodTags] = useState("");
  const [selectedTimeLog, setSelectedTimeLog] = useState<"morning" | "night">("morning");
  const [answer, setAnswer] = useState("");

  const formInputClasses = `w-full p-2 border rounded-lg ${
    selectedTimeLog === "night"
      ? "bg-white text-black border-gray-500"
      : "border-gray-300"
  }`;

  const handleSubmitMoodCheckIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      moodNote,
      moodTags,
      selectedTimeLog,
      answer,
    });
  };

  return (
    <div
      className={`w-4/6 border p-4 mb-4 rounded-lg ${
        selectedTimeLog === "morning"
          ? "hover:bg-yellow-400"
          : "bg-white text-black hover:bg-black hover:text-white"
      }`}
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Mood Check-In</h2>
        <p className="text-sm mt-1.5 text-gray-400">We're eager to listen</p>
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmitMoodCheckIn}>
          <MoodFormPartOne />
          <div className="mb-4">
            <label className="block text-sm font-medium">Time of Day</label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  value="morning"
                  checked={selectedTimeLog === "morning"}
                  onChange={() => setSelectedTimeLog("morning")}
                />
                <span className="ml-1" >
                    Morning Log
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="night"
                  checked={selectedTimeLog === "night"}
                  onChange={() => setSelectedTimeLog("night")}
                />
                <span className="ml-1" >
                    Night Log
                </span>
              </label>
            </div>
          </div>
          {selectedTimeLog === "morning" ? (
            <div className="mb-4">
              <label className="block text-sm font-medium">
                How did you sleep last night?
              </label>
              <select
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className={formInputClasses}
              >
                <option value="">Select an answer</option>
                <option value="motivated">Slept Well</option>
                <option value="neutral">Neutral</option>
                <option value="tired">Did Not Sleep Well</option>
              </select>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block text-sm font-medium">
                How was your day overall?
              </label>
              <select
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className={`${formInputClasses}`}
              >
                <option value="">Select an answer</option>
                <option value="productive">Productive</option>
                <option value="relaxed">Relaxed</option>
                <option value="stressful">Stressful</option>
              </select>
            </div>
          )}
          <Button
            text="Submit My Feelings"
            className={`w-auto py-2 rounded-lg ${
              selectedTimeLog === "night"
                ? "hover:bg-white bg-black text-white hover:text-black"
                : "hover:bg-black text-white"
            }`}
            hoverColor="hover:bg-white hover:text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default MoodForm;
