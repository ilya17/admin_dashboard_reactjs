import { forwardRef, Ref, useState } from "react";
import { InputPassworpProps } from "./interfaces";
import {
  ErrorMessageStyled,
  IconWrappersStyled,
  InputPasswordStyled,
} from "./styled";

import IconEye from "@assets/active.svg";

export const InputPassword = forwardRef(
  (
    { label, onChange, className, error, ...props }: InputPassworpProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <>
        <InputPasswordStyled
          hasError={(error && true) || false}
          label={label}
          ref={ref}
          {...props}
          onChange={(value) => onChange(value)}
          placeholder="Password"
          type={(showPassword && "text") || "password"}
          className={className}
        />
        <IconWrappersStyled onClick={() => setShowPassword(!showPassword)}>
          <img src={IconEye} alt="icon_password" />
        </IconWrappersStyled>
        {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
      </>
    );
  }
);
