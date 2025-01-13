import { it } from "vitest";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";
import { getRandomEmail } from "@tests/utils";

import { RESPONSE_ERROR_TEST_ID } from "@tasks/response-error/constants";

import { checkPopup, passCredentials, submitForm } from "../general";

const USERNAME = process.env.TEST_USERNAME || "";
const PASSWORD = process.env.TEST_PASSWORD || "";
const EMAIL = getRandomEmail();

export const passIncorrectCredentials = () => {
  it("Pass incorrect credentials", LONG_WAIT_FOR_OPTIONS, async () => {
    await passCredentials({
      username: USERNAME,
      email: EMAIL,
      password: PASSWORD,
      confirmPassword: PASSWORD,
    });

    await submitForm();

    await checkPopup({ testId: RESPONSE_ERROR_TEST_ID });
  });
};
