import React from "react";

interface QuoteProps {
    text: string;
}

const Quote: React.FC<QuoteProps> = ({ text }) => {
    return (
        <div className="border p-4 mb-4 rounded-lg">
            <div className="justify-between text-center">
                <p className="text-xl first-letter:text-3xl dark:text-white">{text}</p>
            </div>
        </div>
    );
};

export default Quote;
