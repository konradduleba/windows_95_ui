import { FC } from "react";

import { FormSingleSelect } from "@forms/controllers";

import { getMonthListOptions } from "./helpers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";

import { DATE_TIME_MONTH_TEST_ID } from "@tasks/date-time-properties/form/consts";

export const MonthSelect: FC = () => {
  const options = getMonthListOptions();

  return (
    <FormSingleSelect
      name={DATE_TIME_FORM_NAME_KEYS.MONTH}
      options={options}
      testId={DATE_TIME_MONTH_TEST_ID}
    />
  );
};
