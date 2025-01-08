import { beforeAll, it } from "vitest";
import { render } from "@testing-library/react";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

import { waitForTaskRender } from "@shared/explorer-window/providers/explorer-window-provider/tests";

import { LONG_WAIT_FOR_OPTIONS } from "@tests/mocks/constants";

import { authenticateUser } from "@tasks/login-user/tests/utils";

import { TaskManager } from "./task-manager";

import { TaskProps, TestProps } from "./types";

type CheckTaskRenderProps = TestProps & TaskProps;

export const checkTaskRender = async ({
  Component,
  taskTitle,
  taskId,
  containerId,
}: CheckTaskRenderProps) => {
  beforeAll(() => {
    render(
      <MainAppProviders>
        <TaskManager Component={Component} taskId={taskId} />
      </MainAppProviders>
    );
  });

  it("Authenticate user", LONG_WAIT_FOR_OPTIONS, async () => {
    await authenticateUser();
  });

  it("Wait for task render", LONG_WAIT_FOR_OPTIONS, async () => {
    await waitForTaskRender({ taskTitle, containerId });
  });
};
