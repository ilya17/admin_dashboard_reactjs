import { Icon } from "@core/ui/Icon";
import { Typography } from "@core/ui/Typography";
import {
  ArrowDownStyled,
  HeaderWrapper,
  IconBellStyled,
  LeftSideWrapperStyled,
  MiddleSideWrapperStyled,
  RightSideWrapperStyled,
  UserNameStyled,
} from "./styled";
import Photo from "@assets/photo.png";
import { useState } from "react";
import { Menu } from "./Menu";
import { useLocation } from "react-router-dom";
import Auth from "@core/store/Auth/Auth";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const getPathName = (value: string) => {
    const parthName = value.substring(1);
    return parthName.charAt(0).toUpperCase() + parthName.slice(1);
  };

  return (
    <HeaderWrapper>
      <LeftSideWrapperStyled>
        <Typography value={getPathName(location.pathname)} />
      </LeftSideWrapperStyled>
      <RightSideWrapperStyled>
        <MiddleSideWrapperStyled>
          <Icon iconType="search" />
          <IconBellStyled iconType="bell" />
        </MiddleSideWrapperStyled>
        <UserNameStyled
          value={(Auth.ActiveUser && Auth.ActiveUser.name) || ""}
        />
        <img src={Photo} alt="user" />
        <div onClick={() => setOpenMenu(!openMenu)}>
          <ArrowDownStyled isOpen={openMenu} iconType="arrowDown" />
        </div>
      </RightSideWrapperStyled>
      <Menu open={openMenu} />
    </HeaderWrapper>
  );
};
