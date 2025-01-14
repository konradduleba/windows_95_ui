import { describe } from "vitest";

import {
  RESPONSE_ERROR_TEST_ID,
  WINDOW_POSITION_Y,
} from "@tasks/response-error/constants";
import {
  closePopupUsingOkButton,
  closePopupUsingXButton,
} from "@tasks/response-error/tests";
import { REGISTER_USER_TEST_ID } from "@tasks/register-user/constants";

import { checkTaskMovingAbility } from "@shared/explorer-window/providers/explorer-window-provider/tests";
import { MovingAbilityProps } from "@shared/explorer-window/providers/explorer-window-provider/types";

import { passIncorrectCredentials } from "./pass-incorrect-credentials";

const MOVING_ABILITY_PROPS: MovingAbilityProps = {
  containerId: RESPONSE_ERROR_TEST_ID,
  position: {
    y: WINDOW_POSITION_Y,
  },
};

export const credentialsInUse = () => {
  describe("Already created account", () => {
    passIncorrectCredentials();
    describe("Error task popup", () => {
      checkTaskMovingAbility(MOVING_ABILITY_PROPS);
      closePopupUsingOkButton({ waitForContainerId: REGISTER_USER_TEST_ID });
      passIncorrectCredentials();
      closePopupUsingXButton({ waitForContainerId: REGISTER_USER_TEST_ID });
    });
  });
};
