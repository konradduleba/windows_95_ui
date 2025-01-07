import { describe, it } from "vitest";

import {
  DATE_TIME_YEAR_TEST_ID,
  YEAR,
} from "@tasks/date-time-properties/form/consts";

import {
  changeNumberInputValueByDecrement,
  changeNumberInputValueByIncrement,
  changeNumberInputValueByTyping,
} from "@forms/controllers/form-input-number/tests/utils";
import { InputRange } from "@forms/controllers/form-input-number/tests/types/number-input.types";

import { getRandomNumber } from "@tests/utils";

const CURRENT_YEAR = new Date().getFullYear();

const NEW_YEAR = getRandomNumber({
  min: YEAR.MIN_VALUE,
  max: YEAR.MAX_VALUE,
  excludeNum: CURRENT_YEAR,
});

const YEAR_DIFFERENCE = getRandomNumber({
  min: YEAR.MIN_VALUE,
  max: YEAR.MAX_VALUE,
});

const RANGE: InputRange = {
  min: YEAR.MIN_VALUE,
  max: YEAR.MAX_VALUE,
};

export const changeYear = () => {
  describe("Change year by:", async () => {
    it("Should change year by typing", async () => {
      await changeNumberInputValueByTyping({
        newValue: NEW_YEAR,
        testId: DATE_TIME_YEAR_TEST_ID,
      });
    });

    it("Should change year by increment", async () => {
      await changeNumberInputValueByIncrement({
        difference: YEAR_DIFFERENCE,
        testId: DATE_TIME_YEAR_TEST_ID,
        range: RANGE,
      });
    });

    it("Should change year by decrement", async () => {
      await changeNumberInputValueByDecrement({
        difference: YEAR_DIFFERENCE,
        testId: DATE_TIME_YEAR_TEST_ID,
        range: RANGE,
      });
    });
  });
};
