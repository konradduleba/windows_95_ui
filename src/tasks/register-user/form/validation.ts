import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

import { REGISTER_USER_FORM_NAME_KEYS, RegisterUserFormValues } from "./types";
import { ERROR_MESSAGES } from "./error-messages";

const EMAIL_REGEXP = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
);

const EMAIL_VALIDATION = yup
  .string()
  .matches(EMAIL_REGEXP, ERROR_MESSAGES.EMAIL.MATCH.id)
  .required(ERROR_MESSAGES.EMAIL.REQUIRED.id);

const PASSWORD_VALIDATION = yup
  .string()
  .password()
  .min(8, ERROR_MESSAGES.PASSWORD.MIN.id)
  .minLowercase(1, ERROR_MESSAGES.PASSWORD.MIN_LOWERCASE.id)
  .minUppercase(1, ERROR_MESSAGES.PASSWORD.MIN_UPPERCASE.id)
  .minSymbols(1, ERROR_MESSAGES.PASSWORD.MIN_SYMBOLS.id)
  .minNumbers(1, ERROR_MESSAGES.PASSWORD.MIN_NUMBERS.id)
  .required(ERROR_MESSAGES.PASSWORD.REQUIRED.id);

const CONFIRM_PASSWORD_VALIDATION = yup
  .string()
  .oneOf(
    [yup.ref(REGISTER_USER_FORM_NAME_KEYS.PASSWORD)],
    ERROR_MESSAGES.CONFIRM_PASSWORD.MATCH.id
  )
  .required(ERROR_MESSAGES.CONFIRM_PASSWORD.REQUIRED.id);

const USERNAME_VALIDATION = yup
  .string()
  .min(4, ERROR_MESSAGES.USERNAME.MIN)
  .required(ERROR_MESSAGES.USERNAME.REQUIRED);

export const registerUserValidationSchema: yup.ObjectSchema<RegisterUserFormValues> =
  yup.object({
    [REGISTER_USER_FORM_NAME_KEYS.USERNAME]: USERNAME_VALIDATION,
    [REGISTER_USER_FORM_NAME_KEYS.PASSWORD]: PASSWORD_VALIDATION,
    [REGISTER_USER_FORM_NAME_KEYS.EMAIL]: EMAIL_VALIDATION,
    [REGISTER_USER_FORM_NAME_KEYS.CONFIRM_PASSWORD]:
      CONFIRM_PASSWORD_VALIDATION,
  });
