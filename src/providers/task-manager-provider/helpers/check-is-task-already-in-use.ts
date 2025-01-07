import { Task, TaskId } from "../types";

export const checkIsTaskAlreadyInUse = (taskId: TaskId, tasks: Task[]) => {
  return tasks.some(({ id }) => id === taskId);
};
