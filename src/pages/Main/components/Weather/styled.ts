import { Typography } from "@core/ui/Typography";
import styled from "styled-components";

export const WeatherWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  min-height: 81px;
  background-color: var(--very-pale-blue);
`;

export const TypographyNameStyled = styled(Typography)`
  font-size: 25px;
`;

export const TypographyTempStyled = styled(Typography)`
  font-size: 45px; ;
`;

export const IconWrapperStyled = styled.div`
  text-align: end;
`;

export const ImgStyled = styled.img`
  position: relative;
  top: -13px;
`;

export const LoaderWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
`;
