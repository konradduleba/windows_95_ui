import { v4 as uuidv4 } from "uuid";

import { Position } from "@shared/explorer-window/providers/explorer-window-provider/types";

export const WINDOW_POSITION: Position = {
  x: 30,
  y: 30,
};

export const WINDOW_WIDTH = 500;
export const WINDOW_TITLE = "Date/Time Properties";

export const DATE_TIME_PROPERTIES_TASK_ID = uuidv4();

export const DATE_TIME_TEST_ID = "date-time";

export const DAY_LIST_TEST_ID = "day-list";
export const DAY_AVAILABLE_ITEM_TEST_ID = "day-available-item";

export const TIME_INPUTS_CONTAINER_TEST_ID = "time-inputs-container";

export const TABS_CONTAINER_TEST_ID = "date-time-tabs-container";
export const DATE_TIME_TAB_TEST_ID = "day-time-tab";
export const TIME_ZONE_TAB_TEST_ID = "time-zone-tab";

export const TIME_ZONE_PICKER_TEST_ID = "time-zone-picker";
export const ADJUST_CLOCK_TEST_ID = "adjust-clock";
