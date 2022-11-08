import styled from "styled-components";
import { Icon } from "@core/ui/Icon";
import { Typography } from "@core/ui/Typography";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 54px;
`;

export const LeftSideWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
  }
`;

export const MiddleSideWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-right: 32px;
  border-right: 1px solid var(--lavender-pinocchio);
`;

export const RightSideWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconBellStyled = styled(Icon)`
  padding: 0 32px;
`;

export const UserNameStyled = styled(Typography)`
  margin-right: 14px !important;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

export const ArrowDownStyled = styled(Icon)<{ isOpen: boolean }>`
  margin-left: 15px;
  transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
`;
