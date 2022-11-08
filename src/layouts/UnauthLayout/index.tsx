import { Outlet } from "react-router-dom";

import { UnauthStyled } from "./styled";

export const UnauthLayout = () => {
  return (
    <UnauthStyled>
      <Outlet />
    </UnauthStyled>
  );
};
