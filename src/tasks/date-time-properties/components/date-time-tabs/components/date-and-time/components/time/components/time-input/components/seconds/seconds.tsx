import { FC } from "react";

import { FormInputNumber } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import {
  DATE_TIME_SECOND_TEST_ID,
  SECONDS,
} from "@tasks/date-time-properties/form/consts";

export const Seconds: FC = () => {
  return (
    <FormInputNumber
      name={DATE_TIME_FORM_NAME_KEYS.SECONDS}
      min={SECONDS.MIN_VALUE}
      max={SECONDS.MAX_VALUE}
      testId={DATE_TIME_SECOND_TEST_ID}
    />
  );
};
