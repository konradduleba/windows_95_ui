import { expect, it } from "vitest";
import { screen, waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { RESPONSE_SUCCESS_TEST_ID } from "@tasks/response-success/constants";
import { REGISTER_USER_SUCCESS_LOGIN_BUTTON_TEST_ID } from "@tasks/register-user/constants/register-user.consts";
import { LOGIN_USER_TEST_ID } from "@tasks/login-user/constants";

export const closePopupViaRedirectButton = () => {
  it("Close popup via redirect button", LONG_WAIT_FOR_OPTIONS, async () => {
    const container = screen.getByTestId(RESPONSE_SUCCESS_TEST_ID);

    const okButton = within(container).getByTestId(
      REGISTER_USER_SUCCESS_LOGIN_BUTTON_TEST_ID
    );

    userEvent.click(okButton);

    await waitFor(() => {
      expect(container).not.toBeInTheDocument();
      const loginContainer = screen.getByTestId(LOGIN_USER_TEST_ID);
      expect(loginContainer).toBeInTheDocument();
    });
  });
};
