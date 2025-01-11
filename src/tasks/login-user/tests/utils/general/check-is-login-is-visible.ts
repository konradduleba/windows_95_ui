import { expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";

import { LOGIN_USER_TEST_ID } from "@tasks/login-user/constants";

import { WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

export const checkIsLoginIsVisible = () => {
  it("Check is login visible", async () => {
    await waitFor(() => {
      const container = screen.getByTestId(LOGIN_USER_TEST_ID);

      expect(container).toBeInTheDocument();
    }, WAIT_FOR_OPTIONS);
  });
};
