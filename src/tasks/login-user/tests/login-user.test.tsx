import { describe, it } from "vitest";
import { render } from "@testing-library/react";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { authenticateUser } from "./utils";

describe("Task: Login User", () => {
  render(<MainAppProviders />);

  it(
    "Login should be visible and user should be logged in",
    LONG_WAIT_FOR_OPTIONS,
    async () => {
      await authenticateUser();
    }
  );
});
