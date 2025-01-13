import { describe } from "vitest";

import { openTask } from "./utils/general";

import { checkTaskMovingAbility } from "@shared/explorer-window/providers/explorer-window-provider/tests";
import { MovingAbilityProps } from "@shared/explorer-window/providers/explorer-window-provider/types";

import { WINDOW_POSITION_Y, REGISTER_USER_TEST_ID } from "../constants";
import { credentialsInUse } from "./utils/credentials-in-use";
import { correctCredentials } from "./utils/correct-credentials";

const MOVING_ABILITY_PROPS: MovingAbilityProps = {
  containerId: REGISTER_USER_TEST_ID,
  position: {
    y: WINDOW_POSITION_Y,
  },
};

export const registerUserTest = () => {
  describe("Task: Register User", async () => {
    openTask();
    describe("Task render properties - Additional:", async () => {
      checkTaskMovingAbility(MOVING_ABILITY_PROPS);
    });
    credentialsInUse();
    correctCredentials();
  });
};
