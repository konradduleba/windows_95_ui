import { describe } from "vitest";

import { loginUser } from "./login-user";
import { shouldStoreToken } from "./should-store-token";
import { shouldDesktopBeVisible } from "./should-desktop-be-visible";

export const authenticateUser = () => {
  describe("Authenticate User", async () => {
    loginUser();
    shouldStoreToken();
    shouldDesktopBeVisible();
  });
};
