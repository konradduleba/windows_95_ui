import { describe } from "vitest";

import { checkTaskMovingAbility } from "@shared/explorer-window/providers/explorer-window-provider/tests";
import { MovingAbilityProps } from "@shared/explorer-window/providers/explorer-window-provider/types";

import { openTask } from "./utils/general";

import { authenticateUser } from "./utils/authenticate";

import { notAuthenticateUser } from "./utils/not-authenticate";

import { LOGIN_USER_TEST_ID, WINDOW_POSITION_Y } from "../constants";

const MOVING_ABILITY_PROPS: MovingAbilityProps = {
  containerId: LOGIN_USER_TEST_ID,
  position: {
    y: WINDOW_POSITION_Y,
  },
};

export const loginUserTest = () => {
  describe("Task: Login User", async () => {
    openTask();
    describe("Task render properties - Additional:", async () => {
      checkTaskMovingAbility(MOVING_ABILITY_PROPS);
    });
    notAuthenticateUser();
    authenticateUser();
  });
};
