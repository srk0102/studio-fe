"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode } from "@/state";
import { Bell, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Manage sidebar visibility state

    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    };


    // Function to toggle sidebar visibility

    return (
        <div className="flex justify-between items-center w-full mb-7 bg-white shadow-md px-4 py-3 md:px-6">
            <div className="flex items-center gap-4 relative flex-grow max-w-sm mr-4 md:mr-6">

                {/* Search Bar */}
                <input
                    type="search"
                    placeholder="Search for plugins"
                    className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="flex items-center gap-5">
                {/* Dark Mode Toggle Button */}
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <Sun className="cursor-pointer text-gray-500" size={24} />
                    ) : (
                        <Moon className="cursor-pointer text-gray-500" size={24} />
                    )}
                </button>

                {/* Notification Bell with Badge */}
                <div className="relative">
                    <Bell className="cursor-pointer text-gray-500" size={24} />
                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                        3
                    </span>
                </div>

                {/* User and Settings */}
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
