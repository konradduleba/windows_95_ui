import { it } from "vitest";

import { DATE_TIME_AM_PM_TEST_ID } from "@tasks/date-time-properties/form/consts";

import { changeSelectValue } from "@forms/controllers/form-single-select/tests";

export const changeAmPm = () => {
  it("Should change AM/PM", async () => {
    await changeSelectValue({ containerTestId: DATE_TIME_AM_PM_TEST_ID });
  });
};
