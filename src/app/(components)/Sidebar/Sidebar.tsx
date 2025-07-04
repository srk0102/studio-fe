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

export const Sidebar = ({
    isCollapsed,
    isSidebarVisible,
}: {
    isCollapsed: boolean;
    isSidebarVisible: boolean;
}) => {
    const sidebarItems = [
        { href: "/dashboard", icon: LayoutIcon, label: "Dashboard" },
        { href: "/featured", icon: Archive, label: "Featured" },
        { href: "/plugins", icon: Clipboard, label: "Plugins" },
        { href: "/users", icon: User, label: "User Management" },
        { href: "/analytics", icon: CircleDollarSign, label: "Analytics" },
        { href: "/settings", icon: SlidersHorizontal, label: "Settings" },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform duration-300 z-40 ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"
                } md:static md:translate-x-0 md:w-64 flex flex-col`}
        >
            <div
                className={`flex gap-3 justify-between items-center pt-8 ${isCollapsed ? "px-5" : "px-8"
                    }`}
            >
                <h1
                    className={`${isCollapsed ? "hidden" : "block"
                        } font-extrabold text-2xl`}
                >
                    THE BREETH
                </h1>
            </div>

            <div className="flex-grow mt-8">
                {sidebarItems.map((item) => (
                    <SidebarPanel
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        isCollapsed={isCollapsed}
                    />
                ))}
            </div>

            <div className={`${isCollapsed ? "hidden" : "block"} mt-auto mb-10`}>
                <p className="text-center text-xs text-gray-500">
                    &copy; 2025 THE BREETH
                </p>
            </div>
        </div>
    );
};
