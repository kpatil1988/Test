// components/Button.tsx
import React from 'react';

interface ButtonProps {
    text: string;
    hoverColor?: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, hoverColor = 'hover:bg-rose-400', onClick, className = '' }) => {
    return (
        <button
            className={`bg-black ${hoverColor} px-4 py-2 md:px-6 md:py-2 rounded text-white ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
