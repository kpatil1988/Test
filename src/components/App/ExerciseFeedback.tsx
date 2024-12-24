"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import ExerciseFeedbackForm from "./ExerciseFeedbackForm";

const ExerciseFeedback: React.FC = () => {
  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='w-auto border p-4 mb-4 rounded-lg'>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Your Exercise Feedback</h2>
        <p className="text-sm mt-1.5 text-gray-400">Your opinion matters</p>
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmitFeedback}>
          <ExerciseFeedbackForm />
          <Button
            text="Submit Feedback"
            className='w-auto py-2 rounded-lg'
            hoverColor="hover:bg-white hover:text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default ExerciseFeedback;
