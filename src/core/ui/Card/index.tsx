import { FC } from "react";
import { CardProps } from "./interfaces";
import { CardStyled } from "./styled";

export const Card: FC<CardProps> = ({ children, className }) => {
  return <CardStyled className={className}>{children}</CardStyled>;
};
