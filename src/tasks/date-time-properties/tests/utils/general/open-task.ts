import { expect, it } from "vitest";
import { fireEvent, screen, waitFor, within } from "@testing-library/dom";

import { START_MENU_TEST_ID } from "@layouts/desktop/components/start-menu/constants";
import { START_MENU_CLOCK_TEST_ID } from "@layouts/desktop/components/start-menu/components/clock/components/constants";

import { DATE_TIME_TEST_ID } from "@tasks/date-time-properties/constants";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

export const openTask = async () => {
  it("Open task", LONG_WAIT_FOR_OPTIONS, async () => {
    const startMenu = screen.getByTestId(START_MENU_TEST_ID);

    const clockButton = within(startMenu).getByTestId(START_MENU_CLOCK_TEST_ID);

    fireEvent.dblClick(clockButton);

    await waitFor(() => {
      const dateTime = screen.getByTestId(DATE_TIME_TEST_ID);

      expect(dateTime).toBeInTheDocument();
    });
  });
};
