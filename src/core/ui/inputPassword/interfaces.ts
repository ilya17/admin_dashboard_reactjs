import { InputProps } from "../input/interfaces";

export interface InputPassworpProps
  extends Omit<InputProps, "type" | "placeholder"> {}
