import styled from "styled-components";
import { Card } from "@core/ui/Card";
import { InputPassword } from "@core/ui/inputPassword";
import { Logo } from "@core/ui/Logo";

export const CardStyled = styled(Card)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoStyled = styled(Logo)`
  margin-bottom: 12px;
`;

export const TitleStyled = styled.span`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: var(--grey-chateau);
  opacity: 0.7;
`;

export const SubtitleStyled = styled.span`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  border: 1px solid var(--white);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HintStyled = styled.span`
  margin-bottom: 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: var(--santa-grey);
`;

export const InputPasswordStyled = styled(InputPassword)`
  margin-top: 24px;
`;

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 15px 24px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;

  text-align: center;
  letter-spacing: 0.2px;

  color: var(--white);
  background: var(--blue-orchid);

  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
`;

export const FormStyled = styled.form`
  width: 100%;
`;
