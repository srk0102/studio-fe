"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SidebarPanelProps } from "../interface"

export const SidebarPanel = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
}: SidebarPanelProps) => {
    const pathname = usePathname();
    const isActive =
        pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href}>
            <div
                className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
                    } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""
                    }`}
            >
                <Icon className="w-6 h-6 !text-gray-700" />
                <span
                    className={`${isCollapsed ? "hidden" : "block"
                        } font-medium text-gray-700`}
                >
                    {label}
                </span>
            </div>
        </Link>
    );
};