import styled from "styled-components";
import { Typography } from "@core/ui/Typography";

export const MainWrapperStyled = styled.div`
  display: flex;
  height: inherit;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 30px 33px;
  background-color: var(--ghost-white);
`;

export const MainTypographyStyled = styled(Typography)`
  font-size: 50px;
`;
