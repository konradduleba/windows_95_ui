import { expect, it } from "vitest";

import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MEDIUM_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import {
  EXPLORER_WINDOW_HEADER_TEST_ID,
  EXPLORER_WINDOW_X_CLOSE_BUTTON_TEST_ID,
} from "../constants";

import { TestProps } from "../types";

export const closeTaskUsingX = ({ containerId }: TestProps) => {
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
