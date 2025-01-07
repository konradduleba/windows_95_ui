import { expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/dom";

import { EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID } from "../constants";

export const submitButtonInitiallyDisabled = () => {
  it("Should 'Submit' button be initially disabled", async () => {
    await waitFor(() => {
      const submitButton = screen.getByTestId(
        EXPLORER_WINDOW_SUBMIT_BUTTON_TEST_ID
      );
      expect(submitButton).toBeDisabled();
    });
  });
};
