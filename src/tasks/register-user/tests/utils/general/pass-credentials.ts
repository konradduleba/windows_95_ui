import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";

import { REGISTER_USER_TEST_ID } from "@tasks/register-user/constants/register-user.consts";
import {
  REGISTER_CONFIRM_PASSWORD_TEST_ID,
  REGISTER_EMAIL_TEST_ID,
  REGISTER_PASSWORD_TEST_ID,
  REGISTER_USERNAME_TEST_ID,
} from "@tasks/register-user/form/consts";

import { changeTextValue } from "@forms/controllers/form-text-input/tests/utils";

type PassCredentialsProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const passCredentials = async ({
  username,
  email,
  password,
  confirmPassword,
}: PassCredentialsProps) => {
  const container = screen.getByTestId(REGISTER_USER_TEST_ID);

  const usernameInput = within(container).getByTestId(
    REGISTER_USERNAME_TEST_ID
  ) as HTMLInputElement;

  expect(usernameInput).toBeInTheDocument();

  const emailInput = within(container).getByTestId(
    REGISTER_EMAIL_TEST_ID
  ) as HTMLInputElement;
  expect(emailInput).toBeInTheDocument();

  const passwordInput = within(container).getByTestId(
    REGISTER_PASSWORD_TEST_ID
  ) as HTMLInputElement;
  expect(passwordInput).toBeInTheDocument();

  const confirmPasswordInput = within(container).getByTestId(
    REGISTER_CONFIRM_PASSWORD_TEST_ID
  ) as HTMLInputElement;
  expect(confirmPasswordInput).toBeInTheDocument();

  await changeTextValue({
    testId: REGISTER_USERNAME_TEST_ID,
    newValue: username,
  });

  await changeTextValue({
    testId: REGISTER_EMAIL_TEST_ID,
    newValue: email,
  });

  await changeTextValue({
    testId: REGISTER_PASSWORD_TEST_ID,
    newValue: password,
  });

  await changeTextValue({
    testId: REGISTER_CONFIRM_PASSWORD_TEST_ID,
    newValue: confirmPassword,
  });
};
