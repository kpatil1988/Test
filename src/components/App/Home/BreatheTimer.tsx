import React from "react";
import Breathe from "@/components/App/InAppExercises/Breathe";

const BreatheTimer: React.FC = () => {
    return (
        <div className="w-2/6 border p-4 mb-4 rounded-lg dark:text-white">
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Breathe</h2>
                <p className="text-sm mt-1.5 text-gray-400">Take a pause</p>
            </div>
            <div className="mt-4">
                <Breathe />
            </div>
        </div>
    );
};

export default BreatheTimer;
