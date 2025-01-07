import { it } from "vitest";

import { TIME_ZONE_PICKER_TEST_ID } from "@tasks/date-time-properties/constants/date-time-properties.consts";

import { changeSelectValue } from "@forms/controllers/form-single-select/tests";

import { changeIntoTimeZoneTab } from "./change-into-time-zone-tab";

export const changeTimeZone = () => {
  it("Should change Time Zone", async () => {
    await changeIntoTimeZoneTab();
    await changeSelectValue({ containerTestId: TIME_ZONE_PICKER_TEST_ID });
  });
};
