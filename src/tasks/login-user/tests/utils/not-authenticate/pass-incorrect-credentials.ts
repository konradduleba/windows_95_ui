import { it } from "vitest";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { getRandomPassword, getRandomUsername } from "@tests/utils";

import { handleResponse, passCredentials, submitForm } from "../general";

const USERNAME = getRandomUsername();
const PASSWORD = getRandomPassword();

export const passIncorrectCredentials = async () => {
  it("Pass incorrect credentials", LONG_WAIT_FOR_OPTIONS, async () => {
    await passCredentials({
      username: USERNAME,
      password: PASSWORD,
    });

    await submitForm();

    const onError = () => {
      throw new Error("Correct credentials provided");
    };

    await handleResponse({
      onError,
    });
  });
};
