import { MONTH_LIST } from "@providers/date-time-provider/constants";

import { SelectOption } from "@forms/controllers/form-single-select/types";

export const getMonthListOptions = (): SelectOption[] => {
  return MONTH_LIST.map((month, index) => ({
    label: month,
    value: index,
  }));
};
