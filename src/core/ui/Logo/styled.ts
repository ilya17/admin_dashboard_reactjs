import styled from "styled-components";

export const LogoStyled = styled.img<{ width: number }>`
  width: ${({ width }) => `${width}px`};
`;
