import styled from "styled-components";

export const LogoStyled = styled.img<{ width: number }>`
  width: ${({ width }) => `${width}px`};
`;

export const InputStyled = styled.input<{ hasError: boolean }>`
  padding: 11px 8px 11px 16px;
  border: ${({ hasError }) =>
    (hasError && "1px solid var(--error)") || "1px solid var(--porcelain)"};
  border-radius: 8px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: var(--mulled-wine);
  background: var(--pale-grey);
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const LabelStyled = styled.label`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: var(--santa-grey);
`;

export const ErrorMessageStyled = styled.div`
  font-size: 14px;
  color: red;
`;
