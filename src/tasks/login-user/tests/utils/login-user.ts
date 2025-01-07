import { expect } from "vitest";

import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOGIN_USER_TEST_ID } from "@tasks/login-user/constants";
import { RESPONSE_ERROR_TEST_ID } from "@tasks/response-error/constants";
import {
  LOGIN_PASSWORD_TEST_ID,
  LOGIN_USERNAME_TEST_ID,
} from "@tasks/login-user/form/consts";

import { changeTextValue } from "@forms/controllers/form-text-input/tests/utils";

import { START_BUTTON_TEST_ID } from "@layouts/desktop/components/start-menu/components/start-button/constants";

import { EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import { MEDIUM_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

const USERNAME = process.env.TEST_USERNAME || "";
const PASSWORD = process.env.TEST_PASSWORD || "";

export const loginUser = async () => {
  const container = screen.getByTestId(LOGIN_USER_TEST_ID);

  const usernameInput = within(container).getByTestId(LOGIN_USERNAME_TEST_ID);
  expect(usernameInput).toBeInTheDocument();

  const passwordInput = within(container).getByTestId(LOGIN_PASSWORD_TEST_ID);
  expect(passwordInput).toBeInTheDocument();

  await changeTextValue({
    testId: LOGIN_USERNAME_TEST_ID,
    newValue: USERNAME,
  });

  await changeTextValue({
    testId: LOGIN_PASSWORD_TEST_ID,
    newValue: PASSWORD,
  });

  const submitButton = within(container).getByTestId(
    EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID
  );

  await userEvent.click(submitButton);

  await waitFor(async () => {
    const errorContainer = screen.queryByTestId(RESPONSE_ERROR_TEST_ID);

    if (errorContainer) {
      expect(errorContainer).toBeInTheDocument();
      throw new Error("Incorrect credentials provided");
    } else {
      const startButton = screen.queryByTestId(START_BUTTON_TEST_ID);
      expect(startButton).toBeInTheDocument();
    }
  }, MEDIUM_WAIT_FOR_OPTIONS);
};
