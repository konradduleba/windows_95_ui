import { describe } from "vitest";
import { render } from "@testing-library/react";

import { dateTimePropertiesTest } from "@tasks/date-time-properties/tests/date-time-properties";
import { loginUserTest } from "@tasks/login-user/tests/login-user";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

describe("Windows 95 Tests", async () => {
  render(<MainAppProviders />);

  await loginUserTest();
  await dateTimePropertiesTest();
});
