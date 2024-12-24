"use client";

import { useEffect, useState } from 'react';

const BouncingBalls: React.FC = () => {
  const totalBalls = 14;
  const [balls, setBalls] = useState(Array.from({ length: totalBalls }, (_, i) => i));
  const [allBurst, setAllBurst] = useState(false);
  const [ballPositions, setBallPositions] = useState(
    Array.from({ length: totalBalls }, () => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
    }))
  );

  const MESSAGES = {
    success: "Good job! You've turned your thoughts around! Now, more happiness is making its way to you!",
    buttonText: "Found a Better Thought"
  };

  const handleBurst = () => {
    if (balls.length > 0) {
      const newBalls = balls.slice(1);
      setBalls(newBalls);
      if (newBalls.length === 0) {
        setAllBurst(true);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!allBurst) {
        setBallPositions((prevPositions) =>
          prevPositions.map(() => ({
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }))
        );
      }
    }, 1000); // Change position every second

    return () => clearInterval(intervalId);
  }, [allBurst]);

  return (
    <div className="relative h-screen w-screen bg-white flex flex-col items-center justify-center">
      {!allBurst && (
        <div className="relative h-96 w-full flex justify-center items-center">
          {balls.map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full bg-indigo-600 absolute animate-bounce"
              style={{
                top: ballPositions[index]?.top,
                left: ballPositions[index]?.left,
              }}
            />
          ))}
        </div>
      )}
      {!allBurst && (
        <button
          onClick={handleBurst}
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
        >
          {MESSAGES.buttonText}
        </button>
      )}
      {allBurst && (
        <div className="text-center text-2xl font-bold text-indigo-600 mt-8">
          {MESSAGES.success}
        </div>
      )}
    </div>
  );
};

export default BouncingBalls;
