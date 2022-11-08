import { IconTypes } from "./constants";

export interface IconProps {
  iconType: keyof typeof IconTypes;
  className?: string;
}
