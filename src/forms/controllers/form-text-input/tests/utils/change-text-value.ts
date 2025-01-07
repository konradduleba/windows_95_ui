import { expect } from "vitest";

import { screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { ChangeTextValueProps } from "../types";

export const changeTextValue = async ({
  newValue,
  testId,
}: ChangeTextValueProps) => {
  const container = screen.getByTestId(`${testId}-container`);
  const textInput = within(container).getByTestId(testId) as HTMLInputElement;

  await userEvent.clear(textInput);

  expect(textInput).toHaveValue("");

  await userEvent.type(textInput, newValue);

  expect(textInput).toHaveValue(newValue);
};
