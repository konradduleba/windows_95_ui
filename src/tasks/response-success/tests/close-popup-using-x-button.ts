import { expect, it } from "vitest";
import { screen, waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { EXPLORER_WINDOW_X_CLOSE_BUTTON_TEST_ID } from "@shared/explorer-window/providers/explorer-window-provider/constants";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { RESPONSE_SUCCESS_TEST_ID } from "../constants";

type ClosePopupUsingXButtonProps = {
  waitForContainerId?: string;
};

export const closePopupUsingXButton = ({
  waitForContainerId,
}: ClosePopupUsingXButtonProps) => {
  it("Close success popup using X button", LONG_WAIT_FOR_OPTIONS, async () => {
    const container = screen.getByTestId(RESPONSE_SUCCESS_TEST_ID);

    const xButton = within(container).getByTestId(
      EXPLORER_WINDOW_X_CLOSE_BUTTON_TEST_ID
    );

    userEvent.click(xButton);

    await waitFor(() => {
      expect(container).not.toBeInTheDocument();

      if (waitForContainerId) {
        const waitForContainer = screen.getByTestId(waitForContainerId);
        expect(waitForContainer).toBeInTheDocument();
      }
    });
  });
};
