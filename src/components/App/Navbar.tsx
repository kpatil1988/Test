"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { NAV_LINKS, NAV_ACTIVE_BG_COLOUR, NAV_HOVER_BG_COLOUR, NAV_HOVER_TEXT_COLOUR } from "@/constants/app_constants";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {/* Sidebar */}
        <aside 
          className={`bg-black text-white flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-60' : 'w-16'}`}
        >
          {/* Navigation Links */}
          <nav
            className="flex-1"
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul className="space-y-1">
              {NAV_LINKS.map((link, index) => {
                const activePath = pathname.split("/")[2];
                const isActive = activePath === link.href;

                return (
                  <li key={index} className="border-b border-gray-700">
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-3 p-4 ${NAV_HOVER_BG_COLOUR} ${NAV_HOVER_TEXT_COLOUR} ${isActive ? NAV_ACTIVE_BG_COLOUR : ""} `}
                    >
                      <span className="text-xl">{link.icon}</span>
                      {/* Conditionally show label when the sidebar is open NAV_ACTIVE_BG_COLOUR*/}
                      {isOpen && <span className="text-md font-medium">{link.label}</span>}
                    </Link>
                  </li>
                );}
              )}
            </ul>
          </nav>
        </aside>
    </>
  );
};

export default Navbar;
