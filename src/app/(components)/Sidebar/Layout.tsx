"use client";

import React, { useState } from "react";

import Sidebar from "./Sidebar";
import {Navbar} from "../Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex h-screen">
            <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="flex-grow bg-gray-100 overflow-auto">
                <Navbar toggleSidebar={toggleSidebar} />
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
