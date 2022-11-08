import { FC } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./interfaces";

export const Modal: FC<ModalProps> = ({
  open,
  children,
  isCloseButton,
  onClose,
  className,
}) => {
  if (!open) return null;

  const modal = document.getElementById("modal") as HTMLElement;

  return ReactDOM.createPortal(
    <div className={className}>
      {isCloseButton && <button onClick={onClose}>x</button>}
      {children}
    </div>,
    modal
  );
};
