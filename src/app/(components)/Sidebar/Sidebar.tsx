"use client";

import React from "react";

import {
    Archive,
    CircleDollarSign,
    Clipboard,
    Layout as LayoutIcon,
    SlidersHorizontal,
    User,
} from "lucide-react";

import { SidebarPanel } from "./SidebarPanel";

interface SidebarProps {
    isSidebarVisible: boolean;
    toggleSidebar: () => void; // Fix: Use the passed toggleSidebar function
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarVisible, toggleSidebar }) => {
    const sidebarItems = [
        { href: "/dashboard", icon: LayoutIcon, label: "Dashboard" },
        { href: "/featured", icon: Archive, label: "Featured" },
        { href: "/plugins", icon: Clipboard, label: "Plugins" },
        { href: "/users", icon: User, label: "User Management" },
        { href: "/analytics", icon: CircleDollarSign, label: "Analytics" },
        { href: "/settings", icon: SlidersHorizontal, label: "Settings" },
    ];

    return (
        <div className="relative">
            {/* Sidebar container */}
            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform duration-300 z-40 ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:static md:w-64 flex flex-col`}
                style={{ height: "calc(100vh)" }}
            >
                {/* Sidebar Header */}
                <div className="flex items-center gap-4 py-4 px-6">
                    <h1 className="font-extrabold text-2xl">THE BREETH</h1>
                </div>

                {/* Sidebar Items */}
                <div className="flex-grow mt-8">
                    {sidebarItems.map((item) => (
                        <SidebarPanel
                            key={item.href}
                            href={item.href}
                            icon={item.icon}
                            label={item.label}
                            isCollapsed={false} // Always show labels for larger screens
                        />
                    ))}
                </div>

                {/* Sidebar Footer */}
                <div className="mt-auto mb-4">
                    <p className="text-center text-xs text-gray-500">
                        &copy; 2025 THE BREETH
                    </p>
                </div>
            </div>

            {/* Overlay for smaller screens */}
            {isSidebarVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar} // Fix: Use the toggleSidebar function here
                />
            )}
        </div>
    );
};

export default Sidebar;
