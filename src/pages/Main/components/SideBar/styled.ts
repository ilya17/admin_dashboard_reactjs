import styled from "styled-components";

export const SidebarWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  background-color: var(--tuna);
  padding: 37px 32px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 59px;
  cursor: pointer;

  & > p {
    margin-left: 12px !important;
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: var(--grey-chateau);
  }
`;
