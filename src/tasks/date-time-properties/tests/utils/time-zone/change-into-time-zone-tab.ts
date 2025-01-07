import { changeTab } from "@shared/tabs/tests";

import {
  TABS_CONTAINER_TEST_ID,
  TIME_ZONE_TAB_TEST_ID,
} from "@tasks/date-time-properties/constants";

export const changeIntoTimeZoneTab = async () => {
  await changeTab({
    containerId: TABS_CONTAINER_TEST_ID,
    targetTabId: TIME_ZONE_TAB_TEST_ID,
  });
};
