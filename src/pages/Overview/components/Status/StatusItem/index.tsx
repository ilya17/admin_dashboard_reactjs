import { StatusItemProps } from "./interfaces";
import { NumberStyled, StatusItemWrapperStyled, TitleStyled } from "./styled";

export const StatusItem = ({
  title,
  number,
  active,
  onClick,
}: StatusItemProps) => {
  return (
    <StatusItemWrapperStyled isAcitve={active} onClick={onClick}>
      <TitleStyled value={title} />
      <NumberStyled value={number} />
    </StatusItemWrapperStyled>
  );
};
