import React from "react";

interface ContentCardProps {
    title: string;
    subtitle: string;
    content: string;
    className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, content, className }) => {
    return (
        <>
            <div className={`w-auto border p-4 mb-4 rounded-lg dark:text-white ${className || ""}`}>
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm mt-1.5 text-gray-400">{subtitle}</p>
                </div>
                <div className="mt-4">
                    <p className="text-md dark:text-white">{content}</p>
                </div>
            </div>
        </>
    );
};

export default ContentCard;
