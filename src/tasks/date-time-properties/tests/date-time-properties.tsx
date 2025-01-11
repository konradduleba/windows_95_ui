import { describe } from "vitest";

import {
  closeTaskUsingCancel,
  closeTaskUsingX,
  checkTaskMovingAbility,
  submitButtonInitiallyDisabled,
} from "@shared/explorer-window/providers/explorer-window-provider/tests";
import { MovingAbilityProps } from "@shared/explorer-window/providers/explorer-window-provider/types";

import { DATE_TIME_TEST_ID, WINDOW_POSITION } from "../constants";

import {
  changeAmPm,
  changeDay,
  changeHour,
  changeMinute,
  changeMonth,
  changeSecond,
  changeYear,
} from "./utils/date-time";

import { changeTimeZone, uncheckAdjustClockCheckbox } from "./utils/time-zone";

import { openTask } from "./utils/general";

const MOVING_ABILITY_PROPS: MovingAbilityProps = {
  containerId: DATE_TIME_TEST_ID,
  position: WINDOW_POSITION,
};

export const dateTimePropertiesTest = async () => {
  describe("Task: Date Time Properties", async () => {
    openTask();
    describe("Task render properties - Additional:", async () => {
      submitButtonInitiallyDisabled();
      checkTaskMovingAbility(MOVING_ABILITY_PROPS);
    });
    describe("Date & Time Tab:", async () => {
      describe("Date:", async () => {
        changeMonth();
        changeYear();
        changeDay();
      });
      describe("Time:", async () => {
        changeHour();
        changeMinute();
        changeSecond();
        changeAmPm();
      });
    });
    describe("Time Zone Tab:", async () => {
      changeTimeZone();
      uncheckAdjustClockCheckbox();
    });
    describe("Close Task", async () => {
      closeTaskUsingCancel({ containerId: DATE_TIME_TEST_ID });
      openTask();
      closeTaskUsingX({ containerId: DATE_TIME_TEST_ID });
    });
  });
};
