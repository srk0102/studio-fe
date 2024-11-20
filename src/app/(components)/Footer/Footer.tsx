"use client";

import React from "react";

const Sidebar = ({
    isCollapsed,
}: {
    isCollapsed: boolean;
    isSidebarVisible: boolean;
}) => {

<div className={`${isCollapsed ? "hidden" : "block"} mt-auto mb-10`}>
    <p className="text-center text-xs text-gray-500">
        &copy; 2025 THE BREETH
    </p>
</div>
};