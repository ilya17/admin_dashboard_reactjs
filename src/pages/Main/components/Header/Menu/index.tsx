import { useNavigate } from "react-router-dom";
import Auth from "@core/store/Auth/Auth";
import { MenuProps } from "./interfaces";
import { ButtonStyled, MenuWrapperStyled } from "./styled";

export const Menu = ({ open }: MenuProps) => {
  const navigate = useNavigate();

  if (!open) return null;

  const logoutHandler = () => {
    Auth.LOGOUT();
    navigate("auth/login");
  };

  return (
    <MenuWrapperStyled>
      <ButtonStyled onClick={logoutHandler}>Выйти</ButtonStyled>
    </MenuWrapperStyled>
  );
};
