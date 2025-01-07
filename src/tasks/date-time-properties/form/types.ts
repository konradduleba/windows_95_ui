import { TimeZoneID } from "@providers/date-time-provider/types";
import { AM_PM } from "@providers/date-time-provider/types/context";

export enum DATE_TIME_FORM_NAME_KEYS {
  DAY = "day",
  MONTH = "month",
  YEAR = "year",
  HOURS = "hours",
  MINUTES = "minutes",
  SECONDS = "seconds",
  AM_PM = "AM_PM",
  TIME_ZONE = "timeZone",
  ADJUST_CLOCK = "adjustClock",
}

export type DateAndTimeFormValues = {
  [DATE_TIME_FORM_NAME_KEYS.DAY]: number;
  [DATE_TIME_FORM_NAME_KEYS.MONTH]: number;
  [DATE_TIME_FORM_NAME_KEYS.YEAR]: number;
  [DATE_TIME_FORM_NAME_KEYS.HOURS]: number;
  [DATE_TIME_FORM_NAME_KEYS.MINUTES]: number;
  [DATE_TIME_FORM_NAME_KEYS.SECONDS]: number;
  [DATE_TIME_FORM_NAME_KEYS.AM_PM]: AM_PM;
  [DATE_TIME_FORM_NAME_KEYS.TIME_ZONE]: TimeZoneID;
  [DATE_TIME_FORM_NAME_KEYS.ADJUST_CLOCK]: boolean;
};
