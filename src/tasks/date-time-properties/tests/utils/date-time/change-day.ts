import { expect, it } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { DATE_TIME_DAY_TEST_ID } from "@tasks/date-time-properties/form/consts";
import {
  DAY_AVAILABLE_ITEM_TEST_ID,
  DAY_LIST_TEST_ID,
} from "@tasks/date-time-properties/constants";

import { getRandomNumber, getSelectedItemTextIdRegex } from "@tests/utils";

const SYSTEM_DAY_NUMBER = new Date().getDate();
const MIN_DAY_NUMBER = 1;

const SELECTED_DAY_REGEX = getSelectedItemTextIdRegex({
  selectedId: DATE_TIME_DAY_TEST_ID,
  targetId: DAY_AVAILABLE_ITEM_TEST_ID,
});

const getCurrentDayData = () => {
  const dayListContainer = screen.getByTestId(DAY_LIST_TEST_ID);

  const currentDay =
    within(dayListContainer).getByTestId(SELECTED_DAY_REGEX).textContent;

  const dayList = within(dayListContainer).getAllByTestId(
    DAY_AVAILABLE_ITEM_TEST_ID
  );

  if (!currentDay) {
    throw new Error(
      `Expected to contain current day. But received currentDay: ${currentDay}`
    );
  }

  const currentDayAsNumber = parseInt(currentDay);

  return {
    currentDay: currentDayAsNumber,
    dayList,
  };
};

export const changeDay = () => {
  it("Should change day", async () => {
    const { currentDay, dayList } = getCurrentDayData();

    expect(currentDay).toBe(SYSTEM_DAY_NUMBER);

    const randomDayNumber = getRandomNumber({
      min: MIN_DAY_NUMBER,
      max: dayList.length,
      excludeNum: currentDay,
    });

    const dayToSelect = dayList.find(({ textContent }) =>
      textContent ? parseInt(textContent) === randomDayNumber : undefined
    );

    if (!dayToSelect) {
      throw new Error(`Expected to contain other options than ${dayToSelect}`);
    }

    await userEvent.click(dayToSelect);

    const { currentDay: newCurrentDay } = getCurrentDayData();

    expect(newCurrentDay).toBe(randomDayNumber);
  });
};
