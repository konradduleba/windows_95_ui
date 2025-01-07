import { describe, it } from "vitest";

import {
  changeNumberInputValueByDecrement,
  changeNumberInputValueByIncrement,
  changeNumberInputValueByTyping,
} from "@forms/controllers/form-input-number/tests/utils";
import { InputRange } from "@forms/controllers/form-input-number/tests/types/number-input.types";

import { getRandomNumber } from "@tests/utils";

import {
  DATE_TIME_MINUTE_TEST_ID,
  MINUTES,
} from "@tasks/date-time-properties/form/consts";

const CURRENT_MINUTE = new Date().getMinutes();

const NEW_MINUTE = getRandomNumber({
  min: MINUTES.MIN_VALUE,
  max: MINUTES.MAX_VALUE,
  excludeNum: CURRENT_MINUTE,
});

const MINUTE_DIFFERENCE = getRandomNumber({
  min: MINUTES.MIN_VALUE,
  max: MINUTES.MAX_VALUE,
});

const RANGE: InputRange = {
  min: MINUTES.MIN_VALUE,
  max: MINUTES.MAX_VALUE,
};

export const changeMinute = () => {
  describe("Change minute by:", async () => {
    it("Should change minute by typing", async () => {
      await changeNumberInputValueByTyping({
        newValue: NEW_MINUTE,
        testId: DATE_TIME_MINUTE_TEST_ID,
      });
    });

    it("Should change minute by increment", async () => {
      await changeNumberInputValueByIncrement({
        difference: MINUTE_DIFFERENCE,
        testId: DATE_TIME_MINUTE_TEST_ID,
        range: RANGE,
      });
    });

    it("Should change minute by decrement", async () => {
      await changeNumberInputValueByDecrement({
        difference: MINUTE_DIFFERENCE,
        testId: DATE_TIME_MINUTE_TEST_ID,
        range: RANGE,
      });
    });
  });
};
