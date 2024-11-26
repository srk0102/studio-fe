"use client";

import React, { useState } from "react";

import Sidebar from "./Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex h-screen">
            <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

            <main className="flex-grow bg-gray-100 overflow-auto p-6">
                {children}
            </main>
        </div>
    );
};
