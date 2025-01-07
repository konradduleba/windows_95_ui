import { TIME_ZONES } from "@providers/date-time-provider/constants";

import { SelectOption } from "@forms/controllers/form-single-select/types";

export const useGetTimeZonePickerOptions = () => {
  const options: SelectOption[] = Object.values(TIME_ZONES).map(
    ({ id, name }) => ({
      label: name,
      value: id,
    })
  );

  return {
    options,
  };
};
