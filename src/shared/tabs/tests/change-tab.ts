import { expect } from "vitest";
import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { SELECTED_TAB_TEST_ID } from "@shared/tabs/constants";

import { getSelectedItemTextIdRegex } from "@tests/utils";

type ChangeTabProps = {
  containerId: string;
  targetTabId: string;
};

export const changeTab = async ({
  containerId,
  targetTabId,
}: ChangeTabProps) => {
  const tabContainer = screen.getByTestId(containerId);

  const targetTab = within(tabContainer).getByTestId(targetTabId);

  await userEvent.click(targetTab);

  const selectedTabTestId = getSelectedItemTextIdRegex({
    selectedId: SELECTED_TAB_TEST_ID,
    targetId: targetTabId,
  });

  const selectedTab = within(tabContainer).getByTestId(selectedTabTestId);

  expect(selectedTab.textContent).toBe(targetTab.textContent);
};
