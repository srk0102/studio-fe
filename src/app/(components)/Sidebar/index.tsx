import { LucideIcon } from "lucide-react"

export interface SidebarPanelProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}