import React from "react";

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  isCloseButton?: boolean;
  className?: string;
}
