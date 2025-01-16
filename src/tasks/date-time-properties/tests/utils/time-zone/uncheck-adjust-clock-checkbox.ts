import { it } from "vitest";

import { uncheckCheckbox } from "@forms/controllers/form-checkbox/tests";

import { ADJUST_CLOCK_TEST_ID } from "@tasks/date-time-properties/constants";

export const uncheckAdjustClockCheckbox = () => {
  it("Should uncheck adjust clock checkbox", async () => {
    await uncheckCheckbox({ containerId: ADJUST_CLOCK_TEST_ID });
  });
};
