import { FC } from "react";

import { BaseForm, useBaseForm } from "forms";

import {
  LoginUserFormValues,
  loginUserValidationSchema,
  useFormDefaultValues,
} from "./form";

import {
  LoginIcon,
  LoginInfo,
  PasswordInput,
  TaskWindow,
  UsernameInput,
} from "./components";

import { useHandleLoginSubmit } from "./hooks";

import styles from "./login-user.module.scss";

export const LoginUser: FC = () => {
  const defaultValues = useFormDefaultValues();
  const { onSubmit } = useHandleLoginSubmit();

  const formParams = useBaseForm<LoginUserFormValues>({
    validationSchema: loginUserValidationSchema,
    defaultValues,
  });

  return (
    <BaseForm formParams={formParams} onSubmit={onSubmit}>
      <TaskWindow>
        <LoginIcon />
        <div className={styles.container}>
          <LoginInfo />
          <div className={styles.formFields}>
            <UsernameInput />
            <PasswordInput />
          </div>
        </div>
      </TaskWindow>
    </BaseForm>
  );
};
