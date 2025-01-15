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
  SECONDS,
} from "@tasks/date-time-properties/form/consts";
import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

const CURRENT_SECOND = new Date().getSeconds();

const NEW_SECOND = getRandomNumber({
  min: SECONDS.MIN_VALUE,
  max: SECONDS.MAX_VALUE,
  excludeNum: CURRENT_SECOND,
});

const SECOND_DIFFERENCE = getRandomNumber({
  min: SECONDS.MIN_VALUE,
  max: SECONDS.MAX_VALUE,
});

const RANGE: InputRange = {
  min: SECONDS.MIN_VALUE,
  max: SECONDS.MAX_VALUE,
};

export const changeSecond = () => {
  describe("Change second by:", async () => {
    it("Should change second by typing", LONG_WAIT_FOR_OPTIONS, async () => {
      await changeNumberInputValueByTyping({
        newValue: NEW_SECOND,
        testId: DATE_TIME_MINUTE_TEST_ID,
      });
    });

    it("Should change second by increment", LONG_WAIT_FOR_OPTIONS, async () => {
      await changeNumberInputValueByIncrement({
        difference: SECOND_DIFFERENCE,
        testId: DATE_TIME_MINUTE_TEST_ID,
        range: RANGE,
      });
    });

    it("Should change second by decrement", LONG_WAIT_FOR_OPTIONS, async () => {
      await changeNumberInputValueByDecrement({
        difference: SECOND_DIFFERENCE,
        testId: DATE_TIME_MINUTE_TEST_ID,
        range: RANGE,
      });
    });
  });
};
