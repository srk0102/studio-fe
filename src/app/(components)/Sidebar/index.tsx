import { LucideIcon } from "lucide-react"

export interface SidebarPanelProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}
export { default } from "./Sidebar";
