import { cleanup } from "@testing-library/react";
import { afterAll } from "vitest";

export const enableCleanupAfterTask = () => {
  afterAll(() => {
    cleanup();
  });
};
