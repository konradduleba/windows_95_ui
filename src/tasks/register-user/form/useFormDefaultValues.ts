import { RegisterUserFormValues } from "./types";

export const useFormDefaultValues = (): RegisterUserFormValues => {
  return {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
};
