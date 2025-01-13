import userEvent from "@testing-library/user-event";
import { screen, within } from "@testing-library/dom";

import { EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import { REGISTER_USER_TEST_ID } from "@tasks/register-user/constants";

export const submitForm = async () => {
  const container = screen.getByTestId(REGISTER_USER_TEST_ID);

  const submitButton = within(container).getByTestId(
    EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID
  );

  await userEvent.click(submitButton);
};
