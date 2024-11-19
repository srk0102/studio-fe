"use client";

import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout as LayoutIcon, // Renamed Layout to LayoutIcon
  LucideIcon,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface SidebarPanelProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarPanel = ({
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
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = ({
  isCollapsed,
  isSidebarVisible,
}: {
  isCollapsed: boolean;
  isSidebarVisible: boolean;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md transition-transform duration-300 z-40 ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0 md:w-64 flex flex-col`}
    >
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between items-center pt-8 ${
          isCollapsed ? "px-5" : "px-8"
        }`}
      >
        <h1
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          THE BREETH
        </h1>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarPanel
          href="/dashboard"
          icon={LayoutIcon}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />
        <SidebarPanel
          href="/featured"
          icon={Archive}
          label="Featured"
          isCollapsed={isCollapsed}
        />
        <SidebarPanel
          href="/plugins"
          icon={Clipboard}
          label="Plugins"
          isCollapsed={isCollapsed}
        />
        <SidebarPanel
          href="/users"
          icon={User}
          label="User Management"
          isCollapsed={isCollapsed}
        />
        <SidebarPanel
          href="/analytics"
          icon={CircleDollarSign}
          label="Analytics"
          isCollapsed={isCollapsed}
        />
        <SidebarPanel
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isCollapsed ? "hidden" : "block"} mt-auto mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2025 THE BREETH
        </p>
      </div>
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed] = useState(false); // Sidebar always expanded by default
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility on mobile

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle the sidebar visibility
  };

  return (
    <div className="flex h-screen">
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-50 md:hidden text-gray-500"
      >
        {/* Hamburger Icon - Three Horizontal Lines */}
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

      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isSidebarVisible={isSidebarVisible}
      />

      {/* Main content */}
      <main className="flex-grow bg-gray-100 overflow-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
