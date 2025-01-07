import { screen } from "@testing-library/dom";

import { MAIN_WRAPPER_TEST_ID } from "../constants";

const HEIGHT = 800;
const WIDTH = 1000;

const WRAPPER_DIMENSIONS_MOCK: DOMRect = {
  bottom: HEIGHT,
  height: HEIGHT,
  left: 0,
  right: WIDTH,
  top: 0,
  width: WIDTH,
  x: 0,
  y: 0,
  toJSON: () => {},
};

export const mockMainWrapperDimensions = () => {
  const container = screen.getByTestId(MAIN_WRAPPER_TEST_ID);

  container.getBoundingClientRect = () => WRAPPER_DIMENSIONS_MOCK;
};
