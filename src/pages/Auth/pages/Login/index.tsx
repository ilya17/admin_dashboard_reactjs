import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@core/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

import { LinkStyled, LinkWrapperStyled } from "../Registration/styled";
import {
  CardStyled,
  LogoStyled,
  TitleStyled,
  SubtitleStyled,
  HintStyled,
  InputPasswordStyled,
  ButtonStyled,
  FormStyled,
} from "./styled";
import { observer } from "mobx-react-lite";
import Auth from "@core/store/Auth/Auth";
import { notifyError, notifySuccess } from "@core/utils/Toast/Toast";
import { LoginForm } from "@core/utils/Validations/interfaces";
import { loginSchema } from "@core/utils/Validations/UserValidation";

export const Login = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    if (Auth.LOGIN(data)) {
      navigate("/");
      notifySuccess("Вход выполнен");
    } else {
      notifyError("Пользователь не найден");
    }
  };

  useEffect(() => {
    if (Auth.ActiveUser) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <CardStyled>
        <LogoStyled />
        <TitleStyled>Dashboard Kit</TitleStyled>
        <SubtitleStyled>Log In to Dashboard Kit</SubtitleStyled>
        <HintStyled>Enter your email and password below</HintStyled>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            error={errors.email && errors.email.message}
            name="email"
            label="email"
            placeholder="Email address"
            onChange={(value) => setEmail(value)}
          />
          <InputPasswordStyled
            {...register("password")}
            error={errors.password && errors.password.message}
            name="password"
            label="password"
            onChange={(value) => setPassword(value)}
          />
          <ButtonStyled type="submit">Log In</ButtonStyled>
        </FormStyled>
        <LinkWrapperStyled>
          <HintStyled>Don't have an account?</HintStyled>
          <LinkStyled
            onClick={() => navigate("../registration", { replace: true })}
          >
            Register
          </LinkStyled>
        </LinkWrapperStyled>
      </CardStyled>
    </>
  );
});
