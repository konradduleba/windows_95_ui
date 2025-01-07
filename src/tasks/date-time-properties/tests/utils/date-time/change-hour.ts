import { describe, it } from "vitest";

import {
  changeNumberInputValueByDecrement,
  changeNumberInputValueByIncrement,
  changeNumberInputValueByTyping,
} from "@forms/controllers/form-input-number/tests/utils";
import { InputRange } from "@forms/controllers/form-input-number/tests/types/number-input.types";

import { getRandomNumber } from "@tests/utils";

import {
  DATE_TIME_HOUR_TEST_ID,
  HOURS,
} from "@tasks/date-time-properties/form/consts";

const CURRENT_HOUR = new Date().getHours() % 12 || 12;

const NEW_HOUR = getRandomNumber({
  min: HOURS.MIN_VALUE,
  max: HOURS.MAX_VALUE,
  excludeNum: CURRENT_HOUR,
});

const HOUR_DIFFERENCE = getRandomNumber({
  min: HOURS.MIN_VALUE,
  max: HOURS.MAX_VALUE,
});

const RANGE: InputRange = {
  min: HOURS.MIN_VALUE,
  max: HOURS.MAX_VALUE,
};

export const changeHour = () => {
  describe("Change hour by:", async () => {
    it("Should change hour by typing", async () => {
      await changeNumberInputValueByTyping({
        newValue: NEW_HOUR,
        testId: DATE_TIME_HOUR_TEST_ID,
      });
    });

    it("Should change hour by increment", async () => {
      await changeNumberInputValueByIncrement({
        difference: HOUR_DIFFERENCE,
        testId: DATE_TIME_HOUR_TEST_ID,
        range: RANGE,
      });
    });

    it("Should change hour by decrement", async () => {
      await changeNumberInputValueByDecrement({
        difference: HOUR_DIFFERENCE,
        testId: DATE_TIME_HOUR_TEST_ID,
        range: RANGE,
      });
    });
  });
};
