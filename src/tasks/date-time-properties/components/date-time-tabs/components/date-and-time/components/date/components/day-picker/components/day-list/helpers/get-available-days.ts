import { v4 as uuidv4 } from "uuid";

import { Day } from "../types";

export const getAvailableDays = (
  daysInMonth: number,
  selectedDay: number
): Day[] => {
  const availableDays: Day[] = [];

  for (let i = 1; i <= daysInMonth; i++) {
    availableDays.push({
      id: uuidv4(),
      value: i,
      isSelected: i === selectedDay,
    });
  }

  return availableDays;
};
