"use client";
import React, { useRef, useState, useEffect } from 'react';

const ZenScribbler: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [fadeTime, setFadeTime] = useState<number>(5000); // Time in milliseconds for lines to fade
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [reflection, setReflection] = useState<string>(''); // State for reflection input
  const [showReflectionInput, setShowReflectionInput] = useState<boolean>(false); // Visibility of the reflection input
  const [upliftingMessage, setUpliftingMessage] = useState<string | null>(null); // State for the uplifting message

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = 'rgba(0, 0, 0, 0.8)'; // Ensure the stroke color is dark enough
        setCtx(context);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    ctx?.beginPath(); // Reset path after finishing drawing

    // Show reflection input after 10 seconds of mouse up
    setTimeout(() => {
      setShowReflectionInput(true);
    }, 10000);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    const x = e.clientX - (rect?.left || 0);
    const y = e.clientY - (rect?.top || 0);

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Clear the canvas after the fadeTime with fading effect
    setTimeout(() => {
      ctx.globalCompositeOperation = 'destination-out'; // Set to erase
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // White with a bit of opacity
      ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      ctx.globalCompositeOperation = 'source-over'; // Reset to normal
    }, fadeTime); // Use fadeTime here
  };

  // Handle window resize to adjust canvas size
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to set a new fade time (for demonstration purposes)
  const handleFadeTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFadeTime(Number(event.target.value));
  };

  // Handle reflection input change
  const handleReflectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReflection(e.target.value);

    // Clear the uplifting message when the user starts typing again
    if (upliftingMessage) {
      setUpliftingMessage(null);
    }
  };

  // Submit the reflection input
  const handleReflectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reflection.trim()) {
      setUpliftingMessage('Please reflect on your thoughts. You are doing great!');
      return;
    }

    setUpliftingMessage('Thank you for sharing! Remember, you are loved and cherished. 💖');
    setReflection('');
  };

  return (
    <div className="relative bg-white">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        className="cursor-crosshair"
      />

      {/* Centered Card */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="p-4 max-w-md bg-indigo-600 text-white shadow-lg rounded-lg mt-4">
          <p className="text-md font-light text-center">
            Life brings many ups and downs, and sometimes, some of the thoughts or some aspects of everyday life
            may feel overwhelming. Remember, these feelings will pass.
            <br />At your core, you are pure love. You embody joy and positivity.
          </p>
        </div>
      </div>

      {/* Reflection Input Form - below the card */}
      {showReflectionInput && (
        <div className="absolute top-48 left-0 right-0 flex justify-center">
          <form onSubmit={handleReflectionSubmit} className="bg-white p-4 shadow-lg rounded-lg">
            <label htmlFor="reflection" className="block text-gray-800 font-medium">
              Reflect on your feelings:
            </label>
            <input
              id="reflection"
              type="text"
              value={reflection}
              onChange={handleReflectionChange}
              className="mt-2 px-4 py-2 border rounded w-full text-black"
              placeholder="Type your thoughts here..."
            />
            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Submit Reflection
            </button>
          </form>
        </div>
      )}

      {/* Uplifting Message */}
      {upliftingMessage && (
        <div className="absolute top-96 left-0 right-0 flex justify-center">
          <p className="text-md font-bold text-center text-indigo-600 mt-4">{upliftingMessage}</p>
        </div>
      )}

      {/* Fade Time Input */}
      <div className="absolute bottom-4 left-4">
        <label htmlFor="fadeTime" className="text-black">
          Fade Time (ms):
        </label>
        <input
          id="fadeTime"
          type="number"
          value={fadeTime}
          onChange={handleFadeTimeChange}
          className="ml-2 px-2 border rounded"
        />
      </div>
    </div>
  );
};

export default ZenScribbler;
