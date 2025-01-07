import { DateTime, DateTimeBasic } from "../types";

export const getBasicDateTime = ({ systemDate }: DateTime): DateTimeBasic => {
  const date = new Date(systemDate);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const weekDay = date.getDay();

  return {
    day,
    hours,
    minutes,
    month,
    seconds,
    weekDay,
    year,
  };
};
