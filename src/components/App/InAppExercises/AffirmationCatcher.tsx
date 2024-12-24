"use client";
import { useEffect, useState, useRef } from "react";

const affirmations = [
  "You are loved.",
  "You are enough.",
  "You are strong.",
  "You are valued.",
  "You are worthy.",
  "Well-being abounds.",
  "Universe is on my side.",
  "I'm love personified.",
  "I got this!",
  "You Got This!",
  "It's going to be okay.",
  "You can figure this out.",
  "I'm capable."
];

const AffirmationCatcher: React.FC = () => {
  const [fallingAffirmations, setFallingAffirmations] = useState<
    { id: number; text: string; x: number; y: number; width: number }[]
  >([]);
  const [basketX, setBasketX] = useState<number>(0);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [showMessage, setShowMessage] = useState<boolean>(false); // State for showing message
  const basketRef = useRef<HTMLDivElement>(null);

  // Set up client dimensions and basket position
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setBasketX(window.innerWidth / 2 - 50);
    };

    updateDimensions(); // Initial call
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Add a new affirmation every 2 seconds
  useEffect(() => {
    const addAffirmation = () => {
        const text = affirmations[Math.floor(Math.random() * affirmations.length)];
        const width = text.length * 10 + 40;
        const newX = Math.random() * (dimensions.width - width);
        setFallingAffirmations((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
                x: newX,
                y: 0,
                width,
            },
        ]);
    };

    const interval = setInterval(addAffirmation, 2000);
    return () => clearInterval(interval);
  }, [dimensions.width]);

  // Move affirmations down the screen
  useEffect(() => {
    const moveAffirmations = () => {
      setFallingAffirmations((prev) =>
        prev
          .map((affirmation) => ({
            ...affirmation,
            y: affirmation.y + 5,
          }))
          .filter((affirmation) => affirmation.y < dimensions.height)
      );
    };

    const interval = setInterval(moveAffirmations, 50);
    return () => clearInterval(interval);
  }, [dimensions.height]);

  // Check for collisions between affirmations and the basket
  useEffect(() => {
    const checkCollisions = () => {
      setFallingAffirmations((prev) =>
        prev.filter((affirmation) => {
          const basketRect = basketRef.current?.getBoundingClientRect();
          const isColliding =
            basketRect &&
            affirmation.y > basketRect.top - 30 &&
            affirmation.x + affirmation.width > basketRect.left &&
            affirmation.x < basketRect.right;

          return !isColliding;
        })
      );
    };

    const interval = setInterval(checkCollisions, 50);
    return () => clearInterval(interval);
  }, [basketX]);

  const handleBasketMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setBasketX(e.clientX - 50);
  };

  // Show message after 1 minute
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 60000); // Change to 120000 for 2 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" onMouseMove={handleBasketMove}>
      {/* Message Box */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-indigo-600 text-white p-4 rounded shadow-lg w-64 text-center">
            <p className="font-bold">Amazing!</p>
            <p className="mt-2">You’re catching positivity with ease. Trust yourself, you're capable of anything!</p>
          </div>
        </div>
      )}

      {/* Basket */}
      <div
        ref={basketRef}
        className="absolute bottom-0 w-32 h-10 bg-indigo-600 rounded-t-lg"
        style={{ left: basketX }}
      />

      {/* Falling affirmations */}
      {fallingAffirmations.map((affirmation) => (
        <div
          key={affirmation.id}
          className="absolute p-2 text-center bg-white rounded shadow-md text-indigo-600"
          style={{
            left: affirmation.x,
            top: affirmation.y,
            width: affirmation.width, // Adjust width based on text size
          }}
        >
          {affirmation.text}
        </div>
      ))}
    </div>
  );
};

export default AffirmationCatcher;
