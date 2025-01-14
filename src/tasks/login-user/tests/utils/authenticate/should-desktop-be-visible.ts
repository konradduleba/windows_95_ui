import { expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/dom";

import { START_BUTTON_TEST_ID } from "@layouts/desktop/components/start-menu/components/start-button/constants";

import { MEDIUM_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

export const shouldDesktopBeVisible = () => {
  it("Should desktop be visible", MEDIUM_WAIT_FOR_OPTIONS, async () => {
    await waitFor(() => {
      const startButton = screen.queryByTestId(START_BUTTON_TEST_ID);
      expect(startButton).toBeInTheDocument();
    });
  });
};
