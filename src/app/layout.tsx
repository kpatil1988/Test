import "../styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: process.env.APP_NAME || "Golden Minds",
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Your journey of joy and balance starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-white text-black dark:bg-black font-serif text-primary dark:text-white">
        <Toaster position="bottom-center"/>
        {children}
      </body>
    </html>
  );
}
