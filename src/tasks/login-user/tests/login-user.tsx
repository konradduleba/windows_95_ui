import { describe } from "vitest";

import { checkIsLoginIsVisible } from "./utils/general";

import { authenticateUser } from "./utils/authenticate";

import { notAuthenticateUser } from "./utils/not-authenticate";

export const loginUserTest = () => {
  describe("Task: Login User", async () => {
    checkIsLoginIsVisible();
    notAuthenticateUser();
    authenticateUser();
  });
};
