"use client";
import React, { useState } from "react";

const MoodFormPartOne: React.FC = () => {
    const [moodNote, setMoodNote] = useState("");
    const [moodTags, setMoodTags] = useState("");
    const formInputClasses = 'w-full p-2 border rounded-lg bg-white text-black';
    return (
        <>
            <div className="mb-4">
                <label className="block text-sm font-medium">
                    Mood Note
                </label>
                <textarea
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    className={formInputClasses}
                    rows={3}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">
                    Mood Tags
                </label>
                <input
                    type="text"
                    value={moodTags}
                    onChange={(e) => setMoodTags(e.target.value)}
                    className={formInputClasses}
                />
            </div>
        </>
    );
};

export default MoodFormPartOne;
