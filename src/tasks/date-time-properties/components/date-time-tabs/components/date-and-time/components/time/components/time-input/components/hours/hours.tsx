import { FC } from "react";

import { FormInputNumber } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import {
  DATE_TIME_HOUR_TEST_ID,
  HOURS,
} from "@tasks/date-time-properties/form/consts";

export const Hours: FC = () => {
  return (
    <FormInputNumber
      name={DATE_TIME_FORM_NAME_KEYS.HOURS}
      min={HOURS.MIN_VALUE}
      max={HOURS.MAX_VALUE}
      testId={DATE_TIME_HOUR_TEST_ID}
    />
  );
};
