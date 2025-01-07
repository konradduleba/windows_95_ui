import { it } from "vitest";

import { DATE_TIME_MONTH_TEST_ID } from "@tasks/date-time-properties/form/consts";

import { changeSelectValue } from "@forms/controllers/form-single-select/tests";

export const changeMonth = () => {
  it("Should change month", async () => {
    await changeSelectValue({ containerTestId: DATE_TIME_MONTH_TEST_ID });
  });
};
