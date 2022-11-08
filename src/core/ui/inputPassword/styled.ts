import styled from "styled-components";
import { Input } from "../input";

export const InputPasswordStyled = styled(Input)<{ hasError: boolean }>`
  & > input {
    padding-right: 44px;
  }
`;

export const IconWrappersStyled = styled.div`
  position: relative;
  width: max-content;
  bottom: 32px;
  left: 346px;
  text-align: right;
  cursor: pointer;
`;

export const ErrorMessageStyled = styled.div`
  margin-top: -24px;
  font-size: 14px;
  color: red;
`;
