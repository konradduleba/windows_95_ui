import { expect, it } from "vitest";

import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  EXPLORER_WINDOW_CANCEL_BUTTON_TEST_ID,
  EXPLORER_WINDOW_HEADER_TEST_ID,
  EXPLORER_WINDOW_X_CLOSE_BUTTON_TEST_ID,
} from "../constants";

import { TestProps } from "../types";
import { MEDIUM_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

export const checkCloseTask = ({ containerId }: TestProps) => {
  it(
    "Should close task using cancel button",
    MEDIUM_WAIT_FOR_OPTIONS,
    async () => {
      const container = screen.getByTestId(containerId);
      const cancelButton = within(container).getByTestId(
        EXPLORER_WINDOW_CANCEL_BUTTON_TEST_ID
      );

      await userEvent.click(cancelButton);

      await waitFor(() => {
        const heading = within(container).queryByTestId(
          EXPLORER_WINDOW_HEADER_TEST_ID
        );

        expect(heading).not.toBeInTheDocument();
      });
    }
  );

  it("Should close task using X button", MEDIUM_WAIT_FOR_OPTIONS, async () => {
    const container = screen.getByTestId(containerId);

    const heading = within(container).getByTestId(
      EXPLORER_WINDOW_HEADER_TEST_ID
    );
    const xButton = within(heading).getByTestId(
      EXPLORER_WINDOW_X_CLOSE_BUTTON_TEST_ID
    );

    await userEvent.click(xButton);

    await waitFor(() => {
      const heading = within(container).queryByTestId(
        EXPLORER_WINDOW_HEADER_TEST_ID
      );

      expect(heading).not.toBeInTheDocument();
    });
  });
};
