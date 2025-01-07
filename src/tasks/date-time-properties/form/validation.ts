import * as yup from "yup";

import { AM_PM } from "@providers/date-time-provider/types/context";

import { DATE_TIME_FORM_NAME_KEYS, DateAndTimeFormValues } from "./types";

import { YEAR, HOURS, MINUTES, SECONDS } from "./consts";

export const AM_PM_VALUES: AM_PM[] = ["AM", "PM"];

export const dateAndTimeValidationSchema: yup.ObjectSchema<DateAndTimeFormValues> =
  yup.object({
    [DATE_TIME_FORM_NAME_KEYS.YEAR]: yup
      .number()
      .min(YEAR.MIN_VALUE)
      .max(YEAR.MAX_VALUE)
      .required(),
    [DATE_TIME_FORM_NAME_KEYS.MONTH]: yup.number().required(),
    [DATE_TIME_FORM_NAME_KEYS.DAY]: yup.number().required(),
    [DATE_TIME_FORM_NAME_KEYS.HOURS]: yup
      .number()
      .min(HOURS.MIN_VALUE)
      .max(HOURS.MAX_VALUE)
      .required(),
    [DATE_TIME_FORM_NAME_KEYS.MINUTES]: yup
      .number()
      .min(MINUTES.MIN_VALUE)
      .max(MINUTES.MAX_VALUE)
      .required(),
    [DATE_TIME_FORM_NAME_KEYS.SECONDS]: yup
      .number()
      .min(SECONDS.MIN_VALUE)
      .max(SECONDS.MAX_VALUE)
      .required(),
    [DATE_TIME_FORM_NAME_KEYS.AM_PM]: yup
      .string()
      .oneOf(AM_PM_VALUES)
      .required(),
    [DATE_TIME_FORM_NAME_KEYS.TIME_ZONE]: yup.string().required(),
    [DATE_TIME_FORM_NAME_KEYS.ADJUST_CLOCK]: yup.boolean().required(),
  });
