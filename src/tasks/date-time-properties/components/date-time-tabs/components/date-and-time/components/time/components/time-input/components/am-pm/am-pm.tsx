import { FC } from "react";

import { FormSingleSelect } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import { DATE_TIME_AM_PM_TEST_ID } from "@tasks/date-time-properties/form/consts";

import { useGetAmPmOptions } from "./hooks";

export const AmPm: FC = () => {
  const { options } = useGetAmPmOptions();

  return (
    <FormSingleSelect
      testId={DATE_TIME_AM_PM_TEST_ID}
      name={DATE_TIME_FORM_NAME_KEYS.AM_PM}
      options={options}
    />
  );
};
