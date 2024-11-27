"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import Link from "next/link";

import { setIsDarkMode } from "@/state";
import { Bell, Moon, Settings, Sun } from "lucide-react";

interface NavbarProps {
    toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    };

    return (
        <div className="flex justify-between items-center w-full mb-7 bg-white shadow-md px-4 py-3 md:px-6">
            <div className="flex items-center gap-4 relative flex-grow max-w-sm mr-4 md:mr-6">
                <button
                    onClick={toggleSidebar}
                    className="p-2 bg-gray-800 text-white rounded md:hidden"
                    aria-label="Toggle Sidebar"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <input
                    type="search"
                    placeholder="Search for plugins"
                    className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="flex items-center gap-5">
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <Sun className="cursor-pointer text-gray-500" size={24} />
                    ) : (
                        <Moon className="cursor-pointer text-gray-500" size={24} />
                    )}
                </button>
                <div className="relative">
                    <Bell className="cursor-pointer text-gray-500" size={24} />
                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                        3
                    </span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                    <span className="font-semibold">User</span>
                </div>

                <Link href="/settings">
                    <Settings className="cursor-pointer text-gray-500" size={24} />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
