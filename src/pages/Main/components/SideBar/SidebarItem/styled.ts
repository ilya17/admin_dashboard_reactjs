import styled from "styled-components";

export const SidebarItemWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 32px;
  cursor: pointer;
  border-left: 2px solid transparent;
  background-color: ${({ isActive }) => isActive && "rgba(164, 166, 179, 0.3)"};
  border-left: ${({ isActive }) =>
    isActive && "2px solid var(--very-pale-blue)"};

  &:hover {
    background-color: rgba(164, 166, 179, 0.3);
    border-left: 2px solid var(--very-pale-blue);

    & > p {
      color: var(--very-pale-blue);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  & > p {
    margin: 0 0 0 24px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: var(--very-pale-blue);
  }
`;
