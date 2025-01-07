import { FallbackTimeZone, TIME_ZONES } from "../constants";
import { DateTime, TimeZone } from "../types";

export const getTimeZone = ({ systemDate }: DateTime): TimeZone => {
  const date = new Date(systemDate);

  const offsetInMinutes = date.getTimezoneOffset();
  const offsetInHours = -(offsetInMinutes / 60);

  const sign = offsetInHours >= 0 ? "+" : "-";
  const hours = Math.abs(Math.floor(offsetInHours)).toString().padStart(2, "0");
  const minutes = Math.abs(offsetInMinutes % 60)
    .toString()
    .padStart(2, "0");

  const GMT = `GMT${sign}${hours}:${minutes}`;

  const timeZone = Object.values(TIME_ZONES).find(({ value }) => value === GMT);

  return timeZone || FallbackTimeZone;
};
