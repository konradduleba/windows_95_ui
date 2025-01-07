import {
  DateTime,
  DateTimeBasic,
  DateTimeContextProps,
  DateTimeFormatted,
  TimeZone,
} from "../types";

import { getBasicDateTime } from "./get-basic-date-time";
import { getFormattedDateTime } from "./get-formatted-date-time";
import { getTimeZone } from "./get-time-zone";

export const getDateTime = ({ systemDate }: DateTime): DateTimeContextProps => {
  const basic: DateTimeBasic = getBasicDateTime({ systemDate });
  const formatted: DateTimeFormatted = getFormattedDateTime({ systemDate });
  const timeZone: TimeZone = getTimeZone({ systemDate });
  const { hours } = basic;

  const AM_PM = hours >= 12 ? "PM" : "AM";

  return {
    AM_PM,
    basic,
    formatted,
    timeZone,
  };
};
