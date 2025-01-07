import { DateTime, DateTimeFormatted } from "../types";

import { formatDateNumber } from "./format-date-number";
import { getBasicDateTime } from "./get-basic-date-time";

const LOCALE: Intl.LocalesArgument = "en-US";

export const getFormattedDateTime = ({
  systemDate,
}: DateTime): DateTimeFormatted => {
  const date = new Date(systemDate);
  const { day, hours, minutes, month, seconds } = getBasicDateTime({
    systemDate,
  });

  const dayName = date.toLocaleDateString(LOCALE, { weekday: "long" });
  const monthName = date.toLocaleDateString(LOCALE, { month: "long" });

  return {
    day: formatDateNumber(day),
    dayName,
    month: formatDateNumber(month),
    monthName,
    hours: formatDateNumber(hours),
    hoursIn12hourFormat: formatDateNumber(hours % 12 || 12),
    minutes: formatDateNumber(minutes),
    seconds: formatDateNumber(seconds),
  };
};
