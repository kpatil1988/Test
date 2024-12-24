"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

interface GetStartedButtonProps {
    className?: string;
    hoverColor?: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
    className = "",
    hoverColor = "hover:bg-violet-400",
}) => {
    return (
        <Link href="/get-started">
            <Button
                text="Get Started"
                hoverColor={hoverColor}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-lg dark:border-2 dark:border-white ${className}`}
            />
        </Link>
    );
};

export default GetStartedButton;
