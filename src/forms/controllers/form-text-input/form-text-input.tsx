import { FC } from "react";
import cn from "classnames";

import { FormTextInputProps } from "./types";

import { useHandleValueChange } from "./hooks";

import { ErrorMessage, Label } from "./components";

import styles from "./form-text-input.module.scss";

export const FormTextInput: FC<FormTextInputProps> = ({
  name,
  testId,
  label,
  isPassword,
}) => {
  const { value, isInvalid, onHandleChange, errorMessage } =
    useHandleValueChange({ name });

  return (
    <div className={styles.container} data-testid={`${testId}-container`}>
      {label && <Label htmlFor={testId}>{label}</Label>}
      <div className={styles.content}>
        <input
          id={testId}
          type={isPassword ? "password" : "text"}
          value={value}
          onChange={onHandleChange}
          className={cn(styles.input, { [styles.invalid]: isInvalid })}
          data-testid={testId}
        />
        {errorMessage && <ErrorMessage messageId={errorMessage} />}
      </div>
    </div>
  );
};
