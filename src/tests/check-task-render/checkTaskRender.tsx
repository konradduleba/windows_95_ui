import { beforeEach, describe } from "vitest";
import { render } from "@testing-library/react";

import { MainAppProviders } from "@providers/main-app-providers/main-app-providers";

import {
  checkCloseTask,
  waitForTaskRender,
} from "@shared/explorer-window/providers/explorer-window-provider/tests";

import { getBoundingClientRectMock, HTMLElementOffsets } from "@tests/mocks";

import { TaskManager } from "./task-manager";

import { TaskProps, TestProps } from "./types";
import { authenticateUser } from "@tasks/login-user/tests/utils";

type CheckTaskRenderProps = TestProps & TaskProps;

getBoundingClientRectMock();
HTMLElementOffsets();

export const checkTaskRender = async ({
  Component,
  taskTitle,
  taskId,
  containerId,
}: CheckTaskRenderProps) => {
  beforeEach(async () => {
    render(
      <MainAppProviders>
        <TaskManager Component={Component} taskId={taskId} />
      </MainAppProviders>
    );

    await authenticateUser();
    await waitForTaskRender({ taskTitle, containerId });
  });

  describe("Task render properties:", async () => {
    checkCloseTask({ containerId });
  });
};
