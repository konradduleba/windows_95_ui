import { ReactNode } from "react";

export type TaskId = string;

export type Task = {
  id: TaskId;
  content: ReactNode;
};

export type TaskManagerContextProps = {
  tasks: Task[];
  activeTaskId: TaskId;
  onAddTask: (newTask: Task) => void;
  onCloseTask: (taskId: TaskId) => void;
  onMarkAsActiveTask: (taskId: TaskId) => void;
};
