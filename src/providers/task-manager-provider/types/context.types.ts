import { ReactNode } from "react";

import { UserRole } from "@providers/auth-provider/types";

export type TaskId = string;

export type Task = {
  id: TaskId;
  content: ReactNode;
  access: UserRole[];
};

export type TaskManagerContextProps = {
  tasks: Task[];
  activeTaskId: TaskId;
  onAddTask: (newTask: Task) => void;
  onCloseTask: (taskId: TaskId) => void;
  onMarkAsActiveTask: (taskId: TaskId) => void;
};
