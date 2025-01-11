import { it } from "vitest";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { handleResponse, passCredentials, submitForm } from "../general";

const USERNAME = process.env.TEST_USERNAME || "";
const PASSWORD = process.env.TEST_PASSWORD || "";

export const loginUser = () => {
  it("Login user", LONG_WAIT_FOR_OPTIONS, async () => {
    await passCredentials({
      username: USERNAME,
      password: PASSWORD,
    });

    await submitForm();

    const onSuccess = () => {
      throw new Error("Incorrect credentials provided");
    };

    await handleResponse({
      onSuccess,
    });
  });
};
