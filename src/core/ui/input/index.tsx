import React, { forwardRef, Ref } from "react";
import { useState } from "react";
import { InputProps } from "./interfaces";
import {
  ErrorMessageStyled,
  InputStyled,
  InputWrapperStyled,
  LabelStyled,
} from "./styled";

export const Input = forwardRef(
  (
    {
      placeholder,
      type = "text",
      label,
      name,
      error,
      value,
      onChange,
      className,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <InputWrapperStyled className={className}>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled
          hasError={(error && true) || false}
          name={name}
          ref={ref}
          {...props}
          autoComplete="off"
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          type={type}
        ></InputStyled>
        {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
      </InputWrapperStyled>
    );
  }
);
