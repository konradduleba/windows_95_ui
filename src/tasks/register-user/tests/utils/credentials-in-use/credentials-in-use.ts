import { describe } from "vitest";

import { passIncorrectCredentials } from "./pass-incorrect-credentials";
import { closePopup } from "./close-popup";

export const credentialsInUse = () => {
  describe("Already created account", () => {
    passIncorrectCredentials();
    closePopup();
  });
};
