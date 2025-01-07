import { LoginUserFormValues } from "./types";

export const useFormDefaultValues = (): LoginUserFormValues => {
  return {
    username: "",
    password: "",
  };
};
