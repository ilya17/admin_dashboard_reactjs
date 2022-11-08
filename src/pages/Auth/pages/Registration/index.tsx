import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardStyled,
  LogoStyled,
  TitleStyled,
  SubtitleStyled,
  HintStyled,
  InputPasswordStyled,
  ButtonStyled,
  LinkStyled,
  LinkWrapperStyled,
  ConfirmPasswordStyled,
  FormStyled,
} from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { Input } from "@core/ui/input";
import { registerSchema } from "@core/utils/Validations/UserValidation";
import Auth from "@core/store/Auth/Auth";
import { notifyError, notifySuccess } from "@core/utils/Toast/Toast";
import { RegisterForm } from "@core/utils/Validations/interfaces";
import { UserRegisterData } from "@core/store/Auth/interfaces";

export const Registration = observer(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    if (Object.keys(errors).length === 0) {
      const user: UserRegisterData = {
        name: data.name,
        mail: data.email,
        password: data.password,
      };
      if (Auth.CREATE_NEW_USER(user)) {
        navigate("/");
        notifySuccess("Добро пожаловать");
      } else {
        notifyError("Такой пользователь уже существует");
      }
    }
  };

  useEffect(() => {
    if (Auth.ActiveUser) {
      navigate("/");
    }
  }, []);

  return (
    <CardStyled>
      <LogoStyled />
      <TitleStyled>Dashboard Kit</TitleStyled>
      <SubtitleStyled>Log Up to Dashboard Kit</SubtitleStyled>
      <HintStyled>
        Enter your email, password and confirm password below
      </HintStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name")}
          error={errors.name?.message}
          name="name"
          label="name"
          value={name}
          placeholder="Your name"
          onChange={(value) => setName(value)}
        />
        <Input
          {...register("email")}
          error={errors.email?.message}
          name="email"
          value={email}
          label="email"
          placeholder="Email address"
          onChange={(value) => setEmail(value)}
        />
        <InputPasswordStyled
          {...register("password")}
          error={errors.password?.message}
          name="password"
          value={password}
          label="password"
          onChange={(value: string) => setPassword(value)}
        />
        <ConfirmPasswordStyled
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
          name="confirmPassword"
          value={confirmPassword}
          label="confirm password"
          onChange={(value: string) => setConfirmPassword(value)}
        />
        <ButtonStyled type="submit">Sign Up</ButtonStyled>
      </FormStyled>
      <LinkWrapperStyled>
        <HintStyled>Do you have an account?</HintStyled>
        <LinkStyled onClick={() => navigate("../login", { replace: true })}>
          Sign In
        </LinkStyled>
      </LinkWrapperStyled>
    </CardStyled>
  );
});
