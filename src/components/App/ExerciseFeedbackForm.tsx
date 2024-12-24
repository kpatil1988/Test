"use client";
import React, { useState } from "react";

const ExerciseFeedbackForm: React.FC = () => {
    const [userFeedbackNote, setUserFeedbackNote] = useState("");
    const [userFeedback, setUserFeedback] = useState("");

    const formInputClasses = "w-full p-2 border rounded-lg bg-white text-black";

    return (
        <>
            <div className="mb-4">
                <label className="block text-sm font-medium">
                    Your Comment
                </label>
                <textarea
                    value={userFeedbackNote}
                    onChange={(e) => setUserFeedbackNote(e.target.value)}
                    className={formInputClasses}
                    rows={3}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                    Feeling Better?
                </label>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="feelingBetter"
                            value="Yes"
                            checked={userFeedback === "Yes"}
                            onChange={(e) => setUserFeedback(e.target.value)}
                        />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="feelingBetter"
                            value="Somewhat"
                            checked={userFeedback === "Somewhat"}
                            onChange={(e) => setUserFeedback(e.target.value)}
                        />
                        <span>Somewhat</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="feelingBetter"
                            value="No"
                            checked={userFeedback === "No"}
                            onChange={(e) => setUserFeedback(e.target.value)}
                        />
                        <span>Not really</span>
                    </label>
                </div>
            </div>
        </>
    );
};

export default ExerciseFeedbackForm;
