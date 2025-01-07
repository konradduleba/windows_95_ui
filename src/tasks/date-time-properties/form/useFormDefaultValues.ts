import { useDateTime } from "@providers/date-time-provider/hooks";

import { DateAndTimeFormValues } from "./types";

export const useFormDefaultValues = (): DateAndTimeFormValues => {
  const { basic, AM_PM, timeZone } = useDateTime();
  const { day, year, hours, minutes, seconds, month } = basic;

  return {
    day,
    month,
    year,
    hours: hours % 12 || 12,
    minutes,
    seconds,
    AM_PM,
    timeZone: timeZone.id,
    adjustClock: true,
  };
};
