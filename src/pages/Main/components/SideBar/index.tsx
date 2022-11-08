import { useState } from "react";
import { Logo } from "@core/ui/Logo";
import { Typography } from "@core/ui/Typography";
import { SideBarItems } from "./constants";
import { SidebarItem } from "./SidebarItem";
import { HeaderWrapper, SidebarWrapperStyled } from "./styled";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [item, setItem] = useState(0);

  const navigate = useNavigate();

  return (
    <SidebarWrapperStyled>
      <HeaderWrapper onClick={() => navigate("/")}>
        <Logo width={32} />
        <Typography value="Dashboard Kit" />
      </HeaderWrapper>
      {SideBarItems.map(({ icon, text, to, id }) => (
        <SidebarItem
          active={item === id}
          id={id}
          key={id}
          icon={icon}
          text={text}
          to={to}
          onClick={() => setItem(id)}
        />
      ))}
    </SidebarWrapperStyled>
  );
};
