import { TextProps, TextVariants, TextWeight } from "./interfaces";
import cn from "classnames";
import "./style.css";
import { createElement } from "react";

export const Typography = ({
  variant = TextVariants.p,
  weight = TextWeight.regular,
  value,
  className,
  fontSize,
}: TextProps) => {
  return createElement(
    variant,
    {
      style: { fontSize: `${fontSize}px`, margin: 0 },
      className: cn(className, { [`text--weight-${weight}`]: weight }),
    },
    value
  );
};
