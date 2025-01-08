import { describe } from "vitest";

import { checkTaskRender } from "@tests/check-task-render";

import {
  checkCloseTask,
  checkTaskMovingAbility,
  submitButtonInitiallyDisabled,
} from "@shared/explorer-window/providers/explorer-window-provider/tests";
import { MovingAbilityProps } from "@shared/explorer-window/providers/explorer-window-provider/types";

import { DateTimeProperties } from "../date-time-properties";

import {
  DATE_TIME_PROPERTIES_TASK_ID,
  DATE_TIME_TEST_ID,
  WINDOW_POSITION,
  WINDOW_TITLE,
} from "../constants";

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

const MOVING_ABILITY_PROPS: MovingAbilityProps = {
  containerId: DATE_TIME_TEST_ID,
  position: WINDOW_POSITION,
};

describe("Task: Date Time Properties", async () => {
  await checkTaskRender({
    Component: <DateTimeProperties />,
    taskTitle: WINDOW_TITLE,
    containerId: DATE_TIME_TEST_ID,
    taskId: DATE_TIME_PROPERTIES_TASK_ID,
  });

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

  checkCloseTask({ containerId: DATE_TIME_TEST_ID });
});
