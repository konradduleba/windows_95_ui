import { ReactNode } from "react";

import { TaskId } from "@providers/task-manager-provider/types";

export type TaskProps = {
  taskTitle: string;
  taskId: TaskId;
  Component: ReactNode;
};

export type TestProps = {
  containerId: string;
};
