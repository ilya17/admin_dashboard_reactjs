import styled from "styled-components";

export const MenuWrapperStyled = styled.div`
  position: absolute;
  right: 32px;
  z-index: 100;
  top: 100px;
  width: 200px;
  border-radius: 15px;
  padding: 15px 10px;
  background: var(--white);
  box-shadow: 0px 56px 40px -40px rgba(0, 0, 0, 0.24),
    0px 0px 24px rgba(0, 0, 0, 0.08);
`;

export const ButtonStyled = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
