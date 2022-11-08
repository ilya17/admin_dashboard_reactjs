import { IconTypes } from "@core/ui/Icon/constants";

export interface SidebarItemProps {
  icon: keyof typeof IconTypes;
  text: string;
  to: string;
  id: number;
  active: boolean;
  onClick: (id: number) => void;
}

export interface SidebarItem {
  icon: keyof typeof IconTypes;
  text: string;
  to: string;
  id: number;
}
