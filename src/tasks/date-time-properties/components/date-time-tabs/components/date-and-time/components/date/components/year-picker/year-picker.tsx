import { FC } from "react";

import { FormInputNumber } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import {
  DATE_TIME_YEAR_TEST_ID,
  YEAR,
} from "@tasks/date-time-properties/form/consts";

export const YearPicker: FC = () => {
  return (
    <FormInputNumber
      max={YEAR.MAX_VALUE}
      min={YEAR.MIN_VALUE}
      name={DATE_TIME_FORM_NAME_KEYS.YEAR}
      testId={DATE_TIME_YEAR_TEST_ID}
    />
  );
};
