import {
  waitFor,
  screen,
  waitForOptions,
  within,
} from "@testing-library/react";

import { expect } from "vitest";

import { EXPLORER_WINDOW_HEADER_TEST_ID } from "../constants";

import { TestProps } from "../types";

const WAIT_FOR_OPTIONS: waitForOptions = {
  timeout: 5000,
};

type WaitForTaskRenderProps = TestProps & {
  taskTitle: string;
};

export const waitForTaskRender = async ({
  taskTitle,
  containerId,
}: WaitForTaskRenderProps) => {
  await waitFor(() => {
    const container = screen.getByTestId(containerId);
    const heading = within(container).getByTestId(
      EXPLORER_WINDOW_HEADER_TEST_ID
    );

    expect(heading).toHaveTextContent(taskTitle);
    expect(heading).toBeVisible();
  }, WAIT_FOR_OPTIONS);
};
