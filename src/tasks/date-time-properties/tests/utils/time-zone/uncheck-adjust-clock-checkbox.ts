import { it } from "vitest";

import { uncheckCheckbox } from "@forms/controllers/form-checkbox/tests";

import { ADJUST_CLOCK_TEST_ID } from "@tasks/date-time-properties/constants/date-time-properties.consts";

import { changeIntoTimeZoneTab } from "./change-into-time-zone-tab";

export const uncheckAdjustClockCheckbox = () => {
  it("Should uncheck adjust clock checkbox", async () => {
    await changeIntoTimeZoneTab();
    await uncheckCheckbox({ containerId: ADJUST_CLOCK_TEST_ID });
  });
};
