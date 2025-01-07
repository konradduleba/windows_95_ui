import { FC, useEffect } from "react";

import { Task } from "@providers/task-manager-provider/types";
import { useTaskManager } from "@providers/task-manager-provider/hooks";

import { TaskProps } from "./types";

type TaskManagerProps = Pick<TaskProps, "Component" | "taskId">;

export const TaskManager: FC<TaskManagerProps> = ({ Component, taskId }) => {
  const { onAddTask } = useTaskManager();

  useEffect(() => {
    const taskProperties: Task = {
      id: taskId,
      content: Component,
    };

    onAddTask(taskProperties);
  }, []);

  return null;
};
