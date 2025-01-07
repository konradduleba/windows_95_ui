import * as yup from "yup";

import { LOGIN_USER_FORM_NAME_KEYS, LoginUserFormValues } from "./types";

import { ERROR_MESSAGES } from "./error-messages";

const USERNAME_VALIDATION = yup
  .string()
  .required(ERROR_MESSAGES.USERNAME.REQUIRED);

const PASSWORD_VALIDATION = yup
  .string()
  .required(ERROR_MESSAGES.PASSWORD.REQUIRED);

export const loginUserValidationSchema: yup.ObjectSchema<LoginUserFormValues> =
  yup.object({
    [LOGIN_USER_FORM_NAME_KEYS.USERNAME]: USERNAME_VALIDATION,
    [LOGIN_USER_FORM_NAME_KEYS.PASSWORD]: PASSWORD_VALIDATION,
  });
