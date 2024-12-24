"use client";
import { useEffect, useState } from "react";

const COMPLETION_MESSAGE = "Go with the flow!";
const COMPLETION_TITLE = "Nice!";
const BREATH_DURATION = 5000; // Breathing in/out duration in ms
const TIMER_INITIAL = 120; // Initial timer in seconds

const Breathe: React.FC = () => {
    const [breathing, setBreathing] = useState<"Breathe In" | "Breathe Out">("Breathe Out");
    const [timer, setTimer] = useState<number>(TIMER_INITIAL);
    const [isComplete, setIsComplete] = useState<boolean>(false);

    // Timer Logic
    useEffect(() => {
        if (timer > 0) {
            const timerInterval = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(timerInterval);
        }
        setIsComplete(true);
    }, [timer]);

    // Breathing Cycle Logic
    useEffect(() => {
        if (isComplete) return; // Stop the breathing cycle if complete

        setBreathing("Breathe In");
        const breathInterval = setInterval(() => {
            setBreathing((prev) => (prev === "Breathe In" ? "Breathe Out" : "Breathe In"));
        }, BREATH_DURATION);

        return () => clearInterval(breathInterval);
    }, [isComplete]);

    return (
        <div className="flex flex-col items-center justify-center px-6 py-4">
            {/* Title */}
            <h1 className="text-md text-center mb-4" role="heading">
                {isComplete ? COMPLETION_TITLE : breathing}
            </h1>

            {/* Breathing Circle */}
            <div className="relative w-48 h-48 my-6">
                <div className="absolute inset-0 border border-yellow-400 rounded-full flex items-center justify-center">
                    <div
                        className={`w-28 h-28 bg-yellow-400 rounded-full transition-transform duration-[4000ms] 
                        ${breathing === "Breathe In" ? "scale-150" : "scale-75"}`}
                        aria-label={`Breathing ${breathing}`}
                    />
                </div>
            </div>

            {/* Timer/Completion Message */}
            <p className="mt-4 text-sm md:text-base text-gray-700 text-center" role="timer">
                {isComplete
                    ? COMPLETION_MESSAGE
                    : `Time Left: ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")}`}
            </p>
        </div>
    );
};

export default Breathe;
