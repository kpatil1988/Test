"use client";
import React, { useEffect, useState } from "react";
import AppNameHeader from "@/components/AppNameHeader";

const AppHeader: React.FC = () => {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      setTimestamp(now.toLocaleTimeString());
    };

    updateTimestamp();
    const intervalId = setInterval(updateTimestamp, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="bg-black w-full flex items-center justify-between">
        <div className="p-4">
          <AppNameHeader />
        </div>
        <div className="text-gray-300 text-sm pr-4">
          Your Local Time: {timestamp}
        </div>
      </div>
      <div className="border-b border-gray-700"></div>
    </>
  );
};

export default AppHeader;
