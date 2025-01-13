import { expect, it } from "vitest";
import { fireEvent, screen, waitFor, within } from "@testing-library/dom";

import {
  LONG_WAIT_FOR_OPTIONS,
  WAIT_FOR_OPTIONS,
} from "@tests/mocks/constants";

import {
  LOGIN_USER_REGISTER_TEST_ID,
  LOGIN_USER_TEST_ID,
} from "@tasks/login-user/constants";
import { REGISTER_USER_TEST_ID } from "@tasks/register-user/constants";

export const openTask = () => {
  it("Open task", LONG_WAIT_FOR_OPTIONS, async () => {
    await waitFor(() => {
      const loginContainer = screen.getByTestId(LOGIN_USER_TEST_ID);

      const registerButton = within(loginContainer).getByTestId(
        LOGIN_USER_REGISTER_TEST_ID
      );

      fireEvent.click(registerButton);

      const registerUser = screen.getByTestId(REGISTER_USER_TEST_ID);

      expect(registerUser).toBeInTheDocument();
      expect(loginContainer).not.toBeInTheDocument();
    }, WAIT_FOR_OPTIONS);
  });
};
