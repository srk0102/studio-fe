"use client";

import React, { useState } from "react";

import { Sidebar } from "./Sidebar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarCollapsed] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex h-screen">
            <button
                onClick={toggleSidebar}
                className="absolute top-4 left-4 z-50 md:hidden text-gray-500"
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

            <Sidebar
                isCollapsed={isSidebarCollapsed}
                isSidebarVisible={isSidebarVisible}
            />

            <main className="flex-grow bg-gray-100 overflow-auto p-6">
                {children}
            </main>
        </div>
    );
};