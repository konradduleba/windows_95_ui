import { expect } from "vitest";
import { screen, waitFor } from "@testing-library/dom";

import { RESPONSE_ERROR_TEST_ID } from "@tasks/response-error/constants";

import { MEDIUM_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { START_BUTTON_TEST_ID } from "@layouts/desktop/components/start-menu/components/start-button/constants";

type HandleResponseProps = {
  onSuccess?: () => Promise<void>;
  onError?: () => Promise<void>;
};

export const handleResponse = async ({
  onSuccess,
  onError,
}: HandleResponseProps) => {
  await waitFor(async () => {
    const errorContainer = screen.queryByTestId(RESPONSE_ERROR_TEST_ID);

    if (errorContainer) {
      expect(errorContainer).toBeInTheDocument();
      onSuccess?.();
    } else {
      const startButton = screen.queryByTestId(START_BUTTON_TEST_ID);
      expect(startButton).toBeInTheDocument();
      onError?.();
    }
  }, MEDIUM_WAIT_FOR_OPTIONS);
};
