import { AM_PM_VALUES } from "@tasks/date-time-properties/form/validation";

import { SelectOption } from "@forms/controllers/form-single-select/types";

export const useGetAmPmOptions = () => {
  const options: SelectOption[] = AM_PM_VALUES.map((option) => ({
    label: option,
    value: option,
  }));

  return {
    options,
  };
};
