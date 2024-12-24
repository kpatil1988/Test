"use client";

import React, { useState } from 'react';

const VirtualBubbleWrap: React.FC = () => {
  const gridSize = 5; // Size of the grid (e.g., 5x5)
  const totalBubbles = gridSize * gridSize;
  const [bubbles, setBubbles] = useState(Array.from({ length: totalBubbles }, () => true));
  const [allPopped, setAllPopped] = useState(false);

  const popBubble = (index: number) => {
    const newBubbles = [...bubbles];
    newBubbles[index] = false;
    setBubbles(newBubbles);
    
    if (newBubbles.every(bubble => !bubble)) {
      setAllPopped(true);
    }
  };

  // Reset the game
  const resetGame = () => {
    setBubbles(Array.from({ length: totalBubbles }, () => true));
    setAllPopped(false);
  };

  // Generate a random pastel color for each bubble
  const getRandomPastelColor = () => {
    const r = Math.floor(Math.random() * 127 + 128);
    const g = Math.floor(Math.random() * 127 + 128);
    const b = Math.floor(Math.random() * 127 + 128);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Bubble Grid */}
      {!allPopped && (
        <div className="flex flex-wrap justify-center items-center">
          {bubbles.map((isBubbleVisible, index) => (
            <div
              key={index}
              className={`w-16 h-16 m-2 rounded-full cursor-pointer transition-opacity duration-300 ${
                isBubbleVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundColor: isBubbleVisible ? getRandomPastelColor() : 'transparent' }}
              onClick={() => popBubble(index)}
            />
          ))}
        </div>
      )}

      {/* Congratulatory Message */}
      {allPopped && (
        <div className="absolute text-center">
          <p className="text-2xl font-semibold text-indigo-600">
            Congratulations! You've awakened the child within you successfully!
          </p>
          <button
            className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            onClick={resetGame}
          >
            Reset Bubbles
          </button>
        </div>
      )}
    </div>
  );
};

export default VirtualBubbleWrap;
