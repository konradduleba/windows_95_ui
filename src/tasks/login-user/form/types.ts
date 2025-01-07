export enum LOGIN_USER_FORM_NAME_KEYS {
  USERNAME = "username",
  PASSWORD = "password",
}

export type LoginUserFormValues = {
  [LOGIN_USER_FORM_NAME_KEYS.USERNAME]: string;
  [LOGIN_USER_FORM_NAME_KEYS.PASSWORD]: string;
};
