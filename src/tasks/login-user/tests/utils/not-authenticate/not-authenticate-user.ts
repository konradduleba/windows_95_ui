import { describe } from "vitest";

import { passIncorrectCredentials } from "./pass-incorrect-credentials";
import { closePopup } from "./close-popup";

export const notAuthenticateUser = () => {
  describe("Not authenticate User", async () => {
    passIncorrectCredentials();
    closePopup();
  });
};
