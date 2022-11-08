import AppLogo from "@assets/logo.svg";
import { LogoProps } from "./interfaces";
import { LogoStyled } from "./styled";

export const Logo = ({ width = 48, className }: LogoProps) => {
  return (
    <LogoStyled className={className} width={width} src={AppLogo}></LogoStyled>
  );
};
