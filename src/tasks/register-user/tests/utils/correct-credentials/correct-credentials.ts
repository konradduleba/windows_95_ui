import { describe } from "vitest";

import { checkTaskMovingAbility } from "@shared/explorer-window/providers/explorer-window-provider/tests";
import { MovingAbilityProps } from "@shared/explorer-window/providers/explorer-window-provider/types";

import {
  RESPONSE_SUCCESS_TEST_ID,
  WINDOW_POSITION_Y,
} from "@tasks/response-success/constants";
import { closePopupUsingXButton } from "@tasks/response-success/tests";
import { REGISTER_USER_TEST_ID } from "@tasks/register-user/constants";

import { passCorrectCredentials } from "./pass-correct-credentials";

import { closePopupViaRedirectButton } from "./close-popup-via-redirect-button";

const MOVING_ABILITY_PROPS: MovingAbilityProps = {
  containerId: RESPONSE_SUCCESS_TEST_ID,
  position: {
    y: WINDOW_POSITION_Y,
  },
};

export const correctCredentials = () => {
  describe("Create new account", () => {
    passCorrectCredentials();
    describe("Success task popup", () => {
      checkTaskMovingAbility(MOVING_ABILITY_PROPS);
      closePopupUsingXButton({ waitForContainerId: REGISTER_USER_TEST_ID });
      passCorrectCredentials();
      closePopupViaRedirectButton();
    });
  });
};
