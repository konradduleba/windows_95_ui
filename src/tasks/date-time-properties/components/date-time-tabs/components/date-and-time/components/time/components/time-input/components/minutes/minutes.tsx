import { FC } from "react";

import { FormInputNumber } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import {
  DATE_TIME_MINUTE_TEST_ID,
  MINUTES,
} from "@tasks/date-time-properties/form/consts";

export const Minutes: FC = () => {
  return (
    <FormInputNumber
      name={DATE_TIME_FORM_NAME_KEYS.MINUTES}
      min={MINUTES.MIN_VALUE}
      max={MINUTES.MAX_VALUE}
      testId={DATE_TIME_MINUTE_TEST_ID}
    />
  );
};
