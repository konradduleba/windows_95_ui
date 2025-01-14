import { expect } from "vitest";
import { screen, waitFor } from "@testing-library/dom";

import { MEDIUM_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

type CheckPopupProps = {
  testId: string;
};

export const checkPopup = async ({ testId }: CheckPopupProps) => {
  await waitFor(async () => {
    const container = screen.queryByTestId(testId);

    expect(container).toBeInTheDocument();
  }, MEDIUM_WAIT_FOR_OPTIONS);
};
