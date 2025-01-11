import { describe } from "vitest";

import { authenticateUser } from "./utils";

export const loginUserTest = async () => {
  describe("Task: Login User", async () => {
    await authenticateUser();
  });
};
