import { Typography } from "@core/ui/Typography";
import styled from "styled-components";

export const StatusItemWrapperStyled = styled.div<{ isAcitve: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 258px;
  padding: 24px 32px;
  cursor: pointer;
  border-radius: 8px;
  background-color: var(--white);
  border: ${({ isAcitve }) =>
    (isAcitve && "1px solid var(--blue-orchid)") ||
    "1px solid var(--lavender-pinocchio)"};

  p {
    color: ${({ isAcitve }) => isAcitve && "var(--blue-orchid)"};
  }

  &:hover {
    border: 1px solid var(--blue-orchid);

    p {
      color: var(--blue-orchid);
    }
  }
`;

export const TitleStyled = styled(Typography)`
  margin-bottom: 12px !important;
  color: var(--santa-grey);
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
`;

export const NumberStyled = styled(Typography)`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 1px;
`;
