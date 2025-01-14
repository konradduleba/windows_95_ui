import { it } from "vitest";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";
import {
  getRandomEmail,
  getRandomPassword,
  getRandomUsername,
} from "@tests/utils";

import { RESPONSE_SUCCESS_TEST_ID } from "@tasks/response-success/constants";

import { checkPopup, passCredentials, submitForm } from "../general";

export const passCorrectCredentials = () => {
  const USERNAME = getRandomUsername();
  const PASSWORD = getRandomPassword();
  const EMAIL = getRandomEmail();

  it("Pass correct credentials", LONG_WAIT_FOR_OPTIONS, async () => {
    await passCredentials({
      username: USERNAME,
      email: EMAIL,
      password: PASSWORD,
      confirmPassword: PASSWORD,
    });

    await submitForm();

    await checkPopup({ testId: RESPONSE_SUCCESS_TEST_ID });
  });
};
