import { Outlet } from "react-router-dom";
import { AuthStyled } from "./styled";

export const AuthLayout = () => {
  return (
    <AuthStyled>
      <Outlet />
    </AuthStyled>
  );
};
