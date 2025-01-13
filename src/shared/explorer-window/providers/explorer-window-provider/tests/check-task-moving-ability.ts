import { expect, it } from "vitest";
import { fireEvent, screen, within } from "@testing-library/react";

import { getRandomNumber } from "@tests/utils";

import { EXPLORER_WINDOW_HEADING_TEST_ID } from "../constants";

import { MovingAbilityProps, Position } from "../types";

const MOVE_PARAMS = {
  clientX: getRandomNumber({ min: 1, max: 100 }),
  clientY: getRandomNumber({ min: 1, max: 100 }),
};

const getTaskPosition = (container: HTMLElement): Position => {
  const containerStyles = window.getComputedStyle(container);

  return {
    x: parseInt(containerStyles.left, 10),
    y: parseInt(containerStyles.top, 10),
  };
};

const checkTaskPosition = (oldPositon: Position, newPositon: Position) => {
  expect(oldPositon.x).toBe(newPositon.x);
  expect(oldPositon.y).toBe(newPositon.y);
};

export const checkTaskMovingAbility = ({
  containerId,
  position,
}: MovingAbilityProps) => {
  it("Should be able to move Task on Desktop", async () => {
    const container = screen.getByTestId(containerId);
    const heading = within(container).getByTestId(
      EXPLORER_WINDOW_HEADING_TEST_ID
    );

    const taskPosition = getTaskPosition(container);
    const currentPosition: Position = {
      y: position.y,
      x: position.x || taskPosition.x,
    };

    checkTaskPosition(currentPosition, taskPosition);

    fireEvent.mouseDown(heading, {
      clientX: currentPosition.x,
      clientY: currentPosition.y,
    });

    const expectedX = currentPosition.x + MOVE_PARAMS.clientX;
    const expectedY = currentPosition.y + MOVE_PARAMS.clientY;

    fireEvent.mouseMove(window, {
      clientX: expectedX,
      clientY: expectedY,
    });

    fireEvent.mouseUp(window);

    const newTaskPosition = getTaskPosition(container);

    const expectedPosition: Position = {
      x: expectedX,
      y: expectedY,
    };

    checkTaskPosition(expectedPosition, newTaskPosition);
  });
};
