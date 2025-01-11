import { describe, expect, it } from "vitest";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { checkIsLoginIsVisible } from "./check-is-login-is-visible";
import { loginUser } from "./login-user";

export const authenticateUser = async () => {
  describe("Authenticate User", () => {
    it("Check is login visible", async () => {
      await checkIsLoginIsVisible();
    });

    it("Login user", LONG_WAIT_FOR_OPTIONS, async () => {
      await loginUser();
    });

    it("Should store the token", () => {
      const accessToken = localStorage.getItem("accessToken");
      expect(accessToken).toBeDefined();
    });
  });
};
