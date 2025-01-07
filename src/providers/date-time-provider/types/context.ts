import { TimeZone } from "./time-gmt";

export type Day = string;
export type Month = string;
export type AM_PM = "AM" | "PM";

export type DateTimeBasic = {
  year: number;
  month: number;
  weekDay: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type DateTimeFormatted = {
  day: string;
  month: string;
  dayName: Day;
  monthName: Month;
  hours: string;
  minutes: string;
  seconds: string;
  hoursIn12hourFormat: string;
};

export type DateTimeContextProps = {
  basic: DateTimeBasic;
  formatted: DateTimeFormatted;
  AM_PM: AM_PM;
  timeZone: TimeZone;
};

export type DateTime = {
  systemDate: string;
};
