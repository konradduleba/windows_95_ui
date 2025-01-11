import { describe } from "vitest";

import { loginUser } from "./login-user";
import { shouldStoreToken } from "./should-store-token";

export const authenticateUser = () => {
  describe("Authenticate User", async () => {
    loginUser();
    shouldStoreToken();
  });
};
