import { screen } from "@testing-library/dom";

import { SCREEN_CONTAINER_TEST_ID } from "../constants";

const SCREEN_DIMENSIONS_MOCK: DOMRect = {
  bottom: 670.796875,
  height: 576,
  left: 116,
  right: 884,
  top: 94.796875,
  width: 768,
  x: 116,
  y: 94.796875,
  toJSON: () => {},
};

export const mockScreenContainerDimensions = () => {
  const container = screen.getByTestId(SCREEN_CONTAINER_TEST_ID);

  container.getBoundingClientRect = () => SCREEN_DIMENSIONS_MOCK;
};
