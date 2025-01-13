import { expect, it } from "vitest";
import { screen, waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { EXPLORER_WINDOW_OK_BUTTON_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import { RESPONSE_ERROR_TEST_ID } from "@tasks/response-error/constants";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

export const closePopup = () => {
  it("Close error popup", LONG_WAIT_FOR_OPTIONS, async () => {
    const errorContainer = screen.getByTestId(RESPONSE_ERROR_TEST_ID);

    const okButton = within(errorContainer).getByTestId(
      EXPLORER_WINDOW_OK_BUTTON_TEST_ID
    );

    userEvent.click(okButton);

    await waitFor(() => {
      expect(errorContainer).not.toBeInTheDocument();
    });
  });
};
