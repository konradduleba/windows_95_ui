import { FC } from "react";

import { FormSingleSelect } from "@forms/controllers";

import { DATE_TIME_FORM_NAME_KEYS } from "@tasks/date-time-properties/form/types";
import { TIME_ZONE_PICKER_TEST_ID } from "@tasks/date-time-properties/constants";

import { useGetTimeZonePickerOptions } from "./hooks";

export const TimeZonePicker: FC = () => {
  const { options } = useGetTimeZonePickerOptions();

  return (
    <FormSingleSelect
      name={DATE_TIME_FORM_NAME_KEYS.TIME_ZONE}
      testId={TIME_ZONE_PICKER_TEST_ID}
      options={options}
    />
  );
};
