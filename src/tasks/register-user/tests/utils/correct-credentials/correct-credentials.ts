import { describe } from "vitest";

import { passCorrectCredentials } from "./pass-correct-credentials";

import { closePopupViaRedirectButton } from "./close-popup-via-redirect-button";

export const correctCredentials = () => {
  describe("Create new account", () => {
    passCorrectCredentials();
    closePopupViaRedirectButton();
  });
};
