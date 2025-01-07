import { useEffect } from "react";
import { useController, useWatch } from "react-hook-form";

import { getAvailableDays, getDaysInMonth, getDisabledDays } from "../helpers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";

import { Day } from "../types";

export const useGetDayList = () => {
  const { field } = useController({ name: DATE_TIME_FORM_NAME_KEYS.DAY });

  const year = useWatch({ name: DATE_TIME_FORM_NAME_KEYS.YEAR });
  const month = useWatch({ name: DATE_TIME_FORM_NAME_KEYS.MONTH });
  const day = useWatch({ name: DATE_TIME_FORM_NAME_KEYS.DAY });

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay();

  useEffect(() => {
    if (day > daysInMonth) {
      field.onChange(daysInMonth);
    }
  }, [day, daysInMonth]);

  const disabledDays = getDisabledDays(startDay);

  const availableDays = getAvailableDays(daysInMonth, day);

  const days: Day[] = [...disabledDays, ...availableDays];

  return {
    days,
  };
};
