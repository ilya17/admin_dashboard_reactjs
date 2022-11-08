import { useNavigate } from "react-router-dom";
import { Icon } from "@core/ui/Icon";
import { Typography } from "@core/ui/Typography";
import { SidebarItemProps } from "./interfaces";
import { SidebarItemWrapper } from "./styled";

export const SidebarItem = ({
  to,
  icon,
  text,
  active,
  id,
  onClick,
}: SidebarItemProps) => {
  const navigate = useNavigate();

  const clickHandler = (to: string) => {
    onClick(id);
    navigate(to);
  };

  return (
    <SidebarItemWrapper isActive={active} onClick={() => clickHandler(to)}>
      <Icon iconType={icon} />
      <Typography value={text} />
    </SidebarItemWrapper>
  );
};
