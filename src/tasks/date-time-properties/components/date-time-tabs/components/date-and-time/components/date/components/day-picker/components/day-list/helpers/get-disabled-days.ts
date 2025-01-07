import { v4 as uuidv4 } from "uuid";

import { Day } from "../types";

export const getDisabledDays = (startDay: number): Day[] => {
  const disabledDays: Day[] = [];

  for (let i = startDay; i > 0; i--) {
    disabledDays.push({
      id: uuidv4(),
      isDisabled: true,
    });
  }

  return disabledDays;
};
