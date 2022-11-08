import * as yup from "yup";

const requiredAttentionText = "Поле обязательно для заполнения";
const lengthAttentionText = "Длинна должна быть не менее 6 символов";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required(requiredAttentionText)
    .min(3, "Длинна не менее 3 символов")
    .max(27, "Длинна не более 27 символов"),
  email: yup.string().email().required(requiredAttentionText),
  password: yup
    .string()
    .required(requiredAttentionText)
    .min(6, lengthAttentionText),
  confirmPassword: yup
    .string()
    .required(requiredAttentionText)
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(requiredAttentionText),
  password: yup
    .string()
    .required(requiredAttentionText)
    .min(6, lengthAttentionText),
});
