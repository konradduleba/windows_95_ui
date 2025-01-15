export enum REGISTER_AUTO_COMPLETE_KEYS {
  USERNAME = "username",
  PASSWORD = "new-password",
}

export enum REGISTER_USER_FORM_NAME_KEYS {
  EMAIL = "email",
  USERNAME = "username",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
}

export type RegisterUserFormValues = {
  [REGISTER_USER_FORM_NAME_KEYS.USERNAME]: string;
  [REGISTER_USER_FORM_NAME_KEYS.PASSWORD]: string;
  [REGISTER_USER_FORM_NAME_KEYS.EMAIL]: string;
  [REGISTER_USER_FORM_NAME_KEYS.CONFIRM_PASSWORD]: string;
};
