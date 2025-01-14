import { describe } from "vitest";

import { closePopupUsingOkButton } from "@tasks/response-error/tests";
import { LOGIN_USER_TEST_ID } from "@tasks/login-user/constants";

import { passIncorrectCredentials } from "./pass-incorrect-credentials";

export const notAuthenticateUser = () => {
  describe("Not authenticate User", async () => {
    passIncorrectCredentials();
    closePopupUsingOkButton({ waitForContainerId: LOGIN_USER_TEST_ID });
  });
};
