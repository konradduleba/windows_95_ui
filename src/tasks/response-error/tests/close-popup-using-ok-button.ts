import { expect, it } from "vitest";
import { screen, waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { EXPLORER_WINDOW_OK_BUTTON_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { RESPONSE_ERROR_TEST_ID } from "../constants";

type ClosePopupUsingOkButtonProps = {
  waitForContainerId?: string;
};

export const closePopupUsingOkButton = ({
  waitForContainerId,
}: ClosePopupUsingOkButtonProps) => {
  it("Close error popup using OK button", LONG_WAIT_FOR_OPTIONS, async () => {
    const container = screen.getByTestId(RESPONSE_ERROR_TEST_ID);

    const okButton = within(container).getByTestId(
      EXPLORER_WINDOW_OK_BUTTON_TEST_ID
    );

    userEvent.click(okButton);

    await waitFor(() => {
      expect(container).not.toBeInTheDocument();

      if (waitForContainerId) {
        const waitForContainer = screen.getByTestId(waitForContainerId);
        expect(waitForContainer).toBeInTheDocument();
      }
    });
  });
};
