import React from 'react';

interface CardProps {
    name: string;
    title: string;
    content: string;
    cardClasses: string;
}

const Card: React.FC<CardProps> = ({ name, title, content, cardClasses }) => (
    <div className={cardClasses}>
        <h3 className="text-md mb-2">{name.toUpperCase()}</h3>
        <h3 className="text-xl font-bold mb-6 p-1 bg-white text-black">{title}</h3>
        <p className="text-md">{content}</p>
    </div>
);

export default Card;