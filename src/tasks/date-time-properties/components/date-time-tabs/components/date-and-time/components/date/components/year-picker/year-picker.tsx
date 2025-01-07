import { FC } from "react";

import { FormInputNumber } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import { DATE_TIME_YEAR_TEST_ID } from "@tasks/date-time-properties/form/consts";

export const YearPicker: FC = () => {
  return (
    <FormInputNumber
      max={2137}
      min={1970}
      name={DATE_TIME_FORM_NAME_KEYS.YEAR}
      testId={DATE_TIME_YEAR_TEST_ID}
    />
  );
};
