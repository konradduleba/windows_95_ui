import { describe } from "vitest";
import { render } from "@testing-library/react";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

import { registerUserTest } from "@tasks/register-user/tests/register-user";
import { loginUserTest } from "@tasks/login-user/tests/login-user";
import { dateTimePropertiesTest } from "@tasks/date-time-properties/tests/date-time-properties";

describe("Windows 95 Tests", async () => {
  render(<MainAppProviders />);

  registerUserTest();
  loginUserTest();
  dateTimePropertiesTest();
});
