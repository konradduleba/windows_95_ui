import { FC } from "react";

import { BaseForm, useBaseForm } from "forms";

import {
  RegisterUserFormValues,
  registerUserValidationSchema,
  useFormDefaultValues,
} from "./form";

import {
  ConfirmPasswordInput,
  EmailInput,
  PasswordInput,
  RegisterIcon,
  RegisterInfo,
  TaskWindow,
  UsernameInput,
} from "./components";

import { useHandleRegisterSubmit } from "./hooks";

import styles from "./register-user.module.scss";

export const RegisterUser: FC = () => {
  const defaultValues = useFormDefaultValues();
  const { onSubmit } = useHandleRegisterSubmit();

  const formParams = useBaseForm<RegisterUserFormValues>({
    validationSchema: registerUserValidationSchema,
    defaultValues,
  });

  return (
    <BaseForm formParams={formParams} onSubmit={onSubmit}>
      <TaskWindow>
        <RegisterIcon />
        <div className={styles.container}>
          <RegisterInfo />
          <div className={styles.formFields}>
            <UsernameInput />
            <EmailInput />
            <PasswordInput />
            <ConfirmPasswordInput />
          </div>
        </div>
      </TaskWindow>
    </BaseForm>
  );
};
