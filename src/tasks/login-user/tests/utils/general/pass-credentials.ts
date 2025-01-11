import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";

import { changeTextValue } from "@forms/controllers/form-text-input/tests/utils";

import { LOGIN_USER_TEST_ID } from "@tasks/login-user/constants";
import {
  LOGIN_USERNAME_TEST_ID,
  LOGIN_PASSWORD_TEST_ID,
} from "@tasks/login-user/form/consts";

type PassCredentialsProps = {
  username: string;
  password: string;
};

export const passCredentials = async ({
  username,
  password,
}: PassCredentialsProps) => {
  const container = screen.getByTestId(LOGIN_USER_TEST_ID);

  const usernameInput = within(container).getByTestId(LOGIN_USERNAME_TEST_ID);
  expect(usernameInput).toBeInTheDocument();

  const passwordInput = within(container).getByTestId(LOGIN_PASSWORD_TEST_ID);
  expect(passwordInput).toBeInTheDocument();

  await changeTextValue({
    testId: LOGIN_USERNAME_TEST_ID,
    newValue: username,
  });

  await changeTextValue({
    testId: LOGIN_PASSWORD_TEST_ID,
    newValue: password,
  });
};
