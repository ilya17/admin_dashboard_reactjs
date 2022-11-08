import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  value?: string;
  name?: string;
  error?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}
